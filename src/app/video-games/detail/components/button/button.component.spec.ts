import { async } from '@angular/core/testing';
import { configureTestModule } from '../../../../test/configure-test-module.function';
import { TestComponentSupport } from '../../../../test/test-component-support.class';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {

  let support: TestComponentSupport<ButtonComponent>;

  beforeEach(configureTestModule({
    declarations: [ButtonComponent]
  }));
  beforeEach(() => {
    support = new TestComponentSupport<ButtonComponent>(ButtonComponent);
  });

  it('should emit event when clicked', async(() => {
    spyOn(support.component.onButtonPressed, 'emit');
    expect(support.component.onButtonPressed.emit).toHaveBeenCalledTimes(0);
    support.querySelector('button').click();
    expect(support.component.onButtonPressed.emit).toHaveBeenCalledTimes(1);
  }));

  it('should have a class matching its type', () => {
    support.component.type = 'default';
    support.detectChanges();
    expect(support.getClassNames('button')).toContain('default');
  });
});
