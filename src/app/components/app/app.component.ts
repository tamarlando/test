import { ChangeDetectorRef, Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'test';
  public process: any;
  @Input()
  public count:number = 0;
 
   
  constructor(private cdref: ChangeDetectorRef) {
        
  }
  ngOnInit() : void {
    this.process = {
      processType: "AMBULATORY_HEALTH_CLAIM",
      processStatus: 1,
      superClaim: {
          inquiryPorcessFlag: false,
          irregularSuperClaimFlag: true,
          pensionFollowUpForInsuredType: 0,
          superClaimStatus : {
              code : 1,
              value : "פתוחה"
          },
          deathAfterDisabilityFlag: false,
          operativeClaims: [
              {
                  operativeClaimNum: 123,
                  company : 2,
                  claimStatus : {
                      code : 2,
                      value : "פתוחה"
                  },
                  coverages: [
                      {
                          coverageNum: 1,
                          claimParticipating: false
                      },
                      {
                          coverageNum: 2,
                          claimParticipating: false
                      }
                  ]
              }, {
                  operativeClaimNum: 24531,
                  company : 1,
                  claimStatus : {
                      code : 1,
                      value : "מבוטלת"
                  },
                  coverages: [
                      {
                          coverageNum: 1,
                          claimParticipating: true
                      },
                      {
                          coverageNum: 2,
                          claimParticipating: false
                      }
                  ]
              }
          ]
      },
      insured : {
          companyEmployer : true,
          position: "פקיד",
          identity : 27854122145,
          firstName : "מריה",
          lastName : "ג'יין",
          age: 35,
          lastJobDescription : "כללי - מקפת",
          smokingCode : 0,
          email : "NIKITA_JAIN@AMAT.COM",
          address : {
              cityName : "רעננה",
              streetName : "אחוזה",
              cellPhone : 544485236
          }
      },

  }
  }
  ngAfterContentChecked() {


    this.cdref.detectChanges();
    
     }
  onCountChanged(count){
      this.count = count;
  }
}
