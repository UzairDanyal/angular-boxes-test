import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {

 @Input()box;
 @Input() index;
 @Output() changeColorValue = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onDrag(i){
    this.box[i]=1;
    this.changeColorValue.emit({"rowIndex":this.index,"boxIndex":i,value:1})
  }

  getColor(i){
    return (this.box[i]==0)?{"background-color":"white"}:{"background-color":"red"};
  }


}
