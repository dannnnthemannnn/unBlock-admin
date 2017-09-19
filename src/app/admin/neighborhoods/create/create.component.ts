import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UnblockService } from '../../../api/unblock.service';

@Component({
    templateUrl: './create.component.html'
})
export class CreateComponent {
    name = '';

    constructor(
        private unblockService: UnblockService,
        private router: Router
    ) { }

    create() {
        this.unblockService.createNeighborhood(name)
            .subscribe(
            neighborhood => { console.log(neighborhood); },
            error => { console.log(error); }
            );
    }
}
