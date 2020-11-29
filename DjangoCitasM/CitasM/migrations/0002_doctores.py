# Generated by Django 3.1 on 2020-11-29 15:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('CitasM', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Doctores',
            fields=[
                ('cod_doc', models.CharField(max_length=100, primary_key=True, serialize=False)),
                ('fk_docper', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='CitasM.personas')),
            ],
        ),
    ]