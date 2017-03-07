import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../profile.service';
import {Profile} from '../profile';

@Component({
  selector: 'app-all-profiles',
  templateUrl: './all-profiles.component.html',
  styleUrls: ['./all-profiles.component.css']
})
export class AllProfilesComponent implements OnInit {
   profiles: Profile[]; 
  constructor(private ProfileService: ProfileService) { 
    this.profiles =this.ProfileService.profiles;
    console.log(this.profiles);
  }

  ngOnInit() {
  }
  delete(profile: Profile)
  {
    this.ProfileService.delete(profile);
  }

}
