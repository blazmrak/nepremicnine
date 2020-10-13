import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RealestatesService {

  private root = 'v1/realestates';

  constructor(private http: HttpClient) { }

  public getRealestates(): Promise<any[]> {
    return this.http.get<any[]>(this.root).toPromise();
  }

  public getRealestateDetails(id: number): Promise<any> {
    return this.http.get<any>(`${this.root}/${id}`).toPromise();
  }
}
