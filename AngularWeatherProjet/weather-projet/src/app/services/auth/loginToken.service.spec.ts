/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoginTokenService } from './loginToken.service';

describe('Service: LoginToken', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginTokenService]
    });
  });

  it('should ...', inject([LoginTokenService], (service: LoginTokenService) => {
    expect(service).toBeTruthy();
  }));
});
