from .serializers import DrinksSerializer
from ..models import Drinks
from rest_framework.viewsets import ModelViewSet

class DrinksViewSet(ModelViewSet):
    queryset = Drinks.objects.all()
    serializer_class = DrinksSerializer