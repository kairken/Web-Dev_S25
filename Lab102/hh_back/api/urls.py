from django.urls import path
from .views import (
  companies_list, company_detail, company_vacancies,
  VacancyList, VacancyDetail, TopTenVacancies
)

urlpatterns = [
  path('companies', companies_list),
  path('companies/<int:id>/', company_detail),
  path('companies/<int:id>/vacancies/', company_vacancies),
  path('vacancies/', VacancyList.as_view()),
  path('vacancies/<int:id>/', VacancyDetail.as_view()),
  path('vacancies/top_ten/', TopTenVacancies.as_view()),
]