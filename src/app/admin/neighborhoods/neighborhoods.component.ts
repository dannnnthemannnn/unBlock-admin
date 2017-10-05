import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UnblockService } from '../../api/unblock.service';

import { com } from '../../protos/compiled';

@Component({
    templateUrl: './neighborhoods.component.html'
})
export class NeighborhoodsComponent {

    loading = true;
    neighborhoods: com.unblock.proto.INeighborhood[];

    constructor(
        private unblockService: UnblockService,
        private router: Router
    ) {
        unblockService.listNeighborhoods()
            .subscribe(
            data => {
                this.loading = false;
                this.neighborhoods = data.neighborhoods;
            },
            error => {
                console.log(error);
                this.loading = false;
            });
    }

    onCreateClick() {
        this.router.navigate(['create']);
    }

    onOptionSelected(newValue) {
        console.log(newValue);
        this.router.navigate([newValue]);
    }
}
