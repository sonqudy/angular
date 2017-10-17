System.register(["@angular/core", "@angular/platform-browser", "@angular/platform-browser-dynamic", "./timer/timer", "./tasks/tasks", "./tasks/task-icons.component", "./tasks/task-tooltip.directive", "./shared/shared", "./app.component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_1, platform_browser_dynamic_1, timer_1, tasks_1, task_icons_component_1, task_tooltip_directive_1, shared_1, app_component_1, PomodoroAppModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (timer_1_1) {
                timer_1 = timer_1_1;
            },
            function (tasks_1_1) {
                tasks_1 = tasks_1_1;
            },
            function (task_icons_component_1_1) {
                task_icons_component_1 = task_icons_component_1_1;
            },
            function (task_tooltip_directive_1_1) {
                task_tooltip_directive_1 = task_tooltip_directive_1_1;
            },
            function (shared_1_1) {
                shared_1 = shared_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }
        ],
        execute: function () {
            PomodoroAppModule = (function () {
                function PomodoroAppModule() {
                }
                PomodoroAppModule = __decorate([
                    core_1.NgModule({
                        declarations: [app_component_1.default, task_icons_component_1.default, task_tooltip_directive_1.default, timer_1.TIMER_DIRECTIVES, tasks_1.TASKS_DIRECTIVES, shared_1.SHARED_PIPES],
                        imports: [platform_browser_1.BrowserModule],
                        bootstrap: [app_component_1.default],
                    })
                ], PomodoroAppModule);
                return PomodoroAppModule;
            }());
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(PomodoroAppModule);
        }
    };
});
