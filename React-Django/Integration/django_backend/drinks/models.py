from django.db import models

# Create your models here.

class Drinks(models.Model):
    HOT = 'hot'
    COLD = 'cold'
    
    CATEGORY_CHOICES = [
        (HOT, 'hot'),
        (COLD, 'cold')
    ]
    
    name = models.CharField(max_length=50)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    price = models.IntegerField()
    
    def __str__(self):
        return str(self.name)