import {TestBed} from '@angular/core/testing';
import {ResolveFn} from '@angular/router';

import {randomRegionResolver} from './random-region-resolver';

describe('randomRegionResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() => randomRegionResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
