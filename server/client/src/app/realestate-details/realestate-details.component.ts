import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationsService } from '../services/reservations.service';

@Component({
  selector: 'app-realestate-details',
  templateUrl: './realestate-details.component.html',
  styleUrls: ['./realestate-details.component.scss']
})
export class RealestateDetailsComponent {

  public realestate: any;
  public reservationForm: FormGroup = this.fb.group({
    from: [null, Validators.required],
    to: [null, Validators.required]
  });

  constructor(
    route: ActivatedRoute,
    private fb: FormBuilder,
    private reservationService: ReservationsService,
    private router: Router
  ) {
    this.realestate = route.snapshot.data.realestate;
  }

  public makeReservation(): void {
    if (this.reservationForm.valid) {
      const reservation = {
        id_realestate: this.realestate.id,
        from: this.reservationForm.value.from,
        to: this.reservationForm.value.to,
      };

      this.reservationService.makeReservation(reservation).then(res => {
        this.router.navigate(['/']);
      });
    }
  }
}
