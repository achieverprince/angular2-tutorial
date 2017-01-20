/**
 * Created by jebaprince on 1/19/2017.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {TwoWayBindingComponent} from "./component/two_way_binding/two-way-binding.component";

// Route Configuration
export const routes: Routes = [
    { path: 'default', component: AppComponent },
    { path: 'twowaybinding', component: TwoWayBindingComponent }
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);