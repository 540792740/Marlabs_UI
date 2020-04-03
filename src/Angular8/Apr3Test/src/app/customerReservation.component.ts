export class customerReservationComponent{
  hotelRoomCapacity = 30;
  customerCount = 10;

  reserveRoom():boolean{
    let roomReserved = false;
    if(this.customerCount < this.hotelRoomCapacity){
      this.customerCount ++;
      roomReserved = true;
    }
    return roomReserved;
  }
}
