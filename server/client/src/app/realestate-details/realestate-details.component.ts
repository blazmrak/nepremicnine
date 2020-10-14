import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RealestatesService } from '../services/realestates.service';
import { ReservationsService } from '../services/reservations.service';

@Component({
  selector: 'app-realestate-details',
  templateUrl: './realestate-details.component.html',
  styleUrls: ['./realestate-details.component.scss']
})
export class RealestateDetailsComponent implements OnInit {

  public realestate: any;
  public reservationForm: FormGroup = this.fb.group({
    from: [null, Validators.required],
    to: [null, Validators.required]
  });

  constructor(
    private realestateService: RealestatesService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private reservationService: ReservationsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.realestateService
      .getRealestateDetails(this.route.snapshot.params.id)
      .then(res => {
        this.realestate = res;
      });
  }

  public makeReservation(): void {
    console.log(this.reservationForm.value);
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
