
# Create your views here.
from django.http import HttpResponse
from django.template import loader
# from users.models import Account

def index(request):
    return HttpResponse("Hello, world. You're at the users index.")

def pages(request):
    # user_list = Account.objects.all()
    template = loader.get_template('users/pages.html')
    context = { 'user_list': [] }
    return HttpResponse(template.render(context, request))

def detail(request, user_id):
    # user = Account.objects.get(pk = user_id)
    return HttpResponse(user_id)

def user(request, user_id):
    # user = Account.objects.get(pk = user_id)
    template = loader.get_template('users/user.html')
    context = { 'user': None }
    return HttpResponse(template.render(context, request))
