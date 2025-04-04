from django.db import models

class AdminLoginId(models.Model):
    userName = models.CharField(max_length=20)
    password = models.CharField(max_length=150)
    
    def __str__(self):
        return self.userName

    class Meta:
        db_table = "AdminLoginId"

class AdminLoggedIn(models.Model):
    userName = models.OneToOneField(AdminLoginId, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.userName.userName

    class Meta:
        db_table = "AdminloggedIn"

class UserLoginId(models.Model):
    userName = models.CharField(max_length=20)
    password = models.CharField(max_length=150)
    
    def __str__(self):
        return self.userName

    class Meta:
        db_table = "UserLoginId"

class UserLoggedIn(models.Model):
    userName = models.OneToOneField(UserLoginId, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.userName.userName

    class Meta:
        db_table = "UserloggedIn"
