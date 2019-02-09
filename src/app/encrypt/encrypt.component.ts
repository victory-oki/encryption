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
    this.output="";
    let str= this.message.length;
    this.dummykey= Math.floor(Math.random()* ((this.key)%10))
    for(let i=0;i<str;i++){
      let newCharIndex=(i);
      let unicode= this.message.charCodeAt(newCharIndex);
      let a = unicode ^ this.key;
      this.output+=String.fromCharCode( a ^ this.dummykey);
    }
    this.output = this.output + this.dummykey;
  }
  decrypt(){
    this.dOutput="";
    let newStr=this.output.length;
    let b = this.output.slice(-1);
    let newDummyKey=parseInt(b);
    console.log(b);
    console.log(newDummyKey);
    for(let i=0;i<(newStr-1);i++){
      let newUnicode=this.output.charCodeAt(i);
      // let newOutput= this.output.slice(0,newStr);
      let a = newUnicode ^ this.key1;
      this.dOutput+=String.fromCharCode(a ^ newDummyKey);
      
    }
  }
  constructor() { 
  }
  ngAfterViewInit(){
   
  }
  

  ngOnInit() {
  }

}
