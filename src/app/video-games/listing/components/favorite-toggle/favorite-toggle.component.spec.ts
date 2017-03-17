import { async } from '@angular/core/testing';
import { configureTestModule } from '../../../../test/configure-test-module.function';
import { TestComponentSupport } from '../../../../test/test-component-support.class';

import { FavoriteToggleComponent } from './favorite-toggle.component';

describe('FavoriteToggleComponent', () => {

  beforeEach(configureTestModule({
    declarations: [FavoriteToggleComponent]
  }));

  it('should emit event when clicked', async(() => {
    const support = new TestComponentSupport<FavoriteToggleComponent>(FavoriteToggleComponent);
    spyOn(support.component.onToggle, 'emit');
    expect(support.component.onToggle.emit).toHaveBeenCalledTimes(0);
    support.querySelector('button').click();
    expect(support.component.onToggle.emit).toHaveBeenCalledTimes(1);
  }));

  it('should have the active class when active', () => {
    const support = new TestComponentSupport<FavoriteToggleComponent>(FavoriteToggleComponent);
    support.component.active = true;
    support.detectChanges();
    expect(support.getClassNames('button')).toContain('active');
  });

  it('should not have the active class when not active', () => {
    const support = new TestComponentSupport<FavoriteToggleComponent>(FavoriteToggleComponent);
    support.component.active = false;
    support.detectChanges();
    expect(support.getClassNames('button')).not.toContain('active');
  });

});
