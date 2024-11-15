FROM nginx:stable-alpine3.20-perl

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the current directory contents into the container at /usr/share/nginx/html
COPY build/ /usr/share/nginx/html

# Make port 80 available to the world outside this container
EXPOSE 80

# Define environment variable
ENV NAME World

CMD ["nginx", "-g", "daemon off;"]
