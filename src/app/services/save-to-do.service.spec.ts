import { TestBed } from '@angular/core/testing';

import { SaveToDoService } from './save-to-do.service';

describe('SaveToDoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SaveToDoService = TestBed.get(SaveToDoService);
    expect(service).toBeTruthy();
  });
});
