pipeline {
  agent any

  environment {
    NODE_VERSION = '24'
    DOCKER_IMAGE = 'node:${NODE_VERSION}-alpine'
  }

  stages {
    stage('Checkout') {
        steps {
          git branch: 'main', url: "https://github.com/ppincore/devpe.git"
        }
      }
    
    stage('Install') {
        steps {
          sh 'npm install'
        }
    }

    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
  }
  post {
    always {
        cleanWs()
    }
  }
}