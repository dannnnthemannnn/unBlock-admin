import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UnblockService } from '../../../api/unblock.service';

import { com } from '../../../protos/compiled.js'

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
        this.unblockService.createNeighborhood(
            new com.unblock.proto.CreateNeighborhoodRequest({
                name: this.name
            }))
            .subscribe(
            neighborhood => {
            },
            error => { console.log(error); }
            );
    }
}
