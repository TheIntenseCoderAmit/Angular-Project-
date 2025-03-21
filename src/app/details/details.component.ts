import { Component , inject } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, RouterModule} from '@angular/router';
import {HousingService} from '../housing.service';
import {Housinglocation} from '../housinglocation';
import {FormControl,FormGroup,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
route : ActivatedRoute = inject(ActivatedRoute);
housingService=inject(HousingService);
housingLocation: Housinglocation | undefined

  applyForm=new FormGroup({
  firstName:new FormControl(''),
lastName:new FormControl(''),
    email:new FormControl(''),

  });
housingLocationId=-1;
constructor(){
  const housingLocationId=parseInt(this.route.snapshot.params['id'],10);
  this.housingService.getHousingLocationById(housingLocationId).then((housingLocation)=>{
  this.housingLocation=housingLocation;
  });
}

submitApplication(){
  this.housingService.submitApplication(
    this.applyForm.value.firstName ?? '',
    this.applyForm.value.lastName ?? '',
    this.applyForm.value.email ?? '',
  )
}

}
