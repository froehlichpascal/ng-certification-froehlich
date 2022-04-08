import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from "../../service/local-storage.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    zips: number[] = [];

    constructor(private localStorageService: LocalStorageService) {
    }

    ngOnInit(): void {
        this.zips = this.localStorageService.loadZips();
    }

    addZip(zip: number) {
        this.zips = this.localStorageService.saveZip(zip);
    }

    removeZip(index: number){
        this.zips = this.localStorageService.deleteZipByIndex(index);
    }



}
