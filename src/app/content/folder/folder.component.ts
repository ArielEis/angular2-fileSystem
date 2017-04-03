import {Component, OnInit, Input} from '@angular/core';
import {Http} from '@angular/http';
import {FileSystemService} from '../../file-system.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})

export class FolderComponent implements OnInit {

  @Input() title: string;
  @Input() id: string;
  @Input() items: Object[];

  constructor(private http: Http, private fs: FileSystemService) {}

  ngOnInit() {
    this.http.get(this.fs.GET_TREE_URL+this.fs.USER+'/'+this.id).subscribe(data => {
      let response = JSON.parse(data.text());
      if (response.success){
        this.items = response.item.children;
      }
    })
  }

}
