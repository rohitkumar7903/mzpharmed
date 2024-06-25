# Use an official Apache runtime as a parent image
FROM httpd:latest


# Set the working directory inside the container
WORKDIR /usr/local/apache2/htdocs/

# Copy the contents of the dist folder from your local machine to the container
COPY ./dist/ ./


# Expose port 80 to allow outside connections
EXPOSE 80


