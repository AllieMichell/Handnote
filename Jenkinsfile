pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo 'Run build'
        bat 'dir'
        bat 'npm install'
        bat 'npm run build'
        bat 'dir'
      }
    }
    stage('Stop Services') {
      steps {
        echo 'Stop services'
      }
    }
  }
}