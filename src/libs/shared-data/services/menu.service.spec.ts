import { TestBed } from '@angular/core/testing';

import { MenuService } from './menu.service';

describe('MenuService', () => {
  let service: MenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('It should return 2 element length long mock menu array data after loaded', () => {
    service.loadMenuItems();
    service.data.subscribe((res) => {
      expect(res.length).toEqual(2);
    });
  });

  it('It should return false after sending false value to collapse Observable', () => {
    service.collapseMenu(false);
    service.collapse.subscribe((res) => {
      expect(res).toBe(false);
    });
  });

  it('It should return true after sending true value to collapse Observable', () => {
    service.collapseMenu(true);
    service.collapse.subscribe((res) => {
      expect(res).toBe(true);
    });
  });
});
