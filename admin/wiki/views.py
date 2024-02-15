# Create your views here.
from django.http import HttpResponse
from django.template import loader
from wiki.models import Role, Weapon,Equipment

def index(request):
    return HttpResponse("Hello, world. You're at the wiki index.")

def roles(request):
    role_list = Role.objects.all()
    template = loader.get_template('role/role_list.html')
    context = { 'role_list': role_list }
    return HttpResponse(template.render(context, request))

def roles_detail(request, id):
    role = Role.objects.get(pk = id)
    template = loader.get_template('role/role_detail.html')
    # 将attrs的json字符串转换成数组
    # if json.type(role.attrs):
    # role.attrs = json.loads(role.attrs)

    context = { 'role': role }
    return HttpResponse(template.render(context, request))

def weapons(request):
    weapons_list = Weapon.objects.all()
    template = loader.get_template('weapons/weapons_list.html')
    context = {'weapons_list':weapons_list}
    return HttpResponse(template.render(context,request))

def weapons_detail(request,id):
    weapon = Weapon.objects.get(pk = id)
    template = loader.get_template('weapons/weapons_detail.html')

    context = { 'weapon':weapon}
    return HttpResponse(template.render(context,request))

def equipment_list(request):
    equipments_list = Equipment.objects.all()
    template = loader.get_template('equipments/equipments_list.html')
    context = {'equipment_list':equipments_list}
    return HttpResponse(template.render(context,request))

def equipment_detail(request,id):
    equipment = Equipment.objects.get(pk = id)
    template = loader.get_template('equipments/equipments_detail.html')

    context = { 'equipment':equipment}
    return HttpResponse(template.render(context,request))