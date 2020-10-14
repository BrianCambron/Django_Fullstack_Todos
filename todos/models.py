from django.db import models

class Todo(models.Model):
    name = models.CharField(max_length = 255)
    isComplete = models.BooleanField(default = False)

    def __str__(self):
        return self.name
