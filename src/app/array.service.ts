import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrayService {
 arr = ['England','united states of america','trindad and tobago','Nigeria'];
 getArray(){
  return this.arr;
 }
  constructor() { }
}
