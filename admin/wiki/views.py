# Create your views here.
from django.http import HttpResponse
from django.template import loader
from wiki.models import Role

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
