pipeline {
    agent any

  environment {
    NODE_VERSION = '24.16.0'
    DOCKER_IMAGE = 'node:${NODE_VERSION}-alpine'
  }

  stages {
    stage('Checkout') {
        steps {
          git branch: 'main', url: "git@github.com:ppincore/devpe.git", credentialsId: 'github-token-ssh'
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