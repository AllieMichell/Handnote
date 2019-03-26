pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo 'Run build'
        bat 'dir'
        bat 'npm install'
        bat 'npm run build'
      }
    }
  }
}