import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ReservationsService } from '../services/reservations.service';

@Injectable({ providedIn: 'root' })
export class ReservationsResolver implements Resolve<any> {
  constructor(private service: ReservationsService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<any>|any {
    return this.service.getReservations();
  }
}