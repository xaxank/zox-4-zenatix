import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  MatButtonModule, MatIconModule, MatCardModule, MatChipsModule } from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatChipsModule,
    ],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatChipsModule,
    ]
})

export class MaterialModule { }