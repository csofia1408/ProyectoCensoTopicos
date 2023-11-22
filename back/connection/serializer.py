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
    people = PersonSerializer(many=True)

    class Meta:
        model = CensusForm
        fields = '__all__'

    def create(self, validated_data):
        people_data = validated_data.pop('people')
        census_form = CensusForm.objects.create(**validated_data)
        for person_data in people_data:
            Person.objects.create(census_form=census_form, **person_data)
        return census_form