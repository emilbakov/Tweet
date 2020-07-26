import random

from django.http import HttpResponse, Http404, JsonResponse
from django.shortcuts import render

from .forms import TweetForm

from .models import Tweet

# Create your views here.
def home_view(request, *args,**kwargs):
    print(args,kwargs)
    return render(request,"pages/home.html",context={},status=200)


#django form
def tweet_create_view(request,*args,**kwargs):
    form = TweetForm(request.POST or None)
    if form.is_valid():
        obj = form.save(commit=False)

        obj.save()
        form= TweetForm()
    return render(request,'components/form.html', context={"form": form})

def tweet_list_view(request,*args,**kwargs):
    qs=Tweet.objects.all()
    tweet_list=[{"id":x.id, "content":x.content , "likes": random.randint(0,100)} for x in qs]
    data = {
        "response":tweet_list
    }
    return JsonResponse(data)


def tweet_detail_view(request,tweet_id, *args,**kwargs):
    print(args,kwargs)
    data = {
        "id":tweet_id,
        # "image_path":obj.image.url
    }
    status = 200 
    try:
        obj = Tweet.objects.get(id=tweet_id)
        data['content']=obj.content
    except:
        data['message']="not found"
        status= 404
    
    return JsonResponse(data, status=status)

