import { Component, OnInit } from '@angular/core';
import {FileSystemService} from '../file-system.service';
import {Http} from '@angular/http';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  folders;
  files;

  constructor(private fs: FileSystemService, private http: Http) {
    this.folders = [];
    this.files = [];
  }

  ngOnInit() {
    this.fs.emitter.subscribe(data => {
      this.folders = [];
      this.files = [];
      this.http.get(this.fs.GET_TREE_URL + this.fs.USER + '/' + this.fs.contentId).subscribe(data => {
        let response = JSON.parse(data.text());
        if (response.success) {
          this.seperateFiles(response.item.children);
        }
      })
    })
  }

  seperateFiles(items: any[]) {
    for (let i = 0; i < items.length; i++) {
      if (items[i].children) {
          this.folders.push(items[i]);
      } else {
          this.files.push(items[i]);
      }
    }
  }

}
