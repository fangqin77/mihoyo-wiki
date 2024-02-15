from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),

    path("roles", views.roles, name="roles"),
    path("roles/detail/<int:id>", views.roles_detail, name="roles_detail"),
    
    path("weapons", views.weapons, name="weapons"),
    path("weapons/detail/<int:id>", views.weapons_detail, name="weapons_detail"), 

    path("equipments", views.equipment_list, name="equipments"),
    path("equipments/detail/<int:id>", views.equipment_detail, name="equipments_detail"), 


]