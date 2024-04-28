import { Component, EventEmitter, Output, inject } from '@angular/core';
import { HomeService } from '../home.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
declare var handleSignout: any
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  searchTerm: string = '';
  searchedLocation: any = undefined ;
  isSidebarOpen = false;
  @Output() searchClicked = new EventEmitter<string>();
  locationData: any[] = [];
  currentLoc: any;
  
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;

    
}

  constructor(private homeService: HomeService, private router: Router) { }
  auth=inject(AuthService)
  search(): void {

    this.homeService.updateSearchTerm(this.searchTerm);
    console.log('Search term sdasds:', this.searchTerm);
  }
  
  handleCurrentLocData(data: any): void {
    this.currentLoc = data;
    console.log("Current Loc Details", this.currentLoc);
  }

  handleUpdateMapData(data: any): void {
    // Handle the received data in your home component
   console.log('this data is ',data);
   this.searchedLocation = data
    this.locationData.push(data);
    
  
    console.log('Received data from map component:', this.locationData);
    
     // Limit the array to 3 items

   
  }
  redirectToHome() {
    this.router.navigate(['/home']);
  }
  redirectToDashboard() {
    this.router.navigate(['/dashboard']);
  }
  logout() {
    // Perform any cleanup tasks like clearing local storage, etc.
    // For example:
    localStorage.removeItem('loggedInUser');
    localStorage.removeItem('termsCondition');
    // Redirect to login page or any other page as needed
    this.router.navigate(['/login']);
  }
  handleSignout() {
    this.auth.handleSignout()
    sessionStorage.removeItem("loggedInUser")

    sessionStorage.removeItem("userLocation")
    sessionStorage.setItem("isReloaded","flase")
    this.router.navigate(["/"]).then(() => {
      window.location.reload()
    })
  }
}
