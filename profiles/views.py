from django.shortcuts import render

from .models import Profile

# Create your views here.
def profile_detail_view(request,username,*args,**kwargs):
    return render(request, "profiles/detail.html",{"username":username})