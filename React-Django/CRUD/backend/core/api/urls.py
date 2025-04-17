from rest_framework.routers import DefaultRouter
from django.urls import path, include

from foods.api.url import food_router

router = DefaultRouter()

#foods > Food(model)
router.registry.extend(food_router.registry)

urlpatterns = [
    path('', include(router.urls))
]
