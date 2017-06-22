import {Component, Input, OnInit} from '@angular/core';
import {isNumber} from "util";

@Component({
  selector: 'app-number-list',
  templateUrl: './number-list.component.html',
  styleUrls: ['./number-list.component.css']
})
export class NumberListComponent implements OnInit {

  @Input() numbers: [{id?: number, number: string, category?: string}];

  constructor() { }

  ngOnInit() {
  }

  remove(number: {id?: number, number: string, category?: string}){
    var index = this.numbers.findIndex(numb => numb.id === number.id);
    this.numbers.splice(index, 1);
  }
}
