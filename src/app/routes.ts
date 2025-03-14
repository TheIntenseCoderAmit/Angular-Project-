import {Routes} from '@angular/router';
import {HomeComponent} from './myComponent/home/home.component';
import {DetailsComponent} from './details/details.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title:"Home page",
  },
  {
    path:'details/:id',
    component: DetailsComponent,
    title: 'Home Details',
  }
]

export default routeConfig;
