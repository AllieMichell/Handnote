pipeline {
  agent any
  stages {
    stage('build') {
      parallel {
        stage('build') {
          steps {
            echo 'Run build'
          }
        }
        stage('') {
          steps {
            bat(returnStatus: true, script: 'dir')
          }
        }
      }
    }
  }
}