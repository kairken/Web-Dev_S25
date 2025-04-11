from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer

@api_view(['GET'])
def companies_list(request):
    qs = Company.objects.all()
    return Response(CompanySerializer(qs, many=True).data)

@api_view(['GET'])
def company_detail(request, id):
    try: obj = Company.objects.get(id=id)
    except Company.DoesNotExist: return Response({'error':'Not found'},404)
    return Response(CompanySerializer(obj).data)

@api_view(['GET'])
def company_vacancies(request, id):
    try: comp = Company.objects.get(id=id)
    except Company.DoesNotExist: return Response({'error':'Not found'},404)
    qs = Vacancy.objects.filter(company=comp)
    return Response(VacancySerializer(qs, many=True).data)

class VacancyList(APIView):
    def get(self, request):
        qs = Vacancy.objects.all()
        return Response(VacancySerializer(qs, many=True).data)

class VacancyDetail(APIView):
    def get(self, request, id):
        try: v = Vacancy.objects.get(id=id)
        except Vacancy.DoesNotExist: return Response({'error':'Not found'},404)
        return Response(VacancySerializer(v).data)

class TopTenVacancies(APIView):
    def get(self, request):
        qs = Vacancy.objects.order_by('-salary')[:10]
        return Response(VacancySerializer(qs, many=True).data)