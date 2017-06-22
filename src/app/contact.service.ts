import {Injectable, OnInit} from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Contact} from "./contact";


@Injectable()
export class ContactService implements OnInit{

  private baseUrl: string = 'http://127.0.0.1:8080';

  constructor(private http: Http) { }

  ngOnInit(){}


  getAll(): Observable<Contact[]>{
    let contacts$ = this.http
      .get(`${this.baseUrl}/contacts`, {headers: this.getHeaders()})
      .map(mapContacts)
      .catch(handleError);
    return contacts$;
  }

  get(id: number): Observable<Contact> {
    let contact$ = this.http
      .get(`${this.baseUrl}/contact/${id}`, {headers: this.getHeaders()})
      .map(res =>(res.json() as Contact))
      .catch(handleError);
    return contact$;
  }

  addContact(contact: Contact): Observable<Contact>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http
      .post(`${this.baseUrl}/contact`, contact, {headers: headers})
      .catch(handleError)
  }

  updateContact(contact: Contact): Observable<Contact>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http
      .put(`${this.baseUrl}/contact/${contact.id}`, contact, {headers: headers})
      .map((res:Response) => res.json())
      .catch(handleError)
  }

  delete(id: number){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http
      .delete(`${this.baseUrl}/contact/${id}`, {headers: headers})
      .catch(handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private clone(object: any){
    return JSON.parse(JSON.stringify(object));
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}

function mapContacts(response: Response): Contact[] {
  //console.log('finding nemo: ', response.json());
  return response.json().map(toContact);

}

function toContact(r: any): Contact{

  let contact = <Contact>({
    id: r.id,
    name: r.name,
    lastName: r.lastName,
    address: r.address,
    numbers: r.numbers
  });

  // console.log("parsed Contact", contact);
  return contact;
}

function extractId(contactData:any){
  let extractedId = contactData.url.replace('http://localhost:8080/selectedContact/','').replace('/','');
  return parseInt(extractedId);
}

function handleError (error: any) {
  let errorMsg = error.message || `There was a problem transforming the information`
  console.error(errorMsg);
  // throw an application level error
  return Observable.throw(errorMsg);
}
