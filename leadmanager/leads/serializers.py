from rest_framework import serializers
from leads.models import Lead

#Lead Serializers
#https://www.django-rest-framework.org/api-guide/serializers/
class  LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = '__all__'
        