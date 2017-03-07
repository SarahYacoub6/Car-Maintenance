import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ProfileService } from './profile.service';
import {RouterModule, Routes} from '@angular/router';
import { AllProfilesComponent } from './all-profiles/all-profiles.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const appRoutes: Routes = [
  {path: 'new', component: CreateProfileComponent},
  {path: 'Record', component: ProfileDetailsComponent},
  {path: 'index', component: MainComponent},
  {path: 'allProfiles', component: AllProfilesComponent},
  {path: 'edit/:id', component: EditProfileComponent},
  {path: '',
   redirectTo: '/index',pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    CreateProfileComponent,
    ProfileDetailsComponent,
    AllProfilesComponent,
    EditProfileComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
