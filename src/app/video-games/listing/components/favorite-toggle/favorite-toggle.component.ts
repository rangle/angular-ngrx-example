import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite-toggle',
  templateUrl: './favorite-toggle.component.html',
  styleUrls: ['./favorite-toggle.component.scss']
})
export class FavoriteToggleComponent {

  @Input()
  public active: boolean;

  @Output()
  public onToggle = new EventEmitter<void>();
}
