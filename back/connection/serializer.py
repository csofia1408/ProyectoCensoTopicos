from rest_framework import serializers
from .models import Respondent, CensusForm, Person

class RespondentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Respondent
        # fields = ('id', 'title', 'description', 'done')
        fields = '__all__'
        
class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = '__all__'

class CensusFormSerializer(serializers.ModelSerializer):
    #people = PersonSerializer(many=True)

    class Meta:
        model = CensusForm
        fields = '__all__'

    def create(self, validated_data):
        print("testtttt",validated_data)
        census_form = CensusForm.objects.create(**validated_data)
        return census_form