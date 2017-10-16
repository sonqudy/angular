System.register(["@angular/core", "@angular/common", "@angular/platform-browser", "@angular/platform-browser-dynamic"], function (exports_1, context_1) {
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
    var core_1, common_1, platform_browser_1, platform_browser_dynamic_1, TasksService, TaskIconsComponent, FormattedTimePipe, QueuedOnlyPipe, TaskTooltipDirective, TasksComponent, AppModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            }
        ],
        execute: function () {
            TasksService = (function () {
                function TasksService() {
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
                return TasksService;
            }());
            TaskIconsComponent = (function () {
                function TaskIconsComponent() {
                    this.icons = [];
                }
                TaskIconsComponent.prototype.ngOnInit = function () {
                    this.icons.length = this.task.pomodorosRequired;
                    this.icons.fill({ name: this.task.name });
                };
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], TaskIconsComponent.prototype, "task", void 0);
                TaskIconsComponent = __decorate([
                    core_1.Component({
                        selector: 'pomodoro-task-icons',
                        template: "<img *ngFor=\"let\ticon of\ticons\" src=\"/assets/img/task.svg\" width=\"30\">"
                    })
                ], TaskIconsComponent);
                return TaskIconsComponent;
            }());
            FormattedTimePipe = (function () {
                function FormattedTimePipe() {
                }
                FormattedTimePipe.prototype.transform = function (totalMinutes) {
                    var minutes = totalMinutes % 60;
                    var hours = Math.floor(totalMinutes / 60);
                    return hours + "h:" + minutes + "m";
                };
                FormattedTimePipe = __decorate([
                    core_1.Pipe({
                        name: 'pomodoroFormattedTime'
                    })
                ], FormattedTimePipe);
                return FormattedTimePipe;
            }());
            QueuedOnlyPipe = (function () {
                function QueuedOnlyPipe() {
                }
                QueuedOnlyPipe.prototype.transform = function (tasks) {
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    return tasks.filter(function (task) {
                        return task.queued === args[0];
                    });
                };
                QueuedOnlyPipe = __decorate([
                    core_1.Pipe({
                        name: 'pomodoroQueuedOnly',
                        pure: false
                    })
                ], QueuedOnlyPipe);
                return QueuedOnlyPipe;
            }());
            TaskTooltipDirective = (function () {
                function TaskTooltipDirective() {
                }
                TaskTooltipDirective.prototype.onMouseOver = function () {
                    if (!this.defaultTooltipText && this.taskTooltip) {
                        this.defaultTooltipText = this.taskTooltip.innerText;
                    }
                    this.taskTooltip.innerText = this.task.name;
                };
                TaskTooltipDirective.prototype.onMouseOut = function () {
                    if (this.taskTooltip) {
                        this.taskTooltip.innerText = this.defaultTooltipText;
                    }
                };
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], TaskTooltipDirective.prototype, "task", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], TaskTooltipDirective.prototype, "taskTooltip", void 0);
                __decorate([
                    core_1.HostListener('mouseover'),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", []),
                    __metadata("design:returntype", void 0)
                ], TaskTooltipDirective.prototype, "onMouseOver", null);
                __decorate([
                    core_1.HostListener('mouseout'),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", []),
                    __metadata("design:returntype", void 0)
                ], TaskTooltipDirective.prototype, "onMouseOut", null);
                TaskTooltipDirective = __decorate([
                    core_1.Directive({
                        selector: '[task]'
                    })
                ], TaskTooltipDirective);
                return TaskTooltipDirective;
            }());
            TasksComponent = (function () {
                function TasksComponent() {
                    this.queueHeaderMapping = { '=0': 'No	pomodoros', '=1': 'One	pomodoro', 'other': '#	pomodoros' };
                    var taskService = new TasksService();
                    this.tasks = taskService.taskStore;
                    this.today = new Date();
                    this.updateQueuedPomodoros();
                }
                TasksComponent.prototype.toggleTask = function (task) {
                    task.queued = !task.queued;
                    this.updateQueuedPomodoros();
                };
                TasksComponent.prototype.updateQueuedPomodoros = function () {
                    this.queuedPomodoros = this.tasks.filter(function (task) { return task.queued; })
                        .reduce(function (pomodoros, queuedTask) {
                        return pomodoros + queuedTask.pomodorosRequired;
                    }, 0);
                };
                TasksComponent = __decorate([
                    core_1.Component({
                        selector: 'pomodoro-tasks',
                        // entryComponents: [TaskIconsComponent],
                        styleUrls: ['pomodoro-tasks.css'],
                        templateUrl: 'pomodoro-tasks.html',
                    }),
                    __metadata("design:paramtypes", [])
                ], TasksComponent);
                return TasksComponent;
            }());
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        declarations: [TasksComponent, TaskIconsComponent, TaskTooltipDirective, FormattedTimePipe, QueuedOnlyPipe],
                        imports: [common_1.CommonModule, platform_browser_1.BrowserModule],
                        bootstrap: [TasksComponent],
                    })
                ], AppModule);
                return AppModule;
            }());
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
        }
    };
});
