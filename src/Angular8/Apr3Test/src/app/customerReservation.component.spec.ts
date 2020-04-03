import {customerReservationComponent} from "./customerReservation.component";

//test suite
describe('Room Reservation', function () {
  it('Testing Room is reserved or not', ()=>{
    //Arrange
    let custReserve = new customerReservationComponent()

    //Act
    let isReserved = custReserve.reserveRoom();

    //Assert
    expect(isReserved).toBeTruthy();

  })
});
