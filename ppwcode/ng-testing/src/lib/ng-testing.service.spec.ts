import { TestBed } from '@angular/core/testing';

import { NgTestingService } from './ng-testing.service';

describe('NgTestingService', () => {
    let service: NgTestingService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(NgTestingService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
