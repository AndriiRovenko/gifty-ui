import { Component, Input } from '@angular/core';

import { Album } from '../album.model';

@Component({
    selector: 'gft-album-list',
    templateUrl: './album-list.component.html',
    styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent {
    @Input() albums: Album[] | null = [];
    @Input() isDark: boolean = false;

    constructor() {}

}
