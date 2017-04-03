import {Directive, HostListener, ElementRef} from '@angular/core';
import {FileSystemService} from './file-system.service';

@Directive({
  selector: '[appContextMenu]'
})
export class ContextMenuDirective {

  constructor(private fs:FileSystemService, private el: ElementRef) {
    this.fs = fs;
    this.el = el;
  }

    @HostListener('contextmenu', ['$event']) onContextMenu(event: MouseEvent){
    this.fs.setTargetId(this.el.nativeElement.id);
    this.fs.openContextMenu(event.clientX, event.clientY);
    return false;
  }
}
