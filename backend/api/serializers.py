from rest_framework import serializers
from .models import AdminLoggedIn, AdminLoginId, UserLoggedIn, UserLoginId

class AdminloginIdSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdminLoginId
        fields = ("id", "userName", "password")

class UserloginIdSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserLoginId
        fields = ("id", "userName", "password")

class AdminloggedInSerializer(serializers.ModelSerializer):
    userName = AdminloginIdSerializer()
    class Meta:
        model = AdminLoggedIn
        fields = ("id", "userName")

class UserloggedInSerializer(serializers.ModelSerializer):
    userName = UserloginIdSerializer()
    class Meta:
        model = UserLoggedIn
        fields = ("id", "userName")