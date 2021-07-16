FROM node:14
# we specify the image name that we need to our project

WORKDIR /usr/src/app
# setting the path of the working directory

COPY package*.json ./
# copying both package.json & package-lock.json

RUN npm install
# installing all the depend--platform=linux/arm64 encies

COPY . ./
# copying all the JS files inside our project

EXPOSE 3000
# exposing the port which our application runs on

CMD ["node", "app.js" ]
# here, you can enter the command which we use to run our application 

# sudo docker build . -t frankc60/hello-world
# sudo docker run -p 8080:3000 -d frankc60/hello-world
# curl http://localhost:8080
