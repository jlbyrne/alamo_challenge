import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './list/list.component';
import { FilmComponent } from './film/film.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'about', component: FilmComponent}
];

export const routing = RouterModule.forRoot(routes);
