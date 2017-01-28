import {Input, Component, OnChanges} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'youtube-video',
  templateUrl: './youtube-video.component.html',
  styleUrls: ['./youtube-video.component.scss']
})
export class YouTubeVideoComponent implements OnChanges {

  @Input()
  url: string;

  trustedUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {

  }

  ngOnChanges() {
    this.trustedUrl = this.getTrustedUrl();
  }

  private getTrustedUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}