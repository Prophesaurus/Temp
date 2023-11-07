import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SensorComponent } from './sensor/sensor.component';
import { MainComponent } from './main/main.component';
import { HelpPageComponent } from './help-page/help-page.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sensor/:id', component: SensorComponent},
  { path: 'main', component: MainComponent},
  { path: 'help', component: HelpPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
