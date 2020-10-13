import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private rootUrl = '/v1/auth';

  constructor(private http: HttpClient) { }

  public login(credentials: { username: string, password: string }): Promise<{user: any}> {
    return this.http.post<{user: any}>(`${this.rootUrl}/login`, credentials).toPromise();
  }

  public logout(): Promise<void> {
    return this.http.post<void>(`${this.rootUrl}/logout`, {}).toPromise();
  }
}
