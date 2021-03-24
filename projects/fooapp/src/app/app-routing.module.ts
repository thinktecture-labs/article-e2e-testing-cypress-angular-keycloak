import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormComponent} from './form/form.component';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from '@foo/core';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'form', component: FormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, initialNavigation: 'disabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
