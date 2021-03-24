import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthGuard} from '@foo/core';

const routes: Routes = [{path: '', component: DashboardComponent, canActivate: [AuthGuard]}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, initialNavigation: 'disabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
