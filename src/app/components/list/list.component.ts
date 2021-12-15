import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    @Input()
    process: any;
    contactPersons = [];
    @Output() public countChanged: EventEmitter<number> = new EventEmitter();

    constructor(private _service: ServiceService) { }

    ngOnInit(): void {
        this.contactPersons = [
            {
                id: 1,
                deliveryFlag: true,
                type: {
                    code: 1,
                    value: "מבוטח"
                },
                firstName: "ניקיטה",
                lastName: "ג'יין",
                identity: 278545412,
                address: {
                    homeNumber: 9,
                    cityName: "רחובות",
                    streetName: "אופנהיימר"
                },
                cellPhone: 525816206,
                email: "NIKITA_JAIN@AMAT.COM"
            },
            {
                id: 2,
                deliveryFlag: false,
                type: {
                    code: 21,
                    value: "סוכן"
                },
                firstName: "טוביה",
                lastName: "בצקי",
                identity: 433974846,
                address: {
                    cityName: "מחנה תל נוף",
                },
                cellPhone: 525452206,
            }
        ]
        var contactPersonType = {
            INSURED: 1,
            AGENT: 2,
            EMPLOYER: 5,
            ADVOCATE: 19,
            COMMISSIONED: 20,
            OTHER: 21,
            SURVIVOR: 22
        }
        this.countChanged.emit(this.contactPersons.length);
        this._service.deleteClickedEvent
            .subscribe(() => {
                this.contactPersons = [];
                this.countChanged.emit(this.contactPersons.length);
            });
        this._service.resetClickedEvent
            .subscribe(() => {
                this.contactPersons = this.contactPersons.slice(0, 1);
                this.countChanged.emit(this.contactPersons.length);
            });
            this._service.addToContactsClickedEvent
            .subscribe(() => {
                this.contactPersons.push(this.process.insured)
                this.countChanged.emit(this.contactPersons.length);
            });
    }
    addContactPerson() {
        this.contactPersons.push({
            id: this.contactPersons.length,
            deliveryFlag: this.contactPersons[this.contactPersons.length - 1] ? this.contactPersons[this.contactPersons.length - 1].deliveryFlag ? false : true : true,
            type: {
                code: 5,
                value: "שאר"
            },
            firstName: "ישראל",
            lastName: "ישראלי",
            identity: 278545412,
            address: {
                homeNumber: 9,
                cityName: "רחובות",
                streetName: "אופנהיימר"
            },
            cellPhone: 525816206,
            email: "NIKITA_JAIN@AMAT.COM"
        })
        this.countChanged.emit(this.contactPersons.length);
    }
}
