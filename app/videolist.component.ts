import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Video} from './video';

@Component({
    selector: 'video-list',
    templateUrl: 'app/videolist.component.html'
})
export class VideoListComponent {

    @Input() videos: Array<Video>;
    @Output() selectVideo = new EventEmitter();


    onSelect(vid: Video):void {
        this.selectVideo.next(vid);
    }
}