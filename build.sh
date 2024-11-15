# script for building docker image as a tar.gz file

# build docker image
docker build -t portfolio .

# save docker image as tar.gz file
docker save portfolio | gzip > portfolio.tar.gz

# remove docker image
docker rmi portfolio
