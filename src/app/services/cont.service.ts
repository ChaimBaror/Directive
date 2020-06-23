import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContService {

  constructor() { }

  public hoverCounter:number =0
  public clickimCounter:number=0
}
