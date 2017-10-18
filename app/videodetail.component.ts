import {Component, EventEmitter, Output} from '@angular/core';
import {Video} from './video'

@Component({
    selector: 'video-detail',
    templateUrl: 'app/videodetail.component.html',
    inputs: ['video']
})
export class VideoDetailComponent {

    private editTitle: boolean = false;
    @Output() private closeForm = new EventEmitter();

    onTitleClick() {
        this.editTitle = true;
    }

    onButtonOkClick() {
        this.closeForm.next({});
    }

    ngOnChanges() {
        this.editTitle = false;
    }

}