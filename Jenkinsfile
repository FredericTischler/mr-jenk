pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Checkout'
            }
        }
        stage('Build_Backend') {
            steps {
                echo 'Build backend with Maven'
            }
        }
        stage('Test_Backend') {
            steps {
                echo 'Test backend'
            }
        }
        stage('Build_Frontend') {
            steps {
                echo 'Build frontend'
            }
        }
        stage('Test_Frontend') {
            steps {
                echo 'Test frontend'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploy'
            }
        }
    }

    post {
        success {
            echo 'Build SUCCESS'
        }
        failure {
            echo 'Build FAILURE'
        }
    }
}
