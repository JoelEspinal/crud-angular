import {AfterViewChecked, Component, Input, OnInit} from '@angular/core';
import {Contact} from "../contact"
import {ActivatedRoute, Router} from "@angular/router";
import {ContactService} from "../contact.service";
import {applyRedirects} from "@angular/router/src/apply_redirects";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactName: string;
  contactLastName: string;
  contactAddress: string;
  numbers: [ {id?: number, number: string, category?: string} ] = [] as [ {id?: number, number: string, category?: string} ];

  selectedContact: Contact;

  sub:any;
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private _contactService: ContactService,
              private route: ActivatedRoute,
              private peopleService: ContactService,
              private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      if(id) this._contactService
        .get(id)
        .subscribe(
          /* happy path */ contact => {
                        this.selectedContact = contact;
                        this.contactName = contact.name;
                        this.contactLastName = contact.lastName;
                        this.contactAddress = contact.address;
                        this.numbers = contact.numbers;
                      },
          /* error path */ e => this.errorMessage = e,
          /* onCompleted */ () => this.isLoading = false);

    });
  }

  addContact(){
    let newContact: Contact = new Contact();
    newContact.name = this.contactName;
    newContact.lastName = this.contactLastName;
    newContact.address = this.contactAddress;
    newContact.numbers = this.numbers;

    let currentContact: Contact = this.validate(newContact);

    console.log(currentContact);

    this._contactService
      .addContact(currentContact)
      .subscribe(
        contact => this.selectedContact = contact,
        e => this.errorMessage = e
      );

    let link = '/contacts/';

    window.location.href=link;

  }

  updateContact(contact: Contact): void{
    contact.name = this.contactName;
    contact.lastName = this.contactLastName;
    contact.address = this.contactAddress;

    let currentContact: Contact = this.validate(this.selectedContact);
    currentContact.numbers = contact.numbers;

    this._contactService
      .updateContact(currentContact)
      .subscribe(
        contact => this.selectedContact = contact,
        e => this.errorMessage = e
      );

    this.selectedContact = contact;

   let link = ["/selectedContact/" + this.selectedContact.id];
   this.router.navigate(link);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  private validate(contact: Contact): Contact {
    if(this.contactName !== '' && !(typeof this.contactName === 'undefined')) contact.name = this.contactName;

    if(this.contactLastName !== '' && !(typeof this.contactLastName === 'undefined')) contact.lastName = this.contactLastName;

    if(this.contactAddress !== '' && !(typeof this.contactAddress === 'undefined')) contact.address = this.contactAddress;

    return contact;
  }
}
