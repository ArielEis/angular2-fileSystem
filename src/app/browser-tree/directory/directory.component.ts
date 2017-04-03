import {Component, OnInit, Input} from '@angular/core';
import {Http} from '@angular/http';
import {FileSystemService} from '../../file-system.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})

export class DirectoryComponent implements OnInit {

  @Input() title: string;
  @Input() id: string;
  @Input() items: Object[];
  isOpen: boolean;

  constructor(private http: Http, private fs: FileSystemService) {
    this.isOpen = false;
  }

  ngOnInit() {
    this.http.get(this.fs.GET_TREE_URL+this.fs.USER+'/'+this.id).subscribe(data => {
        let response = JSON.parse(data.text());
        if (response.success){
          this.items = response.item.children;
        }
    })
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  get pic() {
    return this.isOpen? "open-dir":"close-dir";
  }
}
