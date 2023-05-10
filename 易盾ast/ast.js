const fs = require("fs");
const parser = require("@babel/parser")
const babel = require("@babel/core")
const traverse = require('@babel/traverse').default
const generator = require("@babel/generator").default;
const types = require("@babel/types")

var code = fs.readFileSync('code.js', {encoding: "utf-8"});
code = code.toString()
var ast = parser.parse(code)
var ast1 = parser.parse(code)

//大数组变量名
const largeArray = ast1.program.body[1].id.name
//获取大数组以及偏移代码
traverse(ast, {
    enter(path) {
        if (path.node.type === 'AssignmentExpression' && path.node.left.type === 'MemberExpression') {
            path.remove()
        }
    }
})

offsetCode = generator(ast, {compact: true}).code
eval(offsetCode)
let quoteArray = new Set([largeArray]);
let current = [largeArray];
while (true) {
    let floor = [];
    current.forEach(function (valName) {
        traverse(ast1, {
            VariableDeclarator(path) {
                if (path.node.init != null && path.node.init.type === "Identifier" && path.node.init.name === valName) {
                    floor.push(path.node.id.name)
                    path.remove()
                }
            }
        });
    })
    if (floor.length === 0) {
        break
    } else {
        quoteArray = new Set([...quoteArray].concat(floor));
        current = floor;
    }
}

console.log(quoteArray)
console.log(quoteArray.size)

traverse(ast1, {
    CallExpression(path) {
        if (path.node.arguments.length === 1 && quoteArray.has(path.node.callee.name)) {
            path.node.callee.name = largeArray
            path.replaceInline(types.stringLiteral(eval(path.toString())))
        }

    }
});

let largeObjects = [];
traverse(ast1, {
    VariableDeclarator(path) {
        if (path.node.init != null && path.node.init.type === "ObjectExpression" && path.node.init.properties.length >= 1) {
            try {
                largeObjects.push(path.node.id.name)
                eval(path.toString())
            } catch (e) {

            }

        }
    }
})
traverse(ast1, {
    MemberExpression(path) {
        if (path.node.object.type === 'Identifier' && largeObjects.indexOf(path.node.object.name) > -1) {
            try {
                var path_value = eval(path.toString());
                path.replaceInline(types.stringLiteral(path_value));
            } catch (e) {
            }
        }
    }
})
traverse(ast1, {
    "StringLiteral|NumericLiteral"(path) {
        delete path.node.extra;
    }
})

traverse(ast1, {
    IfStatement(path) {
        if (path.node.test.type === "BooleanLiteral") {
            if (path.node.test.value) {
                path.replaceInline(path.node.consequent.body)
            } else {
                path.replaceInline(path.node.alternate.body)
            }
        }
    }
})
traverse(ast1, {
    BinaryExpression(path) {
        try {
            let {confident, value} = path.evaluate()
            if (value !== undefined) {
                path.replaceInline(types.valueToNode(value))
            }
        } catch (e) {

        }

    }
})

const gcode = generator(ast1.program.body[2].expression.expressions[1])
fs.writeFileSync("code1.js", gcode.code)
