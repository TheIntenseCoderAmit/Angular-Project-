import {Component, Input, Inject, inject} from '@angular/core';
import {HousingLocationComponent} from '../housing-location/housing-location.component';
import {Housinglocation} from '../../housinglocation';
import {NgForOf} from '@angular/common';
import {HousingService} from '../../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HousingLocationComponent,
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

housingLocationList: Housinglocation[]=[];
  readonly baseUrl='https://angular.dev/assets/images/tutorials/common';
  housingService: HousingService = inject(HousingService);
  filteredLocationList: Housinglocation[] =[];
  constructor() {
    this.housingService.getAllHousingLocation().then((housingLocationList: Housinglocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }
filteredResult(text:string){
  if(!text){
    this.filteredLocationList=this.housingLocationList;
    return;
  }
  this.filteredLocationList=this.housingLocationList.filter((housingLocation)=> housingLocation?.city.toLowerCase().includes(text.toLowerCase()));
}
}
