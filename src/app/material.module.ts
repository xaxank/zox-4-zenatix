import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule, MatButtonModule, MatIconModule, MatCardModule, MatGridListModule } from '@angular/material';


@NgModule({
    imports: [
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatGridListModule
    ],
    exports: [
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatGridListModule
    ]
})

export class MaterialModule { }