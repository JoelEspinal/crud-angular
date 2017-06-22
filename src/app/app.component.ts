import { Component } from '@angular/core';
import {ContactService} from "./contact.service"
import {ContactListComponent} from "./contact-list/contact-list.component"
import {MainComponent} from "./main/main.component"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ContactService]
})
export class AppComponent {

}
