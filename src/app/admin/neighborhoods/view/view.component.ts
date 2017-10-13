import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UnblockService } from '../../../api/unblock.service';

import { com } from '../../../protos/compiled.js';

@Component({
    templateUrl: './view.component.html'
})
export class ViewComponent implements OnInit {
    currentId: string;
    neighborhood: com.unblock.proto.Neighborhood;
    imageHeight = 0;
    imageWidth = 0;
    newBlock = false;
    newPoints: com.unblock.proto.Block.Bounds.Point[] = [];
    isMovingPoint = false;

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

    onResetClick() {
        if (this.newBlock) {
            this.newPoints = [];
        }
    }

    pointMouseDown(event: MouseEvent) {
        this.isMovingPoint = true;
    }

    pointMouseUp(event: MouseEvent) {
        this.isMovingPoint = false;
    }

    pointMouseMove(event: MouseEvent, point: com.unblock.proto.Block.Bounds.Point) {
        if (this.isMovingPoint) {
            point.x = event.offsetX;
            point.y = event.offsetY;
        }
    }

    getNewPointsPolygon() {
        return this.newPoints.map(point => `${point.x},${point.y}`).join(' ');
    }

    onBackgroundClick(event: MouseEvent) {
        if (this.newBlock) {
            console.log(event);
            this.newPoints.push(new com.unblock.proto.Block.Bounds.Point({ x: event.offsetX, y: event.offsetY }));
        }
    }

    getNeighborhoodImageUrl() {
        if (this.neighborhood) {
            return `${this.unblockService.imageResourcePrefix}/${this.neighborhood.image}`;
        }

        return '';
    }
}
