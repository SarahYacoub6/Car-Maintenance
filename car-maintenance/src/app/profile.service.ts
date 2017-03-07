import { Injectable } from '@angular/core';
import {Profile} from './profile';

@Injectable()
export class ProfileService {
  profiles: Profile[] = [];
  private id: number = 0;
  constructor() {
    this.profiles= [];
   }
  addProfile(profile: Profile): void{
    profile.index = this.id++;
    this.profiles.push(profile);
   }

   delete(profile: Profile):void
   {
     const index = this.profiles.indexOf(profile);
     if(index >= 0){
       this.profiles.splice(index,1);
     }
   }

   get(id: number): Profile{
     for(const profile of this.profiles){
       if(profile.index == id) return profile;
     }
     return null;
     }
}
