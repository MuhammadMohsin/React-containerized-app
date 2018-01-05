# React-containerized-app

### Local Setup
- npm run build

- docker build -t my_react_nginx_image .

- docker run --name my_react_nginx -p 8080:80 -d my_react_nginx_image

- Open in the browser:

http://localhost:8080/
