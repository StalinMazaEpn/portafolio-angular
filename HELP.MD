# Ayuda

Algunas indicaciones que permiten ejecutar ciertas instalaciones o configuraciones en el proyecto.

## Añadir Cypress para pruebas e2e
```bash
ng add @cypress/schematic #en reemplazo de protactor que fue deprecado
```

## Crear imagen de docker

Ejecuta el comando de docker: `docker build -t portafolioNg:1.0.0 .`

# Ejecutar el contenedor de docker

Ejecuta el comando de docker: `docker run -it -p 8082:80 portafolioNg:1.0.0`.
En el comando el primer puerto hace referencia a la maquina anfitrión mientras que el segundo al contenedor de docker.
