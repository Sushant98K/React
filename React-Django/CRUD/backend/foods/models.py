from django.db import models

# Create your models here.

class Food(models.Model):
    foodName = models.CharField(max_length=50)
    foodType = models.CharField(max_length=50)
    foodCategory = models.CharField(max_length=50)
    foodPrice = models.IntegerField()
    
    def __str__(self):
        return str(self.foodName)