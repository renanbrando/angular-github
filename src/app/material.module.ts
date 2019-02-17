import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatInputModule, 
  MatSelectModule,
  MatIconModule,
  MatGridListModule,
  MatBadgeModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule
  ],
  exports: [
   MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule, 
    MatSelectModule,
    MatIconModule,
    MatGridListModule,
    MatBadgeModule
  ]
})

export class MaterialModule {}