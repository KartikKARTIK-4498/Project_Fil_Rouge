import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terms-and-condition',
  templateUrl: './terms-and-condition.component.html',
  styleUrl: './terms-and-condition.component.css'
})
export class TermsAndConditionComponent {
  constructor( private router: Router) {
    
    let check = localStorage.getItem("termsCondition")
    if(check){
      this.router.navigate(['/home']);

    }
   }

  allowTerms() {
    localStorage.setItem("termsCondition","true")
    this.router.navigate(['/home']);
  }
  
}
