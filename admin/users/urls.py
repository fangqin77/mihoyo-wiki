from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("pages", views.pages, name="pages"),
    path("detail/<int:user_id>", views.detail, name="detail"),
    path("user/<int:user_id>", views.user, name="user")
]