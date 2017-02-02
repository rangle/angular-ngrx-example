import {Input, Component, OnChanges} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-youtube-video',
  templateUrl: './youtube-video.component.html',
  styleUrls: ['./youtube-video.component.scss']
})
export class YouTubeVideoComponent implements OnChanges {

  @Input()
  private url: string;

  public trustedUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {

  }

  public ngOnChanges() {
    this.trustedUrl = this.getTrustedUrl();
  }

  public getTrustedUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
