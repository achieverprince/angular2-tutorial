/**
 * Created by jebaprince on 1/19/2017.
 */
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { TwoWayBindingComponent } from "./component/two_way_binding/two-way-binding.component";
import {DynamicFormComponent} from "./component/dynamic_form/dynamic-form.component";
import {JqueryIntegrationComponent} from "./component/jquery_integration/jquery_integration";
import {JqueryUIIntegrationComponent} from "./component/jqueryui_integration/jqueryui_integration.component";

// Route Configuration
export const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    { path: 'dynamicform', component: DynamicFormComponent},
    { path: 'dashboard', component: DashboardComponent },
    { path: 'jqueryintegration', component: JqueryIntegrationComponent },
    { path: 'jqueryuiintegration', component: JqueryUIIntegrationComponent },
    { path: 'twowaybinding', component: TwoWayBindingComponent }
];

RouterModule.forRoot(routes);