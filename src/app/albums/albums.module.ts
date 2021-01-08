import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumsComponent } from './albums/albums.component';



@NgModule({
    declarations: [
        AlbumListComponent,
        AlbumsComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        AlbumsComponent,
        AlbumListComponent
    ]
})
export class AlbumsModule { }
