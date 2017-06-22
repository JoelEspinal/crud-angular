import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './new-number.component.html',
  styleUrls: ['./new-number.component.css']
})
export class NewNumberComponent implements OnInit {

  @Input() numbers: [{id?: number, number: string, category?: string}];

  constructor() { }

  ngOnInit() {
  }

  add(number: string){
    this.numbers.push({number: number});
  }

  _keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }

}
