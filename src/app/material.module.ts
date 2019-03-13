import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatInputModule, 
  MatSelectModule,
  MatIconModule,
  MatGridListModule,
  MatBadgeModule,
  MatListModule,
  MatSidenavModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatSidenavModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule, 
    MatSelectModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatBadgeModule,
    MatSidenavModule
  ]
})

export class MaterialModule {}