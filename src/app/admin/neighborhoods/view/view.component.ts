import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UnblockService } from '../../../api/unblock.service';

import { com } from '../../../protos/compiled.js'

@Component({
    templateUrl: './view.component.html'
})
export class ViewComponent implements OnInit {
    currentId: string;
    neighborhood: com.unblock.proto.Neighborhood;
    imageHeight = 0;
    imageWidth = 0;
    newBlock = false;

    constructor(
        private unblockService: UnblockService,
        private router: Router,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.route.paramMap.subscribe(paramMap => {
            this.currentId = paramMap.get('id');

            this.unblockService.getNeighborhood(this.currentId)
                .subscribe(neighborhood => {
                    this.neighborhood = neighborhood;
                    console.log(neighborhood);

                    let img = new Image();
                    img.onload = () => {
                        this.imageHeight = img.height;
                        this.imageWidth = img.width;
                        console.log(img.width + 'x' + img.height);
                    };
                    img.src = this.getNeighborhoodImageUrl();
                })
        })

    }

    onEditClick() {
        this.router.navigate(['edit', this.currentId]);
    }

    onNewBlockClick() {
        this.newBlock = true;
    }

    onBackgroundClick(event: MouseEvent) {
        console.log(event);
    }

    getNeighborhoodImageUrl() {
        if (this.neighborhood) {
            return `${this.unblockService.imageResourcePrefix}/${this.neighborhood.image}`;
        }

        return '';
    }
}
