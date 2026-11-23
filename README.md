# Práctica de CI/CD con Jenkins

Proyecto de demostración con un `Jenkinsfile` declarativo de 4 etapas:
1. **Preparación**: Información del entorno y número de build.
2. **Construcción (Build)**: Verificación de archivos del repositorio.
3. **Pruebas (Test)**: Validación automatizada sobre `app.js`.
4. **Empaquetado (Artifact)**: Generación de paquete `.tar.gz` archivado en Jenkins.

## Uso en Jenkins
1. Crea un nuevo ítem de tipo **Pipeline**.
2. En **Definition**, selecciona **Pipeline script from SCM** -> **Git**.
3. Pega la URL de este repositorio y apunta a la rama `*/main`.
4. Ejecuta **Build Now**.
