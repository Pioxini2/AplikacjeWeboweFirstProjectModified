from rest_framework import serializers
from .models import Data

class DataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Data
        fields = ('pk', 'data', 'amount')  # Include 'amount' in the fields list
