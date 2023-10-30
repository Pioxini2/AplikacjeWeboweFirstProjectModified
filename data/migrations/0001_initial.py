from django.db import migrations, models

class Migration(migrations.Migration):
    initial = True

    dependencies = [
        # Add any dependencies if required
    ]

    operations = [
        migrations.CreateModel(
            name='Data',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('data', models.CharField(max_length=240, verbose_name='Data')),
                ('amount', models.DecimalField(max_digits=10, decimal_places=2, verbose_name='Amount')),
            ],
        ),
    ]
