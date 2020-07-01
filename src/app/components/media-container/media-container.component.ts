import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MediaListItem } from '../../models';
import { Store, select } from '@ngrx/store';
import { AppState, selectMediaListItemModel } from '../../reducers';

@Component({
  selector: 'app-media-container',
  templateUrl: './media-container.component.html',
  styleUrls: ['./media-container.component.css']
})
export class MediaContainerComponent implements OnInit {

  listModel$: Observable<MediaListItem[]>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.listModel$ = this.store.pipe(
      select(selectMediaListItemModel)
    );

  }

}
