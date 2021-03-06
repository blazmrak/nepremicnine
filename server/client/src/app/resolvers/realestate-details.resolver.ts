import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { RealestatesService } from '../services/realestates.service';

@Injectable({ providedIn: 'root' })
export class RealestateDetailsResolver implements Resolve<any> {
  constructor(private service: RealestatesService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<any>|any {
    return this.service.getRealestateDetails(parseInt(route.paramMap.get('id')));
  }
}