* CREATE NODE APP, DOCKERIZE TO TEST. THEN CREATE A KUBE POD WITH APP. *
1. create this nodejs app
2. create a "dockerfile", insert contents.
3. put in a .dockerignore file, with: node_modules
4. build the image:
    sudo docker build . -t frankc60/hello-world

5. check image is created with:
    sudo docker images

6. run the image in background:
    sudo docker run -p 8080:3000 -d frankc60/hello-world

    (-p <desired port to use>:<exposed port from dockerfile>
        for example EXPOSE 3000 (from dockerfile), so would use:
        -p 8080:3000  - to open port 8080 to network, via http://localhost:8080)

7. check app is running in background:
    sudo docker ps (to get the containerID)
    sudo docker logs <containerID>
    
8. if you need to go into container:
    sudo docker exec -it <containerID> /bin/bash

9. access from cmdline:
    curl http://localhost:8080

--Put into Kubernetes--
1. create a pod.yaml file

2. create a service.yaml file

> kubectl create -f pod.yaml
> kubectl get pods

> kubectl create -f service.yaml
> kubectl get svc 

-----------------------------------------

