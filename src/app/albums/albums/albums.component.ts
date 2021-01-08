import { Component } from '@angular/core';
import { AlbumsService } from '../albums.service';

@Component({
    selector: 'gft-albums',
    templateUrl: './albums.component.html',
    styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent {

    public albums$ = this.albumsService.getAlbums();

    constructor(private readonly albumsService: AlbumsService) {}
}
