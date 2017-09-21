import { Component, Input } from '@angular/core';
import { Router, ParamMap } from '@angular/router';

import { UnblockService } from '../../../api/unblock.service';

import { com } from '../../../protos/compiled.js'

@Component({
    selector: 'view-neighborhood',
    templateUrl: './view.component.html'
})
export class ViewComponent {
    @Input() selectedNeighborhood: com.unblock.proto.Neighborhood;

    constructor(
        private unblockService: UnblockService
    ) {

    }

    view() { }
}
