from rest_framework.routers import DefaultRouter
from .views import DrinksViewSet

drinks_router = DefaultRouter()

drinks_router.register(r'drinks', DrinksViewSet)