import { VoterComponent } from './voter.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';

describe('VoterComponent', () => {

  beforeEach(() => {
    let component: VoterComponent;
    let fixture: ComponentFixture<VoterComponent>;

    // DYNAMIC MODULE..
    TestBed.configureTestingModule({
       declarations: [ VoterComponent ]
    });

    // TO CREATE AN INSTANCE OF THIS COMPONENT
    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;
    // fixture.nativeElement
    // fixture.debugElement
  });

  it('', () => {
  });
});
