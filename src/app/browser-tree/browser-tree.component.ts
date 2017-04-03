import { Component, OnInit } from '@angular/core';
import {FileSystemService} from '../file-system.service';

@Component({
  selector: 'app-browser-tree',
  templateUrl: './browser-tree.component.html',
  styleUrls: ['./browser-tree.component.scss']
})
export class BrowserTreeComponent implements OnInit {

  isFetching: boolean;

  constructor(private fs: FileSystemService) {
    this.isFetching = true;
    this.fs.getTree();
  }

  ngOnInit() {
    this.fs.emitter.subscribe(
      () => {
        this.isFetching = false;
      })
  }

}
