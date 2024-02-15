from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),

    path("roles", views.roles, name="roles"),
    path("roles/detail/<int:id>", views.roles_detail, name="roles_detail"),
]