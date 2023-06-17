from django.urls import path
from .views import FreelancerSignupView, ClientSignupView, CustomAuthToken, LogoutView, ClientOnlyView, FreelancerOnlyView

urlpatterns = [
    path('signup/freelance/', FreelancerSignupView.as_view()),
    path('account/signup/', ClientSignupView.as_view()),
    path('login/', CustomAuthToken.as_view()),
    path('logout/', LogoutView.as_view()),
    path('freelancer/dashboard/', FreelancerOnlyView.as_view()),
    path('user/dashboard/', ClientOnlyView.as_view())
]