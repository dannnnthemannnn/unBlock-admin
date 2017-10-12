import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UnblockService } from '../../../../api/unblock.service';

import { com } from '../../../../protos/compiled.js'

@Component({
    selector: 'new-block',
    templateUrl: './new-block.component.html'
})
export class NewBlockComponent {
    name: string;

    @Input() points: com.unblock.proto.Block.Bounds.Point[];

    constructor(
        private unblockService: UnblockService) {
    }

    onSubmit() {

    }
}
