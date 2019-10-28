import { TestBed } from '@angular/core/testing';

import { CryptocurrencyManagementService } from './cryptocurrency-management.service';

describe('CryptocurrencyManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CryptocurrencyManagementService = TestBed.get(CryptocurrencyManagementService);
    expect(service).toBeTruthy();
  });
});
