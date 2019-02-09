import { switchFavArgs } from './favourite/favourite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  post = {
    isSelected : true,
    date:"aug 27th 1997"
  }
  onfavclick($event:switchFavArgs){
    console.log("i was changed:", $event);
  }
}
