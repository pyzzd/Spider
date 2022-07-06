from django.urls import path

from Movie import views

urlpatterns = [
    path('info/',views.info,name='info'),
    path('insert/',views.insert,name="insert"),
    path('get/movie_name', views.get_info, name='get_info'),
    path('update/',views.update,name="update"),
    path('delete/',views.delete,name="delete"),

]
