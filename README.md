# CitasMed
Sistema de información para la gestión de citas médicas.

# Bienvenidos al README de CitasMed
<center>
[![CitasMed](https://raw.githubusercontent.com/DanielaBurbano/CitasMed/main/AngularCitasM/src/assets/citasm.png "CitasMed")](https://raw.githubusercontent.com/DanielaBurbano/CitasMed/main/AngularCitasM/src/assets/citasm.png "CitasMed")
</center>

CitasMed es una aplicación web que facilita el registro y control de citas médicas.
Ingresa, regístrate, agenda tus citas, revisa tu historial de citas y mira las observaciones de los doctores.

En futuras versiones se planea implementar muchas más funcionalidades, agregar gráficos para evaluar mejor el desempeño de la aplicación y permitir la exportación de las citas a documentos pdf.

## Desarrollo
 - ### Herramientas
Para el desarrollo de esta aplicación utilizamos las siguientes herramientas:
- [**Django-rest-framework**](https://www.django-rest-framework.org/ "Django-rest-framework").
- [**Angular**](https://angular.io/ "Angular").
- [**Firebase**](https://firebase.google.com/?&gclid=EAIaIQobChMI36fKwZet7QIVGI-GCh3PFA5NEAAYASAAEgIpSfD_BwE "Firebase").
- [**Bootstrap**](https://getbootstrap.com/ "Bootstrap").
- [**Jquery**](https://jquery.com/ "Jquery").
- Un editor de texto como [**Visual studio code**](https://code.visualstudio.com/ "Visual studio code").
- [**Git hub**](http://www.github.com "Git hub").

- ### Implementación

	- Para el backen se trabajó con [**Django-rest-framework**](https://www.django-rest-framework.org/ "Django-rest-framework") y utilizamos la base de datos que este nos brinda. Para el manejo de la Base de dattos en Django es necesario crear los modelos que serían las "tablas" de nuestra base de datos y crear un respectivo [serializers](https://www.django-rest-framework.org/api-guide/serializers/ "**serializers**") para trabajar con el esquema de cada modelo. ya con los **modelos** y **serializers** creados,  creamos un [viewset](https://www.django-rest-framework.org/api-guide/viewsets/ "viewset") para mostrar la información de cada modelo y podes consumir cada uno de los métodos del **CRUD**, La utilización de **viewsets** es muy amigable, fácil de usar y de implementar. Una vez hecho esto se procedió a crear las respectivas **urls** para consumir cada **viewset** creado.

	- Utilizamos [**Angular**](https://angular.io/ "Angular")  para el desarrollo de nuestro front-end y lo conectamos con nuestro **backend** por medio de un servicio "shared" donde relacionamos la ruta donde está ubicado nuestro **backend** cada método que vamos a consumir del **backend** y asignamos un método nuevo para ser usados en nuestro front-end.

	- El login y autenticación de usuario lo realizamos con la ayuda de [**Firebase**](https://firebase.google.com/?&gclid=EAIaIQobChMI36fKwZet7QIVGI-GCh3PFA5NEAAYASAAEgIpSfD_BwE "Firebase"). En [**Angular**](https://angular.io/ "Angular")  creamos un servicio **auth** donde creamos los métodos para realizar el **registro**, **login** y **logout**. En cada método implementado consumimos [**Firebase**](https://firebase.google.com/?&gclid=EAIaIQobChMI36fKwZet7QIVGI-GCh3PFA5NEAAYASAAEgIpSfD_BwE "Firebase") para realizar cada operación.

- ### Estructura del proyecto
Separamos los servicios y los componentes para tener una estructura más clara y limpia.
El modelo de arquitectura usado fue MVC con cada componente, permitiendo así separar funciones, dividir procesos y trabajar de una forma eficiente y puntual.
## Instalación
- Para su completo funcionamiento deberás elegir una ubicación de destino y crear un ambiente virtual, en windows lo puedes hacer con el comando **python -m venv env** y posteriormente activar los scripts **env\Scripts\activate**.

- Instala Django, **pip install django** y Django-restframework **pip install djangorestframework**. Ahora instala los cors-headers con el comando **pip install django-cors-header** y por ultimo los filtros que nos brinda django-rest-framework, **pip install django-filter**.

- Crea una aplicación angular con el nombre de **AngularCitasM** siguiendo los pasos que se encuentran [aqui](https://cli.angular.io/ "aqui").

- Antes de clonar nuestro repositorio deberás instalar firebase **npm install firebase @angular/fire** y bootstrap, **npm install bootstrap@4.3.1**  jqury, **npm install jquery** y popper **npm install popper.js**.

- Una vez tengas esto instalado correctamente, clona el repositorio al mismo nivel que el ambiente que creaste anteriormente. Ingresa a la carpeta **DjangoCitasM**, activa los scritps nuevamente y ejecuta los comandos **python manage.py migrate**, **python manage.py makemigrations CitasM** y **python manage.py migrate CitasM** para asegurarnos de que nuestra base de datos se encuentra bien instalada.

- Ahora disfruta de la aplicación.

## Desarrollado por
- Angi Daniela Burbano
- Julio Yosimar Valencia

