import { Component, EventEmitter, Output,  } from '@angular/core';

@Component({
  selector: 'raahi-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.less']
})
export class HotelListComponent  {

  @Output() hotelDetail = new EventEmitter<void>();
  onHotelDetail() {
    this.hotelDetail.emit();
  }

}
