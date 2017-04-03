import {Component, OnInit, Input} from '@angular/core';
import {Http} from '@angular/http';
import {FileSystemService} from '../../file-system.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})

export class FileComponent implements OnInit {

  @Input() title: string;
  @Input() id: string;
  content: string;

  constructor(private http: Http, private fs: FileSystemService) {}

  ngOnInit() {
    this.http.get(this.fs.GET_TREE_URL+this.fs.USER+'/'+this.id).subscribe(data => {
      let response = JSON.parse(data.text());
      if (response.success){
        this.content = response.item.content;
      }
    })
  }

}
