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
    curBlock: com.unblock.proto.Block | null = null;
    isMovingPoint = false;
    curPoint: com.unblock.proto.Bounds.IPoint | null = null;
    curAttraction: com.unblock.proto.Attraction | null = null;

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
                });
        });
    }

    onNewBlock(block: com.unblock.proto.IBlock) {
        console.log(block);
        this.curBlock = null;
    }

    onEditClick() {
        this.router.navigate(['edit', this.currentId]);
    }

    onNewBlockClick() {
        this.curBlock = new com.unblock.proto.Block({
            bounds: new com.unblock.proto.Bounds({
                points: []
            })
        });
    }

    onNewAttractionClick() {
        this.curAttraction = new com.unblock.proto.Attraction();
    }

    onResetClick() {
        this.curBlock.bounds.points = [];
    }

    onCancelClick() {
        this.curBlock = null;
    }

    pointMouseDown(event: MouseEvent, point: com.unblock.proto.Bounds.IPoint) {
        if (this.curBlock) {
            this.isMovingPoint = true;
            this.curPoint = point;
        }
    }

    pointMouseUp(event: MouseEvent) {
        this.isMovingPoint = false;
        this.curPoint = null;
        this.curAttraction = null;
    }

    pointMouseMove(event: MouseEvent) {
        if (this.isMovingPoint && this.curPoint) {
            this.curPoint.x = event.offsetX;
            this.curPoint.y = event.offsetY;
        }

        if (this.isMovingPoint && this.curAttraction) {
            this.curAttraction.x = event.offsetX;
            this.curAttraction.y = event.offsetY;
        }
    }

    getNewPointsPolygon() {
        return this.convertToPointsPolygon(this.curBlock.bounds.points);
    }

    getBlockPointsPolygon(block: com.unblock.proto.Block) {
        return this.convertToPointsPolygon(block.bounds.points);
    }

    private convertToPointsPolygon(points: com.unblock.proto.Bounds.IPoint[]) {
        return points.map(point => `${point.x},${point.y}`).join(' ');
    }

    onBackgroundClick(event: MouseEvent) {
        if (this.curBlock) {
            console.log(event);
            this.curBlock.bounds.points.push(new com.unblock.proto.Bounds.Point({ x: event.offsetX, y: event.offsetY }));
        }

        if (this.curAttraction) {
            this.curAttraction.x = event.offsetX;
            this.curAttraction.y = event.offsetY;
        }
    }

    onBlockClick(block: com.unblock.proto.Block) {
        if (!this.curBlock) {
            this.curBlock = block;
        }
    }

    getNeighborhoodImageUrl() {
        if (this.neighborhood) {
            return `${this.unblockService.imageResourcePrefix}/${this.neighborhood.image}`;
        }

        return '';
    }
}
