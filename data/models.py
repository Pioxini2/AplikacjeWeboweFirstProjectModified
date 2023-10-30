from django.db import models

class Data(models.Model):
    data = models.CharField("Data", max_length=240)
    amount = models.DecimalField("Amount", max_digits=10, decimal_places=2)

    def __str__(self):
        return self.data
