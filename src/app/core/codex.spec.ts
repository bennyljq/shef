import { TestBed } from '@angular/core/testing';

import { Codex } from './codex';

describe('Codex', () => {
  let service: Codex;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Codex);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
