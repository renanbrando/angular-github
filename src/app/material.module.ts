import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatInputModule, 
  MatSelectModule,
  MatIconModule
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
    MatIconModule
  ]
})

export class MaterialModule {}