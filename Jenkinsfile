pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build_Backend') {
            steps {
                dir('backend') {
                    sh '''#!/bin/bash
set -euo pipefail
shopt -s nullglob
modules=()
for pom in */pom.xml; do
    modules+=("${pom%/pom.xml}")
done

if [ ${#modules[@]} -eq 0 ]; then
    echo "No Maven modules found under backend/" >&2
    exit 1
fi

for module in "${modules[@]}"; do
    echo "Building backend module: ${module}"
    (cd "${module}" && mvn -B clean package -DskipTests)
done
'''
                }
            }
        }
        stage('Test_Backend') {
            steps {
                dir('backend') {
                    sh '''#!/bin/bash
set -euo pipefail
shopt -s nullglob
modules=()
for pom in */pom.xml; do
    modules+=("${pom%/pom.xml}")
done

if [ ${#modules[@]} -eq 0 ]; then
    echo "No Maven modules found under backend/" >&2
    exit 1
fi

for module in "${modules[@]}"; do
    echo "Running tests for backend module: ${module}"
    (cd "${module}" && mvn -B test)
done
'''
                }
            }
        }
        stage('Build_Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm ci'
                    sh 'npm run build -- --configuration production'
                }
            }
        }
        stage('Test_Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm test -- --watch=false --browsers=ChromeHeadless'
                }
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
