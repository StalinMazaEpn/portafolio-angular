# PortafolioNgTemplateHTML

Repositorio básico que se enfoca en convertir un sitio web estático de HTML hacia una aplicación en Angular

# Ejecutar el servidor de desarrollo
Ejecuta el comando `npm run start` para inicializar el servidor de desarrollo. 

Abre el navegador en la URL `http://localhost:4200/`. Si deseas puedes incluir los siguientes flags.

```bash
--disable-host-check # para desactivar la verificación del host
--host 0.0.0.0 # para habilitar el acceso desde cualquier ip en la misma red
```

## Construir el proyecto en modo desarrollo
Ejecuta el comando `npm run build` para construir el proyecto en el ambiente de desarrollo, el comando `npm run build:test` para usar el ambiente de pruebas y el comando `npm run build:prod` para el ambiente de producción.

El resultado se guardará en el directorio `dist/portafolioNg`. 

## Ejecutar los test unitarios
Ejecuta el comando `npm run test:ci` para ejecutar el servidor de pruebas. Abre el navegador en la URL `http://localhost:9876/`. La aplicación se recargará si cambias algún archivo.

Se puede verificar el reporte de ejecución de las pruebas unnitarias en el archivo `./jasmine/TESTS.xml`.

Se puede verificar el reporte de cobertura de código en el archivo `./coverage/portafolioNg/cobertura-coverage.xml`.

## Ejecutar los test de integración
Ejecuta el comando `npm run start` para ejecutar el servidor de desarrollo de angular 
Ejecuta el comando `npm run cypress:test` para ejecutar el servidor de pruebas de cypress. 
Ejecuta el comando `npm run cypress:report` para unificar los resultados de los tests en XML. 

Se puede verificar el reporte de ejecución de las pruebas de cypress en el archivo `./cypress/results/cypress-result.xml`.

## Esquema

- **src** Carpeta con los archivos del proyecto
  - **interfaces** Interfaces para los tipos de daros que maneja el proyecto
  - **pages** Páginas de la aplicación
  - **services** Servicios HTTP que se conectan al API para la manipulación de los datos
  - **shared** Componentes Compartidos

## Notas

> El proyecto originalmente se codifico con Angular en la versión 7, se realizó una migración hacia la versión 13 siguiendo los pasos proporcionados por Angular que se pueden probar en el siguiente enlace: [Update from v7 to 13](https://update.angular.io/?v=7.0-13.0)

> Ayuda del [Proyecto](./HELP.MD)

> Links de Información sobre Testing
> - [Unit and Integration Testing](https://medium.com/@ana.dvorkina/unit-and-integration-tests-for-angular-components-323a2c681972)
> - [Angular Cypress: Learn How To Install And Run E2E Tests](https://www.youtube.com/watch?v=wGiU4qdFL6U)
> - [Testing Angular Applications with Cypress](https://www.youtube.com/watch?v=4XJwy0BI0VI)

