import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ResourceService } from './resource.service';

describe('ResourceService', () => {
  let service: ResourceService<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ResourceService],
    });
    service = TestBed.inject(ResourceService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
