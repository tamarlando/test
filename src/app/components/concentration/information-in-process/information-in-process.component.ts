import { Component,  Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-information-in-process',
  templateUrl: './information-in-process.component.html',
  styleUrls: ['./information-in-process.component.css']
})
export class InformationInProcessComponent implements OnInit {
  @Input()
  process: any;
  @Input()
  count: number;
  constructor() { }

  ngOnInit(): void {
  }

  isCompanyEmployer() {
    if (!this.process || !this.process.insured || !this.process.insured.companyEmployer) {
      return '';
    } else {
      return 'עובד חברה - ' + this.process.insured.position;
    }
  };

}
