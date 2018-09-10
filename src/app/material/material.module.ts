import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatDividerModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ],
  })
export class MaterialModule { }
