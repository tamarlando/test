import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-concentration-of-contacts',
  templateUrl: './concentration-of-contacts.component.html',
  styleUrls: ['./concentration-of-contacts.component.css']
})
export class ConcentrationOfContactsComponent implements OnInit {
  @Input()
  public count: number;
  public isToShow: boolean = true;

  constructor(private _service: ServiceService) { }
  ngOnInit(): void {

  }
  deleteContacts() {
    this._service.deleteClicked();
  }
  resetContacts() {
    this._service.resetClicked();
  }
  addToContacts() {
    this._service.addToContactsClicked();
  }
}
