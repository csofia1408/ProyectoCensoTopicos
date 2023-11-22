from django.urls import include, path
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from connection import views

router = routers.DefaultRouter()
router.register(r"respondent", views.RespondentView, "Respondent")

urlpatterns = [
    path("api/v1/", include(router.urls)),
    path('docs/', include_docs_urls(title='Respondent API')),
]


from rest_framework.routers import DefaultRouter
from .views import RespondentView, CensusFormViewSet, PersonViewSet

router = DefaultRouter()
router.register(r'respondents', RespondentView, basename='respondent')
router.register(r'census-forms', CensusFormViewSet, basename='census-form')
router.register(r'people', PersonViewSet, basename='person')

urlpatterns = [
    # Otras URL si las tienes
    path('prueba/', include(router.urls)),
]


