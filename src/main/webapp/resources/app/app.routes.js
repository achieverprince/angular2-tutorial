import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TwoWayBindingComponent } from "./component/two_way_binding/two-way-binding.component";
// Route Configuration
export var routes = [
    { path: 'default', component: AppComponent },
    { path: 'twowaybinding', component: TwoWayBindingComponent }
];
// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];
export var routing = RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map