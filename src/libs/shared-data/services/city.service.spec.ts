import { TestBed } from '@angular/core/testing';

import { CityService } from './city.service';

describe('CityService', () => {
  let service: CityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('It should return 5 element length long mock cities array data after loaded', () => {
    service.loadCities();
    service.data.subscribe((res) => {
      expect(res.length).toEqual(5);
    });
  });

  it('It should return true after adding a new city into mock cities array', () => {
    service.loadCities();
    const result = service.addCity({ name: 'Prag' });
    expect(result).toBe(true);
  });

  it('It should return false after adding existing city into mock cities array', () => {
    service.loadCities();
    const result = service.addCity({ name: 'Istanbul' });
    expect(result).toBe(false);
  });
});
