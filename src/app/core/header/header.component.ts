import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

import { faUser, faCircle } from '@fortawesome/free-solid-svg-icons';

import { AppService } from 'src/app/app.service';

@Component({
    selector: 'gft-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public search = new FormControl('');
    public albums$ = this.appService.getInitialSearchAlbums();

    public faUser = faUser;
    public faCircle = faCircle;

    constructor(private readonly appService: AppService) { }

    ngOnInit(): void {
        this.search.valueChanges
        .pipe(
            debounceTime(500)
        )
        .subscribe((searchExp: string) => {
            this.albums$ = this.appService.searchAlbum(searchExp);
        });
    }

    public onFocus(): void {
        console.log('focus');
    }

    public onBlur(): void {
        console.log('blur');
    }

}
