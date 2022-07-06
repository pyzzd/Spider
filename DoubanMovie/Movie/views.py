from django.http import HttpResponse, JsonResponse

from Movie.models import Movie
import sys
sys.path.append("..")
from MiddleWare.DouBanSpider import Douban


error_info = {
    'status':500,
    'msg':'error',
    'data':''
}

def info(request):
    page=int(request.GET.get('page'))
    index=(page-1)*15
    index_ = page*15
    movies = Movie.objects.all()
    if index>len(movies):
        return JsonResponse({'status':200,'msg':'error','data':''},json_dumps_params={'ensure_ascii':False})
    if index_ >len(movies):
        movies = movies[index:len(movies)-1]
    else:
        movies = movies[index:index_]
    data_list = []
    data_dict = {}
    for movie in movies:
        data = {
            'title':movie.title,
            'score':movie.score,
            'brief': movie.brief,
            'director': movie.director,
            'actors': movie.actors,
            'm_type': movie.type,
            'language': movie.language,
            'release_date': movie.release_date,
            'duration': movie.duration,
            'nation': movie.nation,
            'cover': movie.cover,
            'watched': movie.watched,
            'wanna_see': movie.wanna_see,
            'id':movie.id
        }
        data_list.append(data)
    data_dict['item'] = data_list
    return JsonResponse(data_dict,json_dumps_params={'ensure_ascii':False})

def insert(request):
    Mname = request.POST.get('movie_name')
    spider = Douban(Mname)
    try:
        title,score,brief,director,actors,m_type,language,release_date,duration,nation,cover,watched,wanna_see,id = spider.get_detailed_info()

    except:
        return JsonResponse(error_info, json_dumps_params={'ensure_ascii': False})
    exist_dict = {
        'status':'200',
        'msg':'movie is exists',
        'data':'该电影已存在'
    }
    if Movie.objects.filter(id=id).exists():
        return JsonResponse(exist_dict,json_dumps_params={'ensure_ascii':False})

    movie = Movie(title=title,score=score,brief=brief,director=director,actors=actors,type=m_type,language=language,release_date=release_date,duration=duration,nation=nation,cover=cover,watched=watched,wanna_see=wanna_see,id=id )
    movie.save()
    ok_dict = {
        'status':'200',
        'msg':'ok',
        'data':'保存成功'
    }
    return JsonResponse(ok_dict, json_dumps_params={'ensure_ascii': False})

def get_info(request):
    info_dict = {
        'status':200,
        'msg':'不存在',
        'data':''
    }
    Mname = request.POST.get('movie_name')
    if Movie.objects.filter(title__contains=Mname).exists():
        mm = Movie.objects.filter(title__contains=Mname)[0]

        data = {
            'title': mm.title,
            'score': mm.score,
            'director': mm.director,
            'm_type': mm.type,
            'release_date': mm.release_date,
            'id': mm.id
        }
        info_dict['data'] = data
        info_dict['msg'] = 'success'
        return JsonResponse(info_dict,json_dumps_params={'ensure_ascii':False})
    else:
        return JsonResponse(info_dict, json_dumps_params={'ensure_ascii': False})
def update(request):
    id = request.POST.get('id')
    score = request.POST.get('score')
    if Movie.objects.filter(id=id).exists():
        mm = Movie.objects.get(id=id)
        mm.score = score
        mm.save()
        return JsonResponse({'status':200,'msg':'ok','data':'评分修改成功'},json_dumps_params={'ensure_ascii':False})
    else:
        return JsonResponse({'status':200,'msg':'id不存在','data':''}, json_dumps_params={'ensure_ascii': False})

def delete(request):
    id = request.POST.get('id')
    if Movie.objects.filter(id=id).exists():
        mm = Movie.objects.get(id=id)
        mm.delete()
        return JsonResponse({'status':200,'msg':'ok','data':'电影删除成功'},json_dumps_params={'ensure_ascii':False})
    else:
        return JsonResponse({'status':200,'msg':'id不存在','data':'error'}, json_dumps_params={'ensure_ascii': False})
