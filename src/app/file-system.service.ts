import {Injectable, EventEmitter} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class FileSystemService {

  isContextMenu: boolean;
  isPrompt: boolean;
  isContentOpen: boolean;
  contentId: string;
  GET_TREE_URL: string;
  CREATE_ITEM_URL: string;
  DELETE_ITEM_URL: string;
  UPDATE_ITEM_URL: string;
  tree: any;
  emitter = new EventEmitter();
  USER: string;
  targetId: string;
  callback: Function;
  alertMessage: string;

  constructor(private http: Http) {
    this.isContextMenu = false;
    this.isPrompt = false;
    this.isContentOpen = false;
    this.contentId = '';
    this.USER ='Ariel';
    this.GET_TREE_URL = 'http://hosting.webis.co.il:8085/api/items/get/';
    this.CREATE_ITEM_URL = 'http://hosting.webis.co.il:8085/api/items/create';
    this.DELETE_ITEM_URL = 'http://hosting.webis.co.il:8085/api/items/delete/';
    this.UPDATE_ITEM_URL = 'http://hosting.webis.co.il:8085/api/items/update/';
    this.targetId = '';
    this.alertMessage = '';
  }

  openContextMenu(left, top){
    let menu = document.getElementById('menu');
    this.isContextMenu = true;
    menu.style.display = 'block';
    menu.style.left = (left + 10)+'px';
    menu.style.top = (top + 10)+'px';
  }

  openPrompt(callback: Function) {
    this.closeMenu();
    this.callback = callback;
    let prompt = document.getElementById('prompt');
    this.isPrompt = true;
    prompt.style.display = 'block';
  }

  closePrompt() {
    let prompt = document.getElementById('prompt');
    this.isPrompt = false;
    prompt.style.display = 'none';
  }

  closeMenu(){
    let menu = document.getElementById('menu');
    this.isContextMenu = false;
    menu.style.display = 'none';
  }

  showAlert() {
    let alert = document.getElementById('alert-window');
    this.isPrompt = true;
    alert.style.display = 'block';
  }

  closeAlert() {
    let alert = document.getElementById('alert-window');
    this.isContextMenu = false;
    alert.style.display = 'none';
  }

  getTree() {
    this.http.get(this.GET_TREE_URL+this.USER).subscribe(data => {
        let response = JSON.parse(data.text());
        if (response.success) {
          this.tree = response.item;
          this.emitter.emit('got tree');
        }
    })
  }

  createFolder(name: string, input) {
    this.closePrompt();
    input.value = '';
    if (name === '') {return;}
    this.http.post(this.CREATE_ITEM_URL, {
      parentId: this.targetId,
      type: 'folder',
      name: name,
      owner: this.USER,
    }).subscribe(data => {
        let response = JSON.parse(data.text());
        if (response.success) {
          this.getTree();
        } else {
          this.alertMessage = response.message;
          this.showAlert();
        }
    })
  }

  createFile(name: string, input) {
    this.closePrompt();
    input.value = '';
    if (name === '') {return;}
    this.http.post(this.CREATE_ITEM_URL, {
      parentId: this.targetId,
      type: 'file',
      name: name,
      owner: this.USER,
    }).subscribe(data => {
      let response = JSON.parse(data.text());
      if (response.success) {
        this.getTree();
      } else {
        this.alertMessage = response.message;
        this.showAlert();
      }
    })
  }

  setTargetId(id) {
    this.targetId = id;
  }

  deleteItem() {
    this.closeMenu();
    this.http.get(this.DELETE_ITEM_URL+this.targetId).subscribe(data => {
      let response = JSON.parse(data.text());
      if (response.success) {
        this.getTree();
      } else {
        this.alertMessage = response.message;
        this.showAlert();
      }
    })
  }

  renameItem(name: string, input) {
    this.closePrompt();
    input.value = '';
    if (name === '') {return;}
    this.http.get(this.GET_TREE_URL+this.USER+'/'+this.targetId).subscribe(data => {
      let response = JSON.parse(data.text());
      if (response.success){
        let details = response.item;
        this.http.post(this.UPDATE_ITEM_URL+this.targetId, {
          children: details.children,
          _id: details._id,
          name: name,
          owner: details.owner,
          __v: details.__v+1,
        }).subscribe(data => {
          this.getTree();
        })
      }  else {
        this.alertMessage = response.message;
        this.showAlert();
      }
    })
  }

  toggleContent(id: string) {
    if (this.contentId === id && this.isContentOpen){
      this.isContentOpen = !this.isContentOpen;
      return;
    }

    this.contentId = id;
    this.isContentOpen = true;
    this.emitter.emit('draw content');
  }

}
