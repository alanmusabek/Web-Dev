from django.core.management.base import BaseCommand
from api.models import Company, Vacancy

class Command(BaseCommand):
    help = "Load sample companies and vacancies into the database"

    def handle(self, *args, **kwargs):
        company1 = Company.objects.create(
            name="Tech Corp",
            description="Leading tech company specializing in software solutions.",
            city="New York",
            address="123 Tech Street"
        )

        company2 = Company.objects.create(
            name="Green Energy Ltd",
            description="Renewable energy solutions provider.",
            city="London",
            address="456 Eco Road"
        )

        Vacancy.objects.create(
            name="Senior Python Developer",
            description="Develop backend services using Django.",
            salary=95000.0,
            company=company1
        )

        Vacancy.objects.create(
            name="Frontend Engineer",
            description="Build user interfaces with React.",
            salary=85000.0,
            company=company1
        )

        Vacancy.objects.create(
            name="Solar Engineer",
            description="Design solar power systems.",
            salary=78000.0,
            company=company2
        )

        self.stdout.write(self.style.SUCCESS("Successfully loaded sample data!"))