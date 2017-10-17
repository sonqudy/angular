System.register(["./pipes/formatted-time.pipe", "./pipes/queued-only.pipe", "./services/settings.service", "./services/task.service"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var formatted_time_pipe_1, queued_only_pipe_1, settings_service_1, task_service_1, SHARED_PIPES, SHARED_PROVIDERS;
    return {
        setters: [
            function (formatted_time_pipe_1_1) {
                formatted_time_pipe_1 = formatted_time_pipe_1_1;
            },
            function (queued_only_pipe_1_1) {
                queued_only_pipe_1 = queued_only_pipe_1_1;
            },
            function (settings_service_1_1) {
                settings_service_1 = settings_service_1_1;
            },
            function (task_service_1_1) {
                task_service_1 = task_service_1_1;
            }
        ],
        execute: function () {
            exports_1("FormattedTimePipe", formatted_time_pipe_1.default);
            exports_1("QueuedOnlyPipe", queued_only_pipe_1.default);
            exports_1("SettingsService", settings_service_1.default);
            exports_1("TaskService", task_service_1.default);
            SHARED_PIPES = [formatted_time_pipe_1.default, queued_only_pipe_1.default];
            exports_1("SHARED_PIPES", SHARED_PIPES);
            SHARED_PROVIDERS = [settings_service_1.default, task_service_1.default];
            exports_1("SHARED_PROVIDERS", SHARED_PROVIDERS);
        }
    };
});
