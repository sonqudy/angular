System.register(["./timer-widget.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var timer_widget_component_1, TIMER_DIRECTIVES;
    return {
        setters: [
            function (timer_widget_component_1_1) {
                timer_widget_component_1 = timer_widget_component_1_1;
            }
        ],
        execute: function () {
            exports_1("TimerWidgetComponent", timer_widget_component_1.default);
            TIMER_DIRECTIVES = [timer_widget_component_1.default];
            exports_1("TIMER_DIRECTIVES", TIMER_DIRECTIVES);
        }
    };
});
