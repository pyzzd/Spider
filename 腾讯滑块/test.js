chainedProxy = function (obj_, obj_name, proxy=true) {
    function set_traverse_object(tarrget, obj, recursion_layers) {
        recursion_layers -= 1;
        console.log();
        for (let prop in obj) {
            const value = obj[prop];
            const tg_name = `${tarrget}.${prop.toString()}`;
            const value_type = get_value_type(value);
            if (value && value_type === "object" && recursion_layers >= 1) {
                set_traverse_object(tg_name, value, recursion_layers);
                continue
            }
            if (value && value.toString() !== '[object Object]') {
                console.log(`setter  hook->${tg_name};  value-> ${value};  typeof-> ${value_type}`);
                continue
            }
            console.log(`setter  hook->${tg_name};  value-> ${value};  typeof-> ${value_type}\n`)
        }
    }
 
    function new_handel(target_name, obj, number) {
        return new Proxy(obj, my_handler(target_name, number))
    }
 
    function get_value_type(value) {
        // 这里注释掉的地方可能有问题,如果出现问题则取消注释
        // if (Array.isArray(value)) {
        //     return 'Array'
        // }
        return typeof value;
    }
 
    function my_handler(target_name, number) {
        return {
            set: function (obj, prop, value) {
                const value_type = get_value_type(value);
                const tg_name = `${target_name}.${prop.toString()}`;
 
                if (value && value_type === "object") {
                    set_traverse_object(tg_name, value, number)
                } else {
                    console.log(`setter  hook->${tg_name};  value-> ${value};  typeof-> ${value_type}`)
                }
                return Reflect.set(obj, prop, value);
            },
            get: function (obj, prop) {
                const tg_name = `${target_name}.${prop.toString()}`;
                const value = Reflect.get(obj, prop);
                let value_type = get_value_type(value);
                if (value && value_type === 'object') {
                    return new_handel(tg_name, value, number)
                }
                console.log(`getter  hook->${tg_name};  value-> ${value};  typeof-> ${value_type}\n`);
                return value
            },
            deleteProperty(target, propKey) {
                // 没有实现链式输出
                let result = Reflect.deleteProperty(target, propKey);
                let value_type = get_value_type(result);
 
                console.log(`delete hook-> ${propKey}, result-> ${result};  typeof-> ${value_type}\n`);
                return result;
            }
        }
    }
    if (!(proxy === true)){
        return obj_;
    }
    return new Proxy(obj_, my_handler(obj_name, 30));
};


window = chainedProxy(window, 'window');