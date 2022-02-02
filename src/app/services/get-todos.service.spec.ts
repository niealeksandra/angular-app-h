import { TestBed } from '@angular/core/testing';

import { GetTodosService } from './get-todos.service';

describe('GetTodosService', () => {
  let service: GetTodosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTodosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
