import {NgModule, Component, Input, Pipe, PipeTransform, Directive, OnInit, HostListener} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

interface Task {
    name: string;
    deadline: Date;
    queued: boolean;
    pomodorosRequired: number;
}

class TasksService {
    public taskStore: Array<Task> = [];

    constructor() {
        const tasks = [{
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
        this.taskStore = tasks.map(task => {
            return {
                name: task.name,
                deadline: new Date(task.deadline),
                queued: false,
                pomodorosRequired: task.pomodorosRequired
            };
        });
    }
}

@Component({
    selector: 'pomodoro-task-icons',
    template: `<img *ngFor="let	icon of	icons" src="/assets/img/task.svg" width="30">`
})
class TaskIconsComponent implements OnInit {
    @Input() task: Task;
    icons: Object[] = [];

    ngOnInit() {
        this.icons.length = this.task.pomodorosRequired;
        this.icons.fill({name: this.task.name});
    }
}


@Pipe({
    name: 'pomodoroFormattedTime'
})
class FormattedTimePipe implements PipeTransform {
    transform(totalMinutes: number): string {
        let minutes: number = totalMinutes % 60;
        let hours: number = Math.floor(totalMinutes / 60);
        return `${hours}h:${minutes}m`;
    }
}

@Pipe({
    name: 'pomodoroQueuedOnly',
    pure: false
})
class QueuedOnlyPipe implements PipeTransform {
    transform(tasks: Task[], ...args: any[]): Task[] {
        return tasks.filter((task: Task) => {
            return task.queued === args[0];
        });
    }
}

@Directive({
    selector: '[task]'
})
class TaskTooltipDirective {
    private defaultTooltipText: string;
    @Input() task: Task;
    @Input() taskTooltip: any;

    @HostListener('mouseover')
    onMouseOver() {
        if (!this.defaultTooltipText && this.taskTooltip) {
            this.defaultTooltipText = this.taskTooltip.innerText;
        }
        this.taskTooltip.innerText = this.task.name;
    }

    @HostListener('mouseout')
    onMouseOut() {
        if (this.taskTooltip) {
            this.taskTooltip.innerText = this.defaultTooltipText;
        }
    }
}

@Component({
    selector: 'pomodoro-tasks',
    // entryComponents: [TaskIconsComponent],
    styleUrls: ['pomodoro-tasks.css'],
    templateUrl: 'pomodoro-tasks.html',

})
class TasksComponent {
    today: Date;
    tasks: Task[];
    queuedPomodoros: number;
    queueHeaderMapping: any = {'=0': 'No	pomodoros', '=1': 'One	pomodoro', 'other': '#	pomodoros'};

    constructor() {
        const taskService: TasksService = new TasksService();
        this.tasks = taskService.taskStore;
        this.today = new Date();
        this.updateQueuedPomodoros();
    }

    toggleTask(task: Task): void {
        task.queued = !task.queued;
        this.updateQueuedPomodoros();
    }

    private updateQueuedPomodoros(): void {
        this.queuedPomodoros = this.tasks.filter((task: Task) => task.queued)
            .reduce((pomodoros: number, queuedTask: Task) => {
                return pomodoros + queuedTask.pomodorosRequired;
            }, 0);
    }

}


@NgModule({
    declarations: [TasksComponent, TaskIconsComponent, TaskTooltipDirective, FormattedTimePipe, QueuedOnlyPipe],
    imports: [CommonModule, BrowserModule],
    bootstrap: [TasksComponent],
})

class AppModule {
}


platformBrowserDynamic().bootstrapModule(AppModule);