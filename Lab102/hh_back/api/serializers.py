from rest_framework import serializers
from .models import Company, Vacancy

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ['id','name','description','city','address']

class VacancySerializer(serializers.Serializer):
    id          = serializers.IntegerField(read_only=True)
    name        = serializers.CharField(max_length=255)
    description = serializers.CharField()
    salary      = serializers.FloatField()
    company     = serializers.IntegerField(source='company.id')

    def create(self, validated_data):
        return Vacancy.objects.create(**validated_data)

    def update(self, instance, validated_data):
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance
