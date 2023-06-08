
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/-services/auth.service';
import { UserService } from 'src/app/userservice';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string = '';
  data: any;

  formdata = {
    email: "",
    password: ""
  }
  submit = false;
  errorMessage = "";
  loading = false;

  constructor(private auth: AuthService, private userService: UserService) { }

  ngOnInit(): void {
    this.auth.canAuthenticated();
  }

  onSubmit() {
    this.loading = true;
    this.auth.login(this.formdata.email, this.formdata.password)
      .subscribe(
        data => {
          this.auth.storeToken(data.idToken);
          this.auth.canAuthenticated();

          // Set the user profile data in local storage
          const userProfile = {
            name: 'John Doe',
            email: 'john.doe@example.com'
          };
          localStorage.setItem('userProfile', JSON.stringify(userProfile));

          // Update the user profile in the UserService
          this.userService.setUserProfile(userProfile);

          // ...
        },
        error => {
          if (error.error.error.message == "INVALID_EMAIL" || error.error.error.message == "INVALID_PASSWORD") {
            this.errorMessage = "Invalid credentials!"
          } else {
            this.errorMessage = "Unknown Error!"
          }
        }
      ).add(() => {
        this.loading = false;
      });
  }
  displayUserProfilePrompt() {
    const userProfile = this.userService.getUserProfile();
    const promptMessage = `Name: ${userProfile.name}\nEmail: ${userProfile.email}`;
    window.prompt('User Profile', promptMessage);
  }
}
