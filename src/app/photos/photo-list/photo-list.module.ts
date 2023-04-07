import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhotoListComponent } from './photo-list.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { FilterByDescriptionPipe } from './filter-by-description.pipe';
import { PhotosComponent } from './photos/photos.component';
import { PhotoModule } from '../photo/photo.module';
import { SearchComponent } from './search/search/search.component';
import { CardModule } from 'src/app/shared/components/card/card.module';

@NgModule({
  declarations: [
    PhotoListComponent,
    PhotosComponent,
    LoadButtonComponent,
    FilterByDescriptionPipe,
    SearchComponent
  ],
  imports: [CommonModule, PhotoModule, CardModule],
})
export class PhotoListModule {}
