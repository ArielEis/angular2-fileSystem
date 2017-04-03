import {Directive, OnInit, ElementRef, Renderer} from '@angular/core';

@Directive({
  selector: '[myAutofocus]'
})
export class AutoFocusDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.renderer.invokeElementMethod(this.el.nativeElement, 'focus', []);
  }
}
