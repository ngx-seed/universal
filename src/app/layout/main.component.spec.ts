// angular
import { CUSTOM_ELEMENTS_SCHEMA, ElementRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

// libs
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { configureTestSuite } from 'ng-bullet';

// framework
import { CoreTestingModule } from '~/app/framework/core/testing';
import { I18NTestingModule } from '~/app/framework/i18n/testing';
import { NgrxTestingModule } from '~/app/framework/ngrx/testing';
import { t } from '~/app/framework/testing';

// module
import { MainComponent } from './main.component';

configureTestSuite(() => {
  TestBed.configureTestingModule({
    imports: [
      RouterTestingModule,
      PerfectScrollbarModule,
      CoreTestingModule,
      I18NTestingModule,
      NgrxTestingModule
    ],
    declarations: [MainComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  });
});

t.describe('ng-seed/universal', () => {
  t.describe('layout: MainComponent', () => {
    t.it('should build without a problem', () => {
      const fixture = TestBed.createComponent(MainComponent);
      const instance = fixture.componentInstance;

      fixture.detectChanges();

      t.e(instance)
        .toBeTruthy();
    });

    t.it('should invoke `onActivate`', () => {
      const fixture = TestBed.createComponent(MainComponent);
      const instance = fixture.componentInstance;

      fixture.detectChanges();

      const scrollContainer = TestBed.get(ElementRef);
      instance.onActivate(undefined, scrollContainer);

      t.e(instance)
        .toBeTruthy();
    });
  });
});
