import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-content-container';
  customStyle = {
    'background-color' : 'black',
    'color' : 'white',
    'font-weight' : 'bold',
    'margin': '20px',
    'padding': '20px'
  }
}
