import {Input, Component} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'youtube-video',
  templateUrl: './youtube-video.component.html',
  styleUrls: ['./youtube-video.component.scss']
})
export class YouTubeVideoComponent {

  @Input()
  url: string;

  constructor(private sanitizer: DomSanitizer) {

  }

  getTrustedUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}