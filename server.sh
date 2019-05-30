service_id=$(sudo docker images -q daweb_app)

if [[ "$service_id" == "" ]]; then
  sudo docker-compose up
else
  sudo docker run -it --rm $service_id
fi