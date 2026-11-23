pipeline {
    agent any

    environment {
        APP_NAME = "mi-servicio-demo"
        VERSION  = "1.0.${BUILD_NUMBER}"
    }

    stages {
        stage('1. Preparación') {
            steps {
                echo "Iniciando build de ${APP_NAME} versión ${VERSION}"
                sh 'uname -a'
            }
        }

        stage('2. Construcción (Build)') {
            steps {
                echo "Verificando archivos del proyecto..."
                sh 'ls -la'
            }
        }

        stage('3. Pruebas (Test)') {
            steps {
                echo "Ejecutando suite de pruebas con Node.js..."
                sh 'node app.js'
            }
        }

        stage('4. Empaquetado (Artifact)') {
            steps {
                echo "Empaquetando aplicación..."
                sh 'tar -czf ${APP_NAME}-${VERSION}.tar.gz app.js'
            }
        }
    }

    post {
        success {
            archiveArtifacts artifacts: '*.tar.gz', fingerprint: true
            echo "Pipeline completado con éxito. Artefacto generado."
        }
        failure {
            echo "El pipeline falló. Revisa los logs de la etapa con error."
        }
    }
}
            echo "El pipeline falló. Revisa los logs de la etapa con error."
        }
    }
}
