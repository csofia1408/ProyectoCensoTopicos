from django.contrib import admin
from .models import Respondent, CensusForm, Person


admin.site.register(Respondent)



class PersonInline(admin.TabularInline):
    model = Person

class CensusFormAdmin(admin.ModelAdmin):
    inlines = [PersonInline]

admin.site.register(CensusForm, CensusFormAdmin)
admin.site.register(Person)
