import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { ArrayService } from '../array.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})

export class FavouriteComponent  {
  arrays:string[];
  viewMode = 'contact us'
  constructor(arr:ArrayService) {
    this.arrays = arr.getArray();
   }

  @Input() isSelected: boolean;
  @Output()switchfav = new EventEmitter();
  selectedState: boolean;
  
  ngOnInit() {
    // this.switchfav.emit({newValue: this.isSelected});
    // console.log('starting this component');
    // console.log(this.isSelected);
    // if(!isNullOrUndefined(this.isSelected)) {
    //   this.selectedState = this.isSelected;
    // }
    // console.log(this.selectedState);
  }

 
  

  onclick(){
    this.isSelected = !this.isSelected;
    this.switchfav.emit({newValue: this.isSelected});
  }


  
}
export interface switchFavArgs{
  newValue : boolean
}
