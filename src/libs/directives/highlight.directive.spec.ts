import {
  ComponentFixture,
  ComponentFixtureAutoDetect,
  TestBed,
} from '@angular/core/testing';
import { Component } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'app-test-container',
  template: `
    <div>
      <p id="yellow" appHighlight>yellow text</p>
      <p id="green" appHighlight color="green">green text</p>
      <p id="red" appHighlight color="red">red text</p>
      <p id="no">no color</p>
    </div>
  `,
})
class ContainerComponent {}

const mouseEvents = {
  get enter() {
    const mouseenter = document.createEvent('MouseEvent');
    mouseenter.initEvent('mouseenter', true, true);
    return mouseenter;
  },
  get leave() {
    const mouseleave = document.createEvent('MouseEvent');
    mouseleave.initEvent('mouseleave', true, true);
    return mouseleave;
  },
};

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<ContainerComponent>;
  let container: ContainerComponent;
  let element: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContainerComponent, HighlightDirective],
      providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }],
    });

    fixture = TestBed.createComponent(ContainerComponent);
    // fixture.detectChanges(); // without the provider
    container = fixture.componentInstance;
    element = fixture.nativeElement;
  });

  it('should set background-color to empty when mouse leaves with directive without arguments', () => {
    const targetElement = element.querySelector(
      '#yellow'
    ) as HTMLParagraphElement;

    targetElement.dispatchEvent(mouseEvents.leave);
    expect(targetElement.style.backgroundColor).toEqual('');
  });

  it('should set background-color to empty when mouse leaves with directive with arguments', () => {
    const targetElement = element.querySelector(
      '#green'
    ) as HTMLParagraphElement;

    targetElement.dispatchEvent(mouseEvents.leave);
    expect(targetElement.style.backgroundColor).toEqual('');
  });

  it('should set background-color yellow with no args passed', () => {
    const targetElement = element.querySelector(
      '#yellow'
    ) as HTMLParagraphElement;

    targetElement.dispatchEvent(mouseEvents.enter);
    expect(targetElement.style.backgroundColor).toEqual('yellow');
  });

  it('should set background-color green when passing green parameter', () => {
    const targetElement = element.querySelector(
      '#green'
    ) as HTMLParagraphElement;

    targetElement.dispatchEvent(mouseEvents.enter);
    expect(targetElement.style.backgroundColor).toEqual('green');
  });

  it('should set background-color red when passing green parameter', () => {
    const targetElement = element.querySelector('#red') as HTMLParagraphElement;

    targetElement.dispatchEvent(mouseEvents.enter);
    expect(targetElement.style.backgroundColor).toEqual('red');
  });
});
