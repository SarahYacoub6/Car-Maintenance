import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { ProfileService } from '../profile.service';
import {Profile} from '../profile';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  profile: Profile = new Profile();
  constructor(private router: Router,private route: ActivatedRoute, private ProfileService: ProfileService) { }

  ngOnInit() {
    this.route.params.subscribe(p => this.profile = this.ProfileService.get(p['id']));
  }
   submit() {
    this.router.navigate(['allProfiles']);
  }

}
