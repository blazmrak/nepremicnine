import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  private root = 'v1/reservations'

  constructor(private http: HttpClient) { }

  public getReservations(): Promise<any[]> {
    return null;
  }

  public makeReservation(reservation): Promise<any> {
    return this.http.post<any>(this.root, reservation).toPromise();
  }
}
