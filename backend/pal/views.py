from django.shortcuts import render,redirect
from django.contrib.auth import authenticate,login
from django.contrib import messages

# Create your views here.
def home(request):
    return render(request,'home.html')

def demo(request):
    return render(request,'demo,html')

def blog(request):
    return render(request,'blog.html')

def howitswork(request):
    return render(request,'howitswork.html')

def user_login(request):
    if request.method == "POST":

        username = request.POST.get("username")
        password = request.POST.get("password")

        user = authenticate(
            request,
            username=username,
            password=password
    
        )
        if user is not None:
            login(request,user)
            messages.success(request,f"welcome back,{user.username}!")
            return redirect("home")
        
        else:
            messages.error(request,"Invalid username or Password.")

    return render(request,'login.html')

def register(request):
    return render(request,'register.html')

def recipes(request):
    return render(request,'recipes.html')

def contact(request):
    return render(request,'contact.html')