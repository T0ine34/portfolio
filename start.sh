# load the image from portfolio.tar.gz
docker load -i portfolio.tar.gz
# run the docker container
docker run -it -p 80:80 --name portfolio portfolio

# delete the container
docker rm portfolio