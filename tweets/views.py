import random

from django.conf import settings
from django.http import HttpResponse, Http404, JsonResponse
from django.shortcuts import render, redirect
from django.utils.http import is_safe_url


# Create your views here.

def home_view(request, *args,**kwargs):
    print(args,kwargs)
    username = None
    if request.user.is_authenticated:
        username=request.user.username

    return render(request,"pages/home.html",context={"username":username},status=200)

def tweet_list_view(request, *args,**kwargs):
    print(args,kwargs)
    return render(request,"tweets/list.html")


def tweet_detail_view(request,tweet_id, *args,**kwargs):
    print(args,kwargs)
    return render(request,"tweets/detail.html",context={"tweet_id":tweet_id},status=200)





