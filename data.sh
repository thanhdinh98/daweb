PGPASSWORD=pass psql -h localhost -p 35432 -d db -U user -c "\copy \"Movies\" from ${PWD}/server/data/movie.csv csv header;"
PGPASSWORD=pass psql -h localhost -p 35432 -d db -U user -c "\copy \"Cinemas\" from ${PWD}/server/data/cinema.csv csv header;"
PGPASSWORD=pass psql -h localhost -p 35432 -d db -U user -c "\copy \"Rooms\" from ${PWD}/server/data/room.csv csv header;"
PGPASSWORD=pass psql -h localhost -p 35432 -d db -U user -c "\copy \"Showtimes\" from ${PWD}/server/data/showtime.csv csv header;"