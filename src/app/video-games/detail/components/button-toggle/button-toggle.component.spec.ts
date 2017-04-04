import { async } from '@angular/core/testing';
import { configureTestModule } from '../../../../test/configure-test-module.function';
import { TestComponentSupport } from '../../../../test/test-component-support.class';

import { ButtonToggleComponent } from './button-toggle.component';

describe('ButtonToggleComponent', () => {

  let support: TestComponentSupport<ButtonToggleComponent>;

  beforeEach(configureTestModule({
    declarations: [ButtonToggleComponent]
  }));
  beforeEach(() => {
    support = new TestComponentSupport<ButtonToggleComponent>(ButtonToggleComponent);
  });

  it('should emit event when clicked', async(() => {
    spyOn(support.component.onToggle, 'emit');
    expect(support.component.onToggle.emit).toHaveBeenCalledTimes(0);
    support.querySelector('button').click();
    expect(support.component.onToggle.emit).toHaveBeenCalledTimes(1);
  }));

  it('should have the toggled class when isToggled', () => {
    support.component.isToggled = true;
    support.detectChanges();
    expect(support.getClassNames('button')).toContain('toggled');
  });
});
