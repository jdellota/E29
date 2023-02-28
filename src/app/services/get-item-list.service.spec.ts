import { TestBed } from '@angular/core/testing';

import { GetItemListService } from './get-item-list.service';

describe('GetItemListService', () => {
  let service: GetItemListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetItemListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
