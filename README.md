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
## Añadir Cypress para pruebas e2e
```bash
ng add @cypress/schematic #en reemplazo de protactor que fue deprecado
```

## Esquema

- **src** Carpeta con los archivos del proyecto
  - **interfaces** Interfaces para los tipos de daros que maneja el proyecto
  - **pages** Páginas de la aplicación
  - **services** Servicios HTTP que se conectan al API para la manipulación de los datos
  - **shared** Componentes Compartidos

## Notas

> El proyecto originalmente se codifico con Angular en la versión 7, se realizó una migración hacia la versión 13 siguiendo los pasos proporcionados por Angular que se pueden probar en el siguiente enlace: [Update from v7 to 13](https://update.angular.io/?v=7.0-13.0)

> Links de Información sobre Testing
> - [Unit and Integration Testing](https://medium.com/@ana.dvorkina/unit-and-integration-tests-for-angular-components-323a2c681972)
> - [Angular Cypress: Learn How To Install And Run E2E Tests](https://www.youtube.com/watch?v=wGiU4qdFL6U)
> - [Testing Angular Applications with Cypress](https://www.youtube.com/watch?v=4XJwy0BI0VI)

