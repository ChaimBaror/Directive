import { Component, OnInit } from '@angular/core';
import { ContService } from 'src/app/services/cont.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(public svc: ContService) { }

  ngOnInit(): void {
  }

}
