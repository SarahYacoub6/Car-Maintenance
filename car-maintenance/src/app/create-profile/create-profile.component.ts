import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Profile } from '../profile';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {
  profile: Profile = new Profile();

  constructor(private router: Router, private profileservice: ProfileService) { }

  ngOnInit() {
  }

  submit() {
    this.profileservice.addProfile(this.profile);
    this.profile = new Profile();
    this.router.navigate(['index']);
  }
}
