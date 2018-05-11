import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule, MatButtonModule, MatIconModule, MatCardModule, MatGridListModule, MatChipsModule, MatListModule, MatTabsModule } from '@angular/material';

@NgModule({
    imports: [
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatGridListModule,
        MatChipsModule,
        MatListModule,
        MatTabsModule
    ],
    exports: [
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatGridListModule,
        MatChipsModule,
        MatListModule,
        MatTabsModule
    ]
})

export class MaterialModule { }