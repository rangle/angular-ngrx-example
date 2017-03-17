import { Component, OnChanges } from '@angular/core';
import { TestComponentSupport } from './test-component-support.class';
import { TestBed, inject } from '@angular/core/testing';

let testComponentSupport;
let testComponentSupportSimple;

@Component({
  template: `<div
                app-attr="abc"
                style="color:blue;"
                class="class-one class-two"
                >
                  <span>test div</span>
            </div>`
})
class FakeComponent implements OnChanges {
  public ngOnChanges() {

  }
}

@Component({
  template: `<div>
            </div>`
})
class FakeSimpleComponent implements OnChanges {
  public ngOnChanges() {

  }
}

describe('test component support class', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        FakeComponent,
        FakeSimpleComponent
      ]
    });
  });
  beforeEach(() => {
    testComponentSupport = new TestComponentSupport(FakeComponent);
    testComponentSupportSimple = new TestComponentSupport(FakeSimpleComponent);
  });

  it('should create the fixture', () => {
    expect(testComponentSupport.fixture).toBeTruthy();
  });
  it('should create the component', () => {
    expect(testComponentSupport.component).toBeTruthy();
  });
  it('should create the debugElement', () => {
    expect(testComponentSupport.debugElement).toBeTruthy();
  });
  it('should call ngOnChanges on refresh', () => {
    spyOn(testComponentSupport.component, 'ngOnChanges');
    testComponentSupport.update();
    expect(testComponentSupport.component.ngOnChanges).toHaveBeenCalledTimes(1);
  });
  it('should call detectChanges on refresh', () => {
    spyOn(testComponentSupport.fixture, 'detectChanges');
    testComponentSupport.update();
    expect(testComponentSupport.fixture.detectChanges).toHaveBeenCalledTimes(1);
  });
  it('should return a promise when whenStable is called', () => {
    expect(testComponentSupport.whenStable().then).toBeTruthy();
  });
  it('should get element with query', () => {
    expect(testComponentSupport.querySelector('div').innerText).toContain('test div');
  });
  it('should get element with queryAll', () => {
    expect(testComponentSupport.querySelectorAll('div')[0].innerText).toContain('test div');
  });
  it('should get the attribute value', () => {
    expect(testComponentSupport.getAttributeValue('div', 'app-attr')).toEqual('abc');
  });
  it('should get the style', () => {
    expect(testComponentSupport.getStyle('div').color)
      .toEqual('blue');
  });
  describe('get class names', () => {
    it('should return the classes in an array', () => {
      expect(testComponentSupport.getClassNames('div')).toEqual(['class-one', 'class-two']);
    });
    it('should return an empty array when there are no classes', () => {
      expect(testComponentSupportSimple.getClassNames('div')) .toEqual([]);
    });
  });
  it('should return the innerHTML', () => {
    expect(testComponentSupport.getInnerHtml('div')).toEqual('<span>test div</span>');
  });

});

