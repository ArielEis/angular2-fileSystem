import { Component, OnInit } from '@angular/core';
import {FileSystemService} from '../file-system.service';

@Component({
  selector: 'app-prompt-window',
  templateUrl: './prompt-window.component.html',
  styleUrls: ['./prompt-window.component.scss']
})
export class PromptWindowComponent implements OnInit {

  title: string;
  instruction: string;

  constructor(private fs: FileSystemService) {
    this.title = 'Prompt window';
    this.instruction = 'Please choose a name:';
  }

  ngOnInit() {
  }

}
