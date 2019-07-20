import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './index.component';
@NgModule({
  declarations: [IndexComponent],
  imports: [RouterModule.forChild([{ path: '', component: IndexComponent }])]
})
export class IndexModule {}
