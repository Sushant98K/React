from django.urls import path, include
from rest_framework.routers import DefaultRouter
from food.api.urls import food_router
from drinks.api.urls import drinks_router

router = DefaultRouter()

#food > Food(model)
router.registry.extend(food_router.registry)

#drinks > Drinks(model)
router.registry.extend(drinks_router.registry)

urlpatterns = [
    path('', include(router.urls))
]
