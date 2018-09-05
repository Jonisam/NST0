import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatCardModule, MatDividerModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatCardModule, MatDividerModule],
  exports: [MatButtonModule, MatToolbarModule, MatCardModule, MatDividerModule],
})
export class MaterialModule { }
