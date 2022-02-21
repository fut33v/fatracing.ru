docker build -t fatracing .
docker stop fat
docker rm fat
docker run --name fat -d -p 8666:8666 fatracing

