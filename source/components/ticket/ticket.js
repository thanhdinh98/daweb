const Ticket = ticket => `
    <div class="ticket">
      <span class="Welcome">
        <center>
          <b style="font-size: 20px;">Congratulations!</b><br>
          The purchase of your ticket is successful. Please check the information below. Sincerely thank.
        </center>
      </span>
      <div class="tickets-body">
        <br>
        <div class="row">
          <div class="row ticket-info">
            <div class="col-sm-12 company">
              CGV Corporation
            </div>
          </div>
          <div class="col-sm-9">
            <div class="row ticket-info">
              <div class="col-sm-5 info-name">
                Cinema :
              </div>
              <div class="col-sm-7 ticket-content">
              ${ticket.cinema}
              </div>
            </div>
            <div class="row ticket-info">
              <div class="col-sm-5 info-name">
                Movie name :
              </div>
              <div class="col-sm-7 ticket-content">
              ${ticket.movie}
              </div>
            </div>
            <div class="row ticket-info">
              <div class="col-sm-5 info-name">
                Time :
              </div>
              <div class="col-sm-7 ticket-content">
              ${ticket.startTime}
              </div>
            </div>
            <div class="row ticket-info">
              <div class="col-sm-5 info-name">
                Room :
              </div>
              <div class="col-sm-7 ticket-content">
              ${ticket.room}
              </div>
            </div>
            <div class="row ticket-info">
              <div class="col-sm-5 info-name">
                Seat :
              </div>
              <div class="col-sm-7 ticket-content">
              ${ticket.seat}
              </div>
            </div>
              <div class="row ticket-info">
              <div class="col-sm-5 info-name">
                Price :
              </div>
              <div class="col-sm-7 ticket-content">
              ${`${ticket.price} VND`}.
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <center>
              <img src="qr.png" class="qr_code">
            </center>
          </div>
        </div>
      </div>
    </div>
  `;
export default Ticket;
