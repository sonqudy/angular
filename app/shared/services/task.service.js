System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, TaskService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            TaskService = (function () {
                function TaskService() {
                    this.taskStore = [];
                    var tasks = [{
                            name: "Code	an	HTML	Table",
                            deadline: "Jun	23	2015",
                            pomodorosRequired: 1
                        }, {
                            name: "Sketch	a	wireframe	for	the	new	homepage",
                            deadline: "Jun	24	2016",
                            pomodorosRequired: 2
                        }, {
                            name: "Style	table	with	Bootstrap	styles",
                            deadline: "Jun	25	2016",
                            pomodorosRequired: 1
                        }, {
                            name: "Reinforce	SEO	with	custom	sitemap.xml",
                            deadline: "Jun	26	2016",
                            pomodorosRequired: 3
                        }];
                    this.taskStore = tasks.map(function (task) {
                        return {
                            name: task.name,
                            deadline: new Date(task.deadline),
                            queued: false,
                            pomodorosRequired: task.pomodorosRequired
                        };
                    });
                }
                TaskService = __decorate([
                    core_1.Injectable(),
                    __metadata("design:paramtypes", [])
                ], TaskService);
                return TaskService;
            }());
            exports_1("default", TaskService);
        }
    };
});
