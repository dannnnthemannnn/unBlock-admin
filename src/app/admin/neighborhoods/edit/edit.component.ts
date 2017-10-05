import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UnblockService } from '../../../api/unblock.service';

import { com } from '../../../protos/compiled.js'

@Component({
    templateUrl: './edit.component.html'
})
export class EditComponent {
    name = '';

    constructor(
        private unblockService: UnblockService,
        private router: Router
    ) { }
}
