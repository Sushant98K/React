from .serializers import FoodSerializer
from rest_framework.viewsets import ModelViewSet
from ..models import Food

class FoodViewSet(ModelViewSet):
    queryset = Food.objects.all()
    serializer_class = FoodSerializer