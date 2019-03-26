pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo 'Run build'
        bat 'dir'
        bat 'cd $envfile .env'
      }
    }
  }
}