import {customerReservationComponent} from "./customerReservation.component";

//test suite
describe('Room Reservation', function () {
  // it('Testing Room is reserved or not', ()=>{
  //   //Arrange
  //   let custReserve = new customerReservationComponent()
  //
  //   //Act
  //   let isReserved = custReserve.reserveRoom();
  //
  //   //Assert
  //   expect(isReserved).toBeTruthy();


  let custService  ;

  beforeEach(()=>{
    custService = new customerReservationComponent()
  });

  afterEach(()=>{
    custService = null;
  } );

  beforeAll(()=>{

  });

  afterAll(()=>{

  });


  it('registe customers by the count of 1', ()=>{

    let custCount = custService.registerCustomer();
    expect(custCount).toEqual(11);
});

  it('unRegister customers by the count of 1', ()=>{
    let custCount = custService.unRegisterCustomer();
    expect(custCount).toEqual(9);
  });


});
