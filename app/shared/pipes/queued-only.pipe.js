System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, QueuedOnlyPipe;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            QueuedOnlyPipe = (function () {
                function QueuedOnlyPipe() {
                }
                QueuedOnlyPipe.prototype.transform = function (queueableItems) {
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    return queueableItems.filter(function (queueableItem) {
                        return queueableItem.queued === args[0];
                    });
                };
                QueuedOnlyPipe = __decorate([
                    core_1.Pipe({ name: 'pomodoroQueuedOnly', pure: false })
                ], QueuedOnlyPipe);
                return QueuedOnlyPipe;
            }());
            exports_1("default", QueuedOnlyPipe);
        }
    };
});
