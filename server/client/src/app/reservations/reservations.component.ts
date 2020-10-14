import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent {

  public reservations;

  constructor(route: ActivatedRoute) {
      this.reservations = route.snapshot.data.reservations;
  }
}
