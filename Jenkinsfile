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
        script {
          try {
            sshagent (credentials: [env.serverKeyId]) {
              sh "ssh -o StrictHostKeyChecking=no ${serverUsername}@${env.serverIp} 'pm2 -s delete ${appName}'"
            }
          } catch (err) {
            echo "something failed"
          }
        }

      }
    }
  }
  environment {
    serverIP = 'localhost'
    remotePath = 'C:\\Users\\USUARIO\\Desktop\\Hackathon\\Find-eat'
    remoteFolder = 'buckler'
    appName = 'buckler'
    serverKeyId = '313afa32-47dc-4a1e-99ba-9f0901379bdf'
    startFile = 'src/server/bin/www'
    serverUsername = 'windows'
  }
}