import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input()
  processModel: any;
  canceledClaimStatus: number = 2;

  constructor(private _service: ServiceService) { }

  ngOnInit(): void {
  }

  // לא מבינה מה המשמעות של כל כך הרבה משתנים בוליניים ומה הרעיון של כל אחד, בעקרון במקרה כזה הייתי כותבת פונקציה אחת שמחזירה משתנה בולייני
  // וב-HTML 
  // הייתי כותבת משהוא כזה -
  // {{ func() ? 'בירור' : 'חריגה'}}

  hasIrragularMark() {
    return (this.processModel && this.processModel.superClaim && this.processModel.superClaim.irregularSuperClaimFlag);
  };
  claimRemarks() {
    var text = "";
    if (this.processModel.superClaim && this.processModel.superClaim.inquiryPorcessFlag) {
      text += "בירור";
      if (this.processModel.superClaim.pensionFollowUpForInsuredType) {
        text += ", ";
      }
    }
    return text;
  };

  getClaims() {
    if (!this.processModel.superClaim || !this.processModel.superClaim.operativeClaims) { return ''; }
    var ParticipatingClaims = this.getParticipatingClaims(this.processModel.superClaim.operativeClaims)
    return ParticipatingClaims ? ParticipatingClaims.map(function (claim) {
      return claim.company + "-" + claim.operativeClaimNum;
    }).join(",") : "אין תביעות משתתפות";
  };

  getParticipatingClaims(operativeClaims) {
    return operativeClaims.filter((claim) => claim.claimStatus.code !== this.canceledClaimStatus && this._service.checkIfParticipatingClaim(claim));
  }
  executeRefresh(){
    this.processModel.superClaim.inquiryPorcessFlag = true;
    this.processModel.superClaim.irregularSuperClaimFlag = false;
  }
}
