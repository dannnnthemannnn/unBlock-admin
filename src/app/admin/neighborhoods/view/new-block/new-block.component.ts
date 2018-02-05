import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { UnblockService } from '../../../../api/unblock.service';

import { com } from '../../../../protos/compiled.js'

@Component({
    selector: 'new-block',
    templateUrl: './new-block.component.html'
})
export class NewBlockComponent {
    error: string;
    name: string;

    @Input() neighborhoodId: string;
    @Input() block: com.unblock.proto.Block;

    @Output() blockCreated = new EventEmitter<com.unblock.proto.Block>();

    constructor(
        private unblockService: UnblockService) {
    }

    onSubmit() {
        if (this.block.id) {
            this.updateBlock();
        } else {
            this.createBlock();
        }
    }

    private updateBlock() {
        const response = this.unblockService.updateBlockBounds(new com.unblock.proto.UpdateBlockBoundsRequest({
            id: this.block.id,
            update: { bounds: this.block.bounds },
        }));
        this.handleCall(response);
    }

    private createBlock() {
        const response = this.unblockService.createBlock(new com.unblock.proto.CreateBlockRequest({
            neighborhoodId: this.neighborhoodId,
            info: {
                name: this.name,
                bounds: this.block.bounds
            },
        }));
        this.handleCall(response);
    }

    private handleCall(response: Observable<com.unblock.proto.Block>) {
        response.subscribe(
            block => {
                this.blockCreated.emit(block);
            },
            error => {
                console.log(error);
                this.error = error.message;
            });
    }
}
