import { TestBed } from '@angular/core/testing';

import { OutsoureTransactionGroupService } from './outsoure-transaction-group.service';

describe('OutsoureTransactionGroupService', () => {
  let service: OutsoureTransactionGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OutsoureTransactionGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
