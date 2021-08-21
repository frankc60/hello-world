pipeline{

	agent any

	environment {
		DOCKERHUB_CREDENTIALS=credentials('dockerhub-frankc60')
	}

	stages {

		stage('Build') {

			steps {
				sh 'docker build -t frankc60/hello-world:latest .'
			}
		}

		stage('Login') {

			steps {
				sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
			}
		}

		stage('Push') {

			steps {
				sh 'docker push frankc60/hello-world:latest'
			}
		}
	}

	post {
		always {
			sh 'docker logout'
		}
	}

}