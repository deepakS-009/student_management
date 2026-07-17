pipeline {
    agent any

    tools {
        jdk 'JDK21'
        maven 'Maven3'
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/deepakS-009/student_management.git'
            }
        }

        stage('Build Backend') {
            steps {
                dir('backend') {
                    bat 'mvn clean package -DskipTests'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('my-app') {
                    bat 'npm install'
                    bat 'npm run build'
                }
            }
        }

        stage('Stop Existing Containers') {
            steps {
                bat 'docker compose down'
            }
        }

        stage('Deploy Docker') {
            steps {
                bat 'docker compose up --build -d'
            }
        }

        stage('Verify Deployment') {
            steps {
                bat 'docker ps'
            }
        }
    }

    post {
        success {
            echo '==================================='
            echo 'Deployment Successful'
            echo '==================================='
        }

        failure {
            echo '==================================='
            echo 'Deployment Failed'
            echo '==================================='
        }
    }
}