"use strict";
/**
 * Created by jebaprince on 1/20/2017.
 */
require('core-js/es6');
require('core-js/es7/reflect');
require('zone.js/dist/zone');
if (process.env.ENV === 'production') {
}
else {
    // Development
    Error['stackTraceLimit'] = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}
//# sourceMappingURL=polyfills.js.map