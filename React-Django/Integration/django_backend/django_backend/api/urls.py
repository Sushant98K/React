from django.urls import path, include
from rest_framework.routers import DefaultRouter
from food.api.urls import food_router

router = DefaultRouter()

#food > Food(model)
router.registry.extend(food_router.registry)


urlpatterns = [
    path('', include(router.urls))
]
