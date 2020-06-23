import { Component, OnInit, ElementRef } from '@angular/core';
import { ContService } from 'src/app/services/cont.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {

  constructor(private el:ElementRef ) { 
 console.log("this el for c1 "+ el);
 
  }

  ngOnInit(): void {
  }

  arr=[1,2,3,4,5]
  

}
