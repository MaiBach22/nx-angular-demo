import { TestBed } from '@angular/core/testing';
import { LandingPageComponent } from './landing-page.component';
import { RouterModule } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingPageComponent, RouterModule.forRoot([])],
    }).compileComponents();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(LandingPageComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Welcome landing-page'
    );
  });

  it(`should have as title 'landing-page'`, () => {
    const fixture = TestBed.createComponent(LandingPageComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('landing-page');
  });
});
