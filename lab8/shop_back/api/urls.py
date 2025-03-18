from django.urls import path
from .views import (
    ProductList, ProductDetail,
    CategoryList, CategoryDetail,
    CategoryProducts
)

urlpatterns = [
    path('products/', ProductList.as_view(), name='product-list'),
    path('products/<int:id>/', ProductDetail.as_view(), name='product-detail'),
    path('categories/', CategoryList.as_view(), name='category-list'),
    path('categories/<int:id>/', CategoryDetail.as_view(), name='category-detail'),
    path('categories/<int:id>/products/', CategoryProducts.as_view(), name='category-products'),
]