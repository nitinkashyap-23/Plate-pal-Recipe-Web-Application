from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request,'home.html')

def demo(request):
    return render(request,'demo,html')

def blog(request):
    return render(request,'blog.html')

def howitswork(request):
    return render(request,'howitswork.html')

def login(request):
    return render(request,'login.html')

def register(request):
    return render(request,'register.html')

def recipes(request):
    return render(request,'recipes.html')

def contact(request):
    return render(request,'contact.html')