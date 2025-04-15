from rest_framework.serializers import ModelSerializer
from ..models import Drinks

class DrinksSerializer(ModelSerializer):
    
    class Meta:
        model = Drinks
        fields = '__all__'