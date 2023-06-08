import { Component } from '@angular/core';
import { UserService } from 'src/app/userservice';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  showBooksList: boolean = false;
  constructor(private userService: UserService) { }


  showAvailableBooks() {
    this.showBooksList = true;
  }
  displayUserProfile() {
    const userProfile = this.userService.getUserProfile();
    const promptMessage = `Name: ${userProfile.name}\nEmail: ${userProfile.email}`;
    window.prompt('User Profile', promptMessage);
  }
}
