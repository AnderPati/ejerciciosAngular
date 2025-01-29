import { TestBed } from '@angular/core/testing';

import { ServicioRescountriesService } from './servicio-rescountries.service';

describe('ServicioRescountriesService', () => {
  let service: ServicioRescountriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioRescountriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
