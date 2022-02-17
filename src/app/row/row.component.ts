import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {

  box:number[][] = [[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]];
  constructor() { }

  ngOnInit(): void {
  }

  changeColorCheck(indexes){
    this.box[indexes.rowIndex][indexes.boxIndex] = indexes.value;
  }

  resetColors(args){
  this.box.forEach(e=>{
    e.fill(0);
  })
  }
}
