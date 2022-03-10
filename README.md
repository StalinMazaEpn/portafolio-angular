# PortafolioNgTemplateHTML

Repositorio básico que se enfoca en convertir un sitio web estático de HTML hacia una aplicación en Angular

## Ejecutar el servidor de desarrollo

Ejecuta el comando `ng serve` para habilitar el servidor de desarrollo. Una vez encendido y habilitado se puede acceder desde la URL `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias alguno de los archivos de origen.

## Generar código automatizado

Ejecuta `ng generate component component-name`para generar un nuevo componente. También se puede ejecutar`ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Crear el build de la aplicación

Se ejecuta con el comando `ng build` para construir la aplicación. Se guarda en el directorio `dist/`. Se usa el comando `--prod` para construir usando las variables de entorno de producción.

## Ejecutar pruebas unitarias y de integración

Se ejecuta con el comando: `ng test` usando [Karma](https://karma-runner.github.io).

## Ejecutar pruebas de aceptación

Se ejecuta con el comando: `ng e2e` usando [Protractor](http://www.protractortest.org/).

## Notas

> El proyecto originalmente se codifico con Angular en la versión 7, se realizó 
una migración hacia la versión 12 siguiendo los pasos
proporcionados por Angular que se pueden probar en el siguiente enlace: [Update from v7 to 12](https://update.angular.io/?v=7.0-12.0)
