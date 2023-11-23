from django.db import models

class Respondent(models.Model):
    # Campos específicos de Djongo para MongoDB
    name = models.CharField(max_length=255)
    form_number = models.IntegerField()

    def __str__(self):
        return self.name
    
    
class CensusForm(models.Model):
    # Pregunta 1
    question1 = models.IntegerField()

    # Pregunta 2
    additional_people = models.BooleanField(default=False)

    # Pregunta 3
    housing_type_choices = [
        ('ownedWithMortgage', 'Owned by you or someone in this household with a mortgage or loan? Include home equity loans.'),
        ('ownedWithoutMortgage', 'Owned by you or someone in this household free and clear (without a mortgage or loan)?'),
        ('rented', 'Rented?'),
        ('occupiedWithoutRent', 'Occupied without payment of rent?'),
    ]
    housing_type = models.CharField(max_length=90, choices=housing_type_choices)

    # Pregunta 4
    phone_number = models.CharField(max_length=20)

    def __str__(self):
        return f"Census Form #{self.id}"
    


class Person(models.Model):
    # Relación con el formulario
    census_form = models.ManyToManyField(CensusForm, related_name='people')

    # Pregunta 5
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)

    # Pregunta 6
    sex_choices = [('Male', 'Male'), ('Female', 'Female')]
    sex = models.CharField(max_length=10, choices=sex_choices)

    # Pregunta 7
    age = models.IntegerField()
    birth_month = models.IntegerField()
    birth_day = models.IntegerField()
    birth_year = models.IntegerField()

    # Pregunta 8
    hispanic_origin_choices = [
        ('NotHispanic', 'No, not of Hispanic, Latino, or Spanish origin'),
        ('Mexican', 'Yes, Mexican, Mexican Am., Chicano'),
        ('PuertoRican', 'Yes, Puerto Rican'),
        ('Cuban', 'Yes, Cuban'),
        ('OtherHispanic', 'Yes, another Hispanic, Latino, or Spanish origin')
    ]
    hispanic_origin = models.CharField(max_length=20, choices=hispanic_origin_choices)
    hispanic_origin_text = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"