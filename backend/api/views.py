from django.shortcuts import render
from .models import AdminLoginId, AdminLoggedIn, UserLoginId, UserLoggedIn
from .serializers import AdminloginIdSerializer, AdminloggedInSerializer, UserloginIdSerializer, UserloggedInSerializer
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response

                                        # Admin [ GET, POST, DELETE, UPDATE ]
class GetAdminId(APIView):
    def get(self, request):
        items = AdminLoginId.objects.all()
        serializer = AdminloginIdSerializer(items, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = AdminloginIdSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class EditAdminId(APIView):
    def get(self, request, id=None):
        item = AdminLoginId.objects.get(pk=id)
        serializer = AdminloginIdSerializer(item)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def patch(self, request, id=None):
        item = AdminLoginId.objects.get(pk=id)
        serializer = AdminloginIdSerializer(item, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, id=None):
        item = AdminLoginId.objects.get(pk=id)
        item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


                                        # LoggedAdmin [ GET, POST, DELETE, UPDATE ]
class GetAdminloggedIn(APIView):
    def get(self, request):
        items = AdminLoggedIn.objects.all()
        serializer = AdminloggedInSerializer(items, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = AdminloggedInSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class EditAdminloggedIn(APIView):
    def get(self, request, id=None):
        item = AdminLoggedIn.objects.get(pk=id)
        serializer = AdminloggedInSerializer(item)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def put(self, request, id=None):
        try:
            item = AdminLoggedIn.objects.get(pk=id)
            serializer = AdminloggedInSerializer(item, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except AdminLoggedIn.DoesNotExist:
            return Response({"error": "AdminLoggedIn instance not found"}, status=status.HTTP_404_NOT_FOUND)
    
    def delete(self, request, id=None):
        item = AdminLoggedIn.objects.get(pk=id)
        item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)




                                        # User [ GET, POST, DELETE, UPDATE ]
class GetUserId(APIView):
    def get(self, request):
        items = UserLoginId.objects.all()
        serializer = UserloginIdSerializer(items, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = UserloginIdSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class EditUserId(APIView):
    def get(self, request, id=None):
        item = UserLoginId.objects.get(pk=id)
        serializer = UserloginIdSerializer(item)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def patch(self, request, id=None):
        item = UserLoginId.objects.get(pk=id)
        serializer = UserloginIdSerializer(item, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, id=None):
        item = UserLoginId.objects.get(pk=id)
        item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    


                                        # LoggedUser [ GET, POST, DELETE, UPDATE ]
class GetUserloggedIn(APIView):
    def get(self, request):
        items = UserLoggedIn.objects.all()
        serializer = UserloggedInSerializer(items, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = UserloggedInSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)