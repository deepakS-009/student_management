pipeline {
    agent any

    tools {
        jdk 'JDK21'
    }

    environment {
        APP_SERVER = "ubuntu@<APPLICATION_SERVER_PUBLIC_IP>"
    }

    stages {

        stage('Checkout Source') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/deepakS-009/student_management.git'
            }
        }

        stage('Deploy to Application Server') {
            steps {
                sh """
                ssh -o StrictHostKeyChecking=no \$APP_SERVER '
                    cd ~/student_management &&
                    git pull origin main &&
                    docker compose down &&
                    docker compose up --build -d
                '
                """
            }
        }

        stage('Verify Deployment') {
            steps {
                sh """
                ssh -o StrictHostKeyChecking=no \$APP_SERVER '
                    docker ps
                '
                """
            }
        }
    }

    post {
        success {
            echo 'Application deployed successfully!'
        }

        failure {
            echo 'Deployment failed!'
        }
    }
}