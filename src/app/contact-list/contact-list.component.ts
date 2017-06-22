import { Component, OnInit } from '@angular/core';
import {Contact} from "../contact";
import {ContactService} from "../contact.service";
import {Router} from "@angular/router";
import {RequestOptions} from "@angular/http";


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {

  contacts: Contact[] = [];
  selectedContact: Contact;

  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private _contactService: ContactService,
              private router: Router) {}

  ngOnInit(){
    this._contactService
      .getAll()
      .subscribe(
        /* happy path */ contacts => this.contacts = contacts,
        /* error path */ e => this.errorMessage = e,
        /* onCompleted */ () => this.isLoading = false);
  }

  selectContact(contact: Contact){
    this.selectedContact = contact;
    this.router.navigateByUrl('selectedContact/' + contact.id);
  }

  delete(contact: Contact) {
    this._contactService
      .delete(contact.id)
      .subscribe(
        result => console.log(result),
        error => console.log(error));

    var index = this.contacts.findIndex(cont => cont.id == contact.id);
    this.contacts.splice(index, 1);
  }
}
