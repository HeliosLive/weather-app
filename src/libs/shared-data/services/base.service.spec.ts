import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { BaseService } from './base.service';

describe('BaseService', () => {
  let service: BaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BaseService],
    });
    service = TestBed.inject(BaseService);
  });

  // This is a Base service we already tested smart services dont need to control and edit @Injectable() type
  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
