import { TestBed } from '@angular/core/testing';

import { FilmComponent } from './film.component';

describe('Film Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [FilmComponent]});
  });

  it('should ...', () => {
    const fixture = TestBed.createComponent(FilmComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.children[0].textContent).toContain('About Works!');
  });

});
