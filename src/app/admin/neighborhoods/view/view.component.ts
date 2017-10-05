import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UnblockService } from '../../../api/unblock.service';

import { com } from '../../../protos/compiled.js'

@Component({
    templateUrl: './view.component.html'
})
export class ViewComponent implements OnInit {
    private currentId;

    constructor(
        private unblockService: UnblockService,
        private router: Router,
        private route: ActivatedRoute
    ) {
        console.log('constructor:');
    }

    ngOnInit() {
        this.route.paramMap.subscribe(paramMap => {
            this.currentId = paramMap.get('id');
        })
    }

    onEditClick() {
        this.router.navigate(['edit', this.currentId]);
    }
}
