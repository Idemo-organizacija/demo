import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RecommendationsPageComponent } from './recommendations-page/recommendations-page.component';
import { ExplorePageComponent } from './explore-page/explore-page.component';
import { ConnectPageComponent } from './connect-page/connect-page.component';
import { SignInpageComponent } from './sign-inpage/sign-inpage.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: LandingPageComponent },
    { path: 'recommendations', component: RecommendationsPageComponent },
    { path: 'explore', component: ExplorePageComponent },
    { path: 'connect', component: ConnectPageComponent },
    { path: 'signIn', component: SignInpageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }