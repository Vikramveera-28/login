from django.contrib import admin
from .models import AdminLoginId, AdminLoggedIn, UserLoggedIn, UserLoginId

admin.site.register(AdminLoggedIn)
admin.site.register(AdminLoginId)
admin.site.register(UserLoggedIn)
admin.site.register(UserLoginId)