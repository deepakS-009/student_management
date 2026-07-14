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
                    bat 'mvn clean package'
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

       stage('Deploy') {
    steps {
        bat 'docker compose down'
        bat 'docker compose up --build -d'
    }
}
    }
}