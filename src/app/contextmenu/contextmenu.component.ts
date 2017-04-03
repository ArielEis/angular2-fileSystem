import { Component, OnInit } from '@angular/core';
import {FileSystemService} from '../file-system.service';

@Component({
  selector: 'app-contextmenu',
  templateUrl: './contextmenu.component.html',
  styleUrls: ['./contextmenu.component.scss'],
})
export class ContextmenuComponent implements OnInit {

  constructor(private fs:FileSystemService) {
      this.fs = fs;
  }

  ngOnInit() {
  }

  quit(){
    this.fs.closeMenu();
  }

}
