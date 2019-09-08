import { TestBed } from '@angular/core/testing';

import { YossiService } from './yossi.service';

describe('YossiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YossiService = TestBed.get(YossiService);
    expect(service).toBeTruthy();
  });
});
