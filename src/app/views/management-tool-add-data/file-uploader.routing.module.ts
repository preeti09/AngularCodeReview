import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { FileUploaderComponent } from './file-uploader.component';

const routes: Routes = [
  {
    path: '',
    component: FileUploaderComponent,
    data: {
      title: 'management-tool-add-data'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileUploaderRoutingModule {}
