import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { BrowserTreeComponent } from './browser-tree/browser-tree.component';
import { ContentComponent } from './content/content.component';
import { HistoryComponent } from './topbar/history/history.component';
import { PathComponent } from './topbar/path/path.component';
import { DirectoryComponent } from './browser-tree/directory/directory.component';
import { FolderComponent } from './content/folder/folder.component';
import { FileComponent } from './content/file/file.component';
import { ContextMenuDirective } from './context-menu.directive';
import { ContextmenuComponent } from './contextmenu/contextmenu.component';
import {FileSystemService} from './file-system.service';
import { PromptWindowComponent } from './prompt-window/prompt-window.component';
import { AlertWindowComponent } from './alert-window/alert-window.component';
import { AutoFocusDirective } from './auto-focus.directive';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    BrowserTreeComponent,
    ContentComponent,
    HistoryComponent,
    PathComponent,
    DirectoryComponent,
    FolderComponent,
    FileComponent,
    ContextMenuDirective,
    ContextmenuComponent,
    PromptWindowComponent,
    AlertWindowComponent,
    AutoFocusDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FileSystemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
