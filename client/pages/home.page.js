import { Component } from "@angular/core"

// angular decleration. All angular is upposed to be in typescript so this may not work
@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})

export class HomePage {
    scanActive = false;
    scanResult = null;

    constructor() {}

    startScan() {}
    stopScan() {
        this.scanActive = false;
    }
    reset() {
        this.scanResult = null;
    }
}