from django.conf import settings
from rest_framework import serializers
from profiles.serializers import PublicProfileSerializer

from .models import Tweet

MAX_TWEET_LENGTH = settings.MAX_TWEET_LENGTH
TWEET_ACTION_OPTION = settings.TWEET_ACTION_OPTION

class TweetActionSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    action = serializers.CharField()
    content = serializers.CharField(required=False)
   
    def validate_action(self,value):
        value = value.lower().strip()
        if not value in TWEET_ACTION_OPTION:
            raise serializers.ValidationError("This is not a valid action !")
        return value


class TweetCreateSerializer(serializers.ModelSerializer):
    user = PublicProfileSerializer(source='user.profile', read_only=True)
    likes = serializers.SerializerMethodField(read_only=True)
        
    
    class Meta:
        model = Tweet
        fields = ['user','id','content','likes','timestamp']        

    def get_likes(self,obj):
        return obj.likes.count()

    
    def validate_content(self, value):
        if len(value) > MAX_TWEET_LENGTH:
            raise serializers.ValidationError(
                "Tweets cannot be more than 240 characters.")
        return value      
    
   
class TweetSerializer(serializers.ModelSerializer):
    user = PublicProfileSerializer(source='user.profile', read_only=True)
    likes = serializers.SerializerMethodField(read_only=True)
    parent= TweetCreateSerializer(read_only=True)
    

    class Meta:
        model = Tweet
        fields = ['user','id','content','likes','is_retweet','parent','timestamp']

    def get_likes(self,obj):
        return obj.likes.count()        

    def get_content(self,obj):
        content = obj.content
        if obj.is_retweet:
            content=obj.parent.content
        return content      
    