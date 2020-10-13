import { Component, OnInit } from '@angular/core';
import { RealestatesService } from '../services/realestates.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public lat: number = 46.050959;
  public lng: number = 14.505292;

  public realestates: any;

  constructor(private realestateService: RealestatesService) { }

  ngOnInit(): void {
    this.realestateService.getRealestates().then(res => {
      this.realestates = res;
    });
  }

}
