import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  @Output() deleteClickedEvent = new EventEmitter<void>();
  @Output() resetClickedEvent = new EventEmitter<void>();
  @Output() addToContactsClickedEvent = new EventEmitter<void>();
  
  constructor() { }

  deleteClicked() {
    this.deleteClickedEvent.emit();
  }

  resetClicked() {
    this.resetClickedEvent.emit();
  }

  addToContactsClicked() {
    this.addToContactsClickedEvent.emit();
  }
  
  checkIfParticipatingClaim(claim) {
    return claim.coverages.find((coverage) =>  coverage.claimParticipating );
}
}
