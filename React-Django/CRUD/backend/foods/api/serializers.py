from rest_framework.serializers import HyperlinkedModelSerializer
from ..models import Food

class FoodSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Food
        fields = ['url', 'id', 'foodName', 'foodType', 'foodCategory', 'foodPrice']