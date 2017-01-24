"use strict";
/**
 * Created by jebaprince on 1/19/2017.
 */
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./component/dashboard/dashboard.component');
var two_way_binding_component_1 = require("./component/two_way_binding/two-way-binding.component");
var dynamic_form_component_1 = require("./component/dynamic_form/dynamic-form.component");
var jquery_integration_1 = require("./component/jquery_integration/jquery_integration");
var jqueryui_integration_component_1 = require("./component/jqueryui_integration/jqueryui_integration.component");
var dynamic_dropdown_component_1 = require("./component/dropdown/dynamic_dropdown.component");
// Route Configuration
exports.routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    { path: 'dynamicform', component: dynamic_form_component_1.DynamicFormComponent },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'jqueryintegration', component: jquery_integration_1.JqueryIntegrationComponent },
    { path: 'jqueryuiintegration', component: jqueryui_integration_component_1.JqueryUIIntegrationComponent },
    { path: 'twowaybinding', component: two_way_binding_component_1.TwoWayBindingComponent },
    { path: 'dropdown', component: dynamic_dropdown_component_1.DropdownComponent }
];
router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map