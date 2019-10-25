from leads.models import Lead
from rest_framework import viewsets,permissions
from .serializers import LeadSerializer

#Lead Viewset
#https://www.django-rest-framework.org/api-guide/viewsets/

class LeadViewSet(viewsets.ModelViewSet):
    queryset = Lead.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class= LeadSerializer
    