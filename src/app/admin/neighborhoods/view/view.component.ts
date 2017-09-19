import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UnblockService } from '../../../api/unblock.service';

@Component({
    templateUrl: './view.component.html'
})
export class CreateComponent {

    constructor(
        private unblockService: UnblockService,
        private router: Router
    ) { }

    view() {
        this.unblockService.createNeighborhood(name)
            .subscribe(
            neighborhood => { console.log(neighborhood); },
            error => { console.log(error); }
            );
    }
}
