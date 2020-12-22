from django.shortcuts import render,redirect
# from django.http import HttpResponseRedirect
# from django.contrib.auth.models import User
# from . models import *
# from django.contrib.auth import authenticate,logout,login
# from datetime import date
# from django.contrib.auth.decorators import login_required
# from django.contrib.admin.views.decorators import staff_member_required


def home(request):
    return render(request, 'home.html')