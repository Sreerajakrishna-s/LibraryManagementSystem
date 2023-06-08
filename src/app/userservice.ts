import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userProfile: any = {
    name: 'srk',
    email: 'sk@gmail.com'
  };

  constructor() {
    const storedUserProfile = localStorage.getItem('userProfile');
    if (storedUserProfile) {
      this.userProfile = JSON.parse(storedUserProfile);
    }
  }

  getUserProfile(): any {
    return this.userProfile;
  }

  setUserProfile(userProfile: any) {
    this.userProfile = { ...userProfile };
    localStorage.setItem('userProfile', JSON.stringify(this.userProfile));
  }
}
