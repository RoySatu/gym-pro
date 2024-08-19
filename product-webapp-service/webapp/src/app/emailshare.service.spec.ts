import { TestBed } from '@angular/core/testing';

import { EmailshareService } from './emailshare.service';

describe('EmailshareService', () => {
  let service: EmailshareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailshareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
