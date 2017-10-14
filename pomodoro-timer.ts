import {NgModule, Component, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

@Component({
    selector: 'countdown',
    template: '<h1>Time	left: {{seconds}}</h1>',
    styles: ['h1	{	color:	#900	}'],
    encapsulation: ViewEncapsulation.Emulated
})
class CountdownComponent {
    @Input() seconds: number;
    intervalId: number;
    @Output() complete: EventEmitter<any> = new EventEmitter();
    @Output() progress: EventEmitter<number> = new EventEmitter();

    constructor() {
        this.intervalId = setInterval(() => this.tick(), 1000);
    }

    private tick(): void {
        if (--this.seconds < 1) {
            clearInterval(this.intervalId);
            this.complete.emit(null);
        }
        this.progress.emit(this.seconds);
    }

}

@Component({
    selector: 'pomodoro-timer',
    templateUrl: './pomodoro-timer.html'
})
class PomodoroTimerComponent {

    onCountdownCompleted(): void {
        //alert('Time up!');
    }
}


@NgModule({
    declarations: [PomodoroTimerComponent, CountdownComponent],
    imports: [BrowserModule],
    bootstrap: [PomodoroTimerComponent],
})

class PomodoroTimerAppModule {
}


platformBrowserDynamic().bootstrapModule(PomodoroTimerAppModule);