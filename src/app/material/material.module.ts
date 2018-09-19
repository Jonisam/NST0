import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatDividerModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatTabsModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule
  ],
  })
export class MaterialModule { }
