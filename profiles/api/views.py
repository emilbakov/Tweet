import random

from django.conf import settings
from django.contrib.auth import get_user_model
from django.http import HttpResponse, Http404, JsonResponse
from django.shortcuts import render, redirect
from django.utils.http import is_safe_url

from rest_framework.decorators import api_view, permission_classes,authentication_classes
from rest_framework.permissions import IsAuthenticated 
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication #default



from ..models import Profile

User= get_user_model()
ALLOWED_HOSTS = settings.ALLOWED_HOSTS

# Create your views here.


#rest framework

@api_view(['POST'])

@permission_classes([IsAuthenticated]) 
def user_profile_detail_view(request,username,*args,**kwargs):
    current_user= request.user

    
        
        
    return Response({},status=400)

@api_view(['GET','POST'])
@permission_classes([IsAuthenticated]) 
def user_follow_view(request,username,*args,**kwargs):
    me = request.user
    other_user_qs = User.objects.filter(username=username)
    if me.username == request.user:
        my_followers = me.profile.followers.all()    
        return Response({"count":current_followers_qs.count()},status=400)
    if not other_user_qs.exists():
         return Response({},status=404)
    other=other_user_qs.first()
    profile = other.profile
    data =request.data or {}    
    action=data.get("action")
    if action == "follow":
        profile.followers.add(me)    
    if action == "unfollow":
        profile.followers.remove(me)    
    else:
        pass        
    current_followers_qs= profile.followers.all()    
    return Response({"count":current_followers_qs.count()},status=400)



