from django.db import models

# Create your models here.
class Food(models.Model):
    name = models.CharField(max_length=50)
    type = models.CharField(max_length=50)
    price = models.IntegerField()
    
    def __str__(self):
        return str(self.name)