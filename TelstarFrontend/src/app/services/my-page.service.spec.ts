import { TestBed } from '@angular/core/testing';

import { MyPageService } from './my-page.service';

describe('MyPageServiceService', () => {
  let service: MyPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
