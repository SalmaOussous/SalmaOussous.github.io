import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LegalMentionsComponent } from './legal-mentions/legal-mentions.component';

const routes: Routes = [
  {path: '',  component: HomePageComponent},
  {path: 'legal-mentions', component: LegalMentionsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
