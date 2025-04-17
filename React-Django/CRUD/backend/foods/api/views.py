from rest_framework.viewsets import ModelViewSet
from ..models import Food
from .serializers import FoodSerializer

class FoodViewSet(ModelViewSet):
    queryset = Food.objects.all()
    serializer_class = FoodSerializer