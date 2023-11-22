

from rest_framework import viewsets
from .serializer import CensusFormSerializer, PersonSerializer, RespondentSerializer
from .models import CensusForm, Person, Respondent

# Create your views here.
class RespondentView(viewsets.ModelViewSet):
    serializer_class = RespondentSerializer
    queryset = Respondent.objects.all()
    
    
class CensusFormViewSet(viewsets.ModelViewSet):
    serializer_class = CensusFormSerializer
    queryset = CensusForm.objects.all()

class PersonViewSet(viewsets.ModelViewSet):
    serializer_class = PersonSerializer
    queryset = Person.objects.all()