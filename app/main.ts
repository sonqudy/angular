import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {TIMER_DIRECTIVES} from './timer/timer';
import {TASKS_DIRECTIVES} from './tasks/tasks';
import TaskIconsComponent from './tasks/task-icons.component';
import TaskTooltipDirective from './tasks/task-tooltip.directive';
import {SHARED_PIPES} from './shared/shared';
import AppComponent from './app.component';

@NgModule({
    declarations: [AppComponent, TaskIconsComponent, TaskTooltipDirective, TIMER_DIRECTIVES, TASKS_DIRECTIVES, SHARED_PIPES],
    imports: [BrowserModule],
    bootstrap: [AppComponent],
})

class PomodoroAppModule {
}


platformBrowserDynamic().bootstrapModule(PomodoroAppModule);