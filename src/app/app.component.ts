import { AppService } from './app.service';
import { Component } from '@angular/core';

@Component({
    selector: 'gft-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public albums$ = this.appService.getAlbums();

    constructor(private readonly appService: AppService) { }

}
