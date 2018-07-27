import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  obtenerRGB() {
    var color = "rgb(" +  Math.floor(Math.random() * 255) + ","+ Math.floor(Math.random() * 255) + ","+ Math.floor(Math.random() * 255) + ")";
    return color ;
  }
 
}
