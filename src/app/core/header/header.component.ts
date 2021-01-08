import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

import { faUser, faCircle } from '@fortawesome/free-solid-svg-icons';

import { AlbumsService } from 'src/app/albums/albums.service';


@Component({
    selector: 'gft-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public search = new FormControl('');
    public albums$ = this.albumsService.getInitialSearchAlbums();

    public faUser = faUser;
    public faCircle = faCircle;

    constructor(private readonly albumsService: AlbumsService) { }

    ngOnInit(): void {
        this.search.valueChanges
        .pipe(
            debounceTime(500)
        )
        .subscribe((searchExp: string) => {
            this.albums$ = this.albumsService.searchAlbum(searchExp);
        });
    }

    public onFocus(): void {
        console.log('focus');
    }

    public onBlur(): void {
        console.log('blur');
    }

}
