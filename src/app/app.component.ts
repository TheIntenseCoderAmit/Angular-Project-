import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomeComponent} from './myComponent/home/home.component';
import {NgOptimizedImage} from '@angular/common';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, NgOptimizedImage,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Homes';
}
