import { Component, OnInit, OnDestroy } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  selectedContact: Contact;

  constructor() { }

  ngOnInit() {
  }

  refresh(){
    window.location.href = '/contacts/';
  }

}
