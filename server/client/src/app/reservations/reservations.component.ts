import { Component, OnInit } from '@angular/core';
import { ReservationsService } from '../services/reservations.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {

  public reservations;

  constructor(private reservationsService: ReservationsService) {
    reservationsService.getReservations().then(res => {
      this.reservations = res;
    })
  }

  ngOnInit(): void {
    
  }



}
