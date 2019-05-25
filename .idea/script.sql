CREATE TABLE "User" (
	"userId" serial NOT NULL,
	"email" VARCHAR(255) NOT NULL UNIQUE,
	"password" VARCHAR(255) NOT NULL,
	"name" VARCHAR(255) NOT NULL,
	"phoneNumber" VARCHAR(255) NOT NULL UNIQUE,
	"permission" integer,
	CONSTRAINT User_pk PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Cinema" (
	"cinemaId" serial NOT NULL,
	"name" VARCHAR(255) NOT NULL,
	"address" VARCHAR(255) NOT NULL,
	CONSTRAINT Cinema_pk PRIMARY KEY ("cinemaId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Movie" (
	"movieId" serial NOT NULL,
	"name" integer NOT NULL,
	"release" integer NOT NULL,
	"poster" VARCHAR(255) NOT NULL,
	"poster" VARCHAR(255) NOT NULL,
	"duration" DATE NOT NULL,
	CONSTRAINT Movie_pk PRIMARY KEY ("movieId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Room" (
	"roomId" serial NOT NULL,
	"cinemaId" integer NOT NULL,
	"name" VARCHAR(255) NOT NULL,
	"type" VARCHAR(255) NOT NULL,
	"rowSize" integer NOT NULL,
	"columnSize" integer NOT NULL,
	CONSTRAINT Room_pk PRIMARY KEY ("roomId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Showtime" (
	"showtimeId" serial NOT NULL,
	"roomId" integer NOT NULL,
	"movieId" integer NOT NULL,
	"price" integer NOT NULL,
	"startTime" DATETIME NOT NULL,
	"endTime" DATETIME NOT NULL,
	CONSTRAINT Showtime_pk PRIMARY KEY ("showtimeId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Booking" (
	"bookingId" varchar NOT NULL,
	"showtimeId" integer NOT NULL,
	"userId" integer NOT NULL,
	"timeBooking" DATETIME NOT NULL,
	"totalPrice" integer NOT NULL,
	CONSTRAINT Booking_pk PRIMARY KEY ("bookingId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Ticket" (
	"ticketId" serial NOT NULL,
	"bookingId" serial NOT NULL,
	"rowOfSeatID" integer NOT NULL,
	"colOfSeatId" integer NOT NULL,
	"price" integer NOT NULL,
	CONSTRAINT Ticket_pk PRIMARY KEY ("ticketId")
) WITH (
  OIDS=FALSE
);






ALTER TABLE "Room" ADD CONSTRAINT "Room_fk0" FOREIGN KEY ("cinemaId") REFERENCES "Cinema"("cinemaId");

ALTER TABLE "Showtime" ADD CONSTRAINT "Showtime_fk0" FOREIGN KEY ("roomId") REFERENCES "Room"("roomId");
ALTER TABLE "Showtime" ADD CONSTRAINT "Showtime_fk1" FOREIGN KEY ("movieId") REFERENCES "Movie"("movieId");

ALTER TABLE "Booking" ADD CONSTRAINT "Booking_fk0" FOREIGN KEY ("showtimeId") REFERENCES "Showtime"("showtimeId");
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_fk1" FOREIGN KEY ("userId") REFERENCES "User"("userId");

ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_fk0" FOREIGN KEY ("bookingId") REFERENCES "Booking"("bookingId");

