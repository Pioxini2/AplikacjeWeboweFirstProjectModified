# Generated by Django 2.2.7 on 2019-11-29 13:47

from django.db import migrations

def create_data(apps, schema_editor):
    Data = apps.get_model('data', 'Data')
    Data(data="Example data", amount=100.0).save()  # Add the "amount" value

class Migration(migrations.Migration):

    dependencies = [
        ('data', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_data),
    ]
