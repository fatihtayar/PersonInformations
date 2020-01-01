import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { DevextremeComponent } from './devextreme/devextreme.component';


const routes: Routes = [
  {path:'',redirectTo:'bootstrap',pathMatch:'full'},
  {path:'bootstrap',component:BootstrapComponent},
  {path:'devextreme',component:DevextremeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
