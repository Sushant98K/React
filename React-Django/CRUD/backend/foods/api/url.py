from rest_framework.routers import DefaultRouter
from .views import FoodViewSet

food_router = DefaultRouter()

food_router.register(r'foods', FoodViewSet)