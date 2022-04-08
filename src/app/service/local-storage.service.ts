import {Injectable} from '@angular/core';
import {element, error} from "protractor";

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {

    private static readonly STORAGE_KEY_ZIP_CODES = "ZIP_CODES";

    constructor() {}

    saveZip(zip: number): number[] {
        let zips = this.loadZips();
        zips.unshift(zip);
        LocalStorageService.saveZips(zips);
        return zips;
    }

    loadZips(): number[] {
        let zipsInJson = localStorage.getItem(LocalStorageService.STORAGE_KEY_ZIP_CODES);
        if (zipsInJson) {
            try {
                return JSON.parse(zipsInJson);
            } catch (e) {
                console.error('Error parsing zips from ' + zipsInJson, e);
            }
        } else {
            return [];
        }

    }

    static saveZips(savedZips: number[]) {
        try {
            localStorage.setItem(LocalStorageService.STORAGE_KEY_ZIP_CODES, JSON.stringify(savedZips));
        } catch (e) {
            console.error('Error saving' + savedZips + 'to local Stroage', e);
        }
    }

    deleteZipByIndex(index: number): number[] {
        let zips = this.loadZips();
        zips.splice(index, 1);

        LocalStorageService.saveZips(zips);
        return zips;
    }
}
