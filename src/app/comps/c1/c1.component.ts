import { Component, OnInit, ElementRef } from '@angular/core';
import { ContService } from 'src/app/services/cont.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {

  constructor(private el: ElementRef) {
    console.log("this el for c1 " + el);

  }

  ngOnInit(): void {
  }

  arr = [
    { name: "aron", age: 22, id: 1, isBossy: true },
    { name: "shlom", age: 31, id: 2, isBossy: false },
    { name: "broch", age: 32, id: 3, isBossy: true },
    { name: "bniymin", age: 30, id: 4, isBossy: false },
    { name: "elon", age: 32, id: 5, isBossy: true },
    { name: "eli", age: 30, id: 6, isBossy: false },
    { name: "chaim", age: 32, id: 7, isBossy: true },
    { name: "david", age: 30, id: 8, isBossy: false },
    { name: "shira", age: 28, id: 9, isBossy: false }]

}
