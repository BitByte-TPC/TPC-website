from django.conf.urls import url
from django.contrib import admin
from django.urls import include, path
from home.views import *
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('home/', home, name='home'),
]
