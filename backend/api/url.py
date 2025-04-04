from django.urls import path
from . import views

urlpatterns = [
    path('admin/', views.GetAdminId.as_view()),
    path('admin/<int:id>', views.EditAdminId.as_view()),
    path('user/', views.GetUserId.as_view()),
    path('user/<int:id>', views.EditUserId.as_view()),
    path('loggedAdmin/', views.GetAdminloggedIn.as_view()),
    path('loggedAdmin/<int:id>', views.EditAdminloggedIn.as_view()),
    path('loggedUser/', views.GetUserloggedIn.as_view()),
]