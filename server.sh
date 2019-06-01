postgres=$(sudo docker ps -aq --filter "name=ltw2_06_db_1")
api=$(sudo docker ps -aq --filter "name=ltw2_06_app_1")

isPostgresRunning=$(sudo docker ps -aq --filter "name=ltw2_06_db_1" --filter status=running)

if [ "$isPostgresRunning" == "" ]; then
  sudo docker start $postgres
  sudo docker start -i $api
else
  sudo docker stop $postgres
  sudo docker start $postgres
  sudo docker start -i $api
fi