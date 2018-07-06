import { Component, OnInit } from '@angular/core';
import { OuterSubscriber } from 'rxjs/internal/OuterSubscriber';

@Component({
  selector: 'app-encrypt',
  templateUrl: './encrypt.component.html',
  styleUrls: ['./encrypt.component.css']
})
export class EncryptComponent implements OnInit {
  message="";
  output='';
  key:number;
  key1:number;
  dummykey:number;
  dOutput="";
  encrypt(){
    let str= this.message.length;
    for(let i=0;i<str;i++){
      let newCharIndex=(i);
      let unicode= this.message.charCodeAt(newCharIndex);
      this.output+=String.fromCharCode(unicode ^ this.key);
    }
  }
  decrypt(){
    let newStr=this.output.length;
    for(let i=0;i<newStr;i++){
      
      let newUnicode=this.output.charCodeAt(i);
      this.dOutput+=String.fromCharCode(newUnicode ^ this.key1);
    }
  }
  constructor() { 
  }
  ngAfterViewInit(){
   
  }
  

  ngOnInit() {
  }

}
