import { Component, OnInit } from '@angular/core';
import {FileSystemService} from '../file-system.service';

@Component({
  selector: 'app-alert-window',
  templateUrl: './alert-window.component.html',
  styleUrls: ['./alert-window.component.scss']
})
export class AlertWindowComponent implements OnInit {

  title: string;

  constructor(private fs: FileSystemService) {
    this.title = 'Alert';
  }

  ngOnInit() {
  }

  get message() {
    return this.fs.alertMessage;
  }

}
