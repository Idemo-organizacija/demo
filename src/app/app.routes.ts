import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RecommendationsPageComponent } from './recommendations-page/recommendations-page.component';
import { ExplorePageComponent } from './explore-page/explore-page.component';
import { ConnectPageComponent } from './connect-page/connect-page.component';
import { SignInpageComponent } from './sign-inpage/sign-inpage.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { InterestPickerComponent } from './components/interest-picker/interest-picker.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: LandingPageComponent },
    { path: 'recommendations', component: RecommendationsPageComponent },
    { path: 'explore', component: ExplorePageComponent },
    { path: 'connect', component: ConnectPageComponent },
    { path: 'signIn', component: SignInpageComponent },
    { path: 'signUp', component: SignUpPageComponent },
    { path: 'interestPicker', component: InterestPickerComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }