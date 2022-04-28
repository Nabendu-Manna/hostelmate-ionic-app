import { TestBed } from '@angular/core/testing';

import { RoomPostService } from './room-post.service';

describe('RoomPostService', () => {
  let service: RoomPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
