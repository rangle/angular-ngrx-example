import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss']
})
export class ButtonToggleComponent {

  @Input()
  public isToggled: boolean;

  @Output()
  public onToggle = new EventEmitter();

}
