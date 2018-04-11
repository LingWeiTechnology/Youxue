/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { JhiEventManager } from 'ng-jhipster';

import { BackendTestModule } from '../../../test.module';
import { TuanMemberMySuffixDeleteDialogComponent } from '../../../../../../main/webapp/app/entities/tuan-member-my-suffix/tuan-member-my-suffix-delete-dialog.component';
import { TuanMemberMySuffixService } from '../../../../../../main/webapp/app/entities/tuan-member-my-suffix/tuan-member-my-suffix.service';

describe('Component Tests', () => {

    describe('TuanMemberMySuffix Management Delete Component', () => {
        let comp: TuanMemberMySuffixDeleteDialogComponent;
        let fixture: ComponentFixture<TuanMemberMySuffixDeleteDialogComponent>;
        let service: TuanMemberMySuffixService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [BackendTestModule],
                declarations: [TuanMemberMySuffixDeleteDialogComponent],
                providers: [
                    TuanMemberMySuffixService
                ]
            })
            .overrideTemplate(TuanMemberMySuffixDeleteDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(TuanMemberMySuffixDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(TuanMemberMySuffixService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        spyOn(service, 'delete').and.returnValue(Observable.of({}));

                        // WHEN
                        comp.confirmDelete(123);
                        tick();

                        // THEN
                        expect(service.delete).toHaveBeenCalledWith(123);
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
