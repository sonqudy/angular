import {Component} from '@angular/core';
import {Config} from './config.service';
import {Video} from './video'
import {VideoListComponent} from './videolist.component'

@Component({
    selector: 'video-app',
    templateUrl: 'app/app.component.html',

})
export class AppComponent {
    title: string = Config.TITLE_PAGE;
    videos: Array<Video>;
    selectedVideo?: Video;

    constructor(){
        this.videos = [
            new Video(1,"Test","www.test.com","Test Description"),
            new Video(2,"Test 2","www.test2.com")
        ]
    }
    onSelectVideo(video){
        this.selectedVideo = video;
    }

    onCloseDetailForm(event){
        this.selectedVideo = undefined;
    }

    newVideo(){
        var v : Video = new Video(this.videos.length+1,"A new video");
        this.videos.push(v);
        this.selectedVideo = v;
    }


}