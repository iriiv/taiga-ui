import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {
    TuiInputCardGroupedModule,
    TuiThumbnailCardComponent,
} from '@taiga-ui/addon-commerce';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiDataListModule,
    TuiErrorModule,
    TuiLabelModule,
    TuiLinkDirective,
    TuiSvgComponent,
} from '@taiga-ui/core';
import {TuiFieldErrorPipeModule} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {TuiInputCardGroupedExample1} from './examples/1';
import {TuiInputCardGroupedExample2} from './examples/2';
import {TuiInputCardGroupedExample3} from './examples/3';
import {TuiInputCardGroupedExample4} from './examples/4';
import {TuiInputCardGroupedExample5} from './examples/5';
import {ExampleTuiInputCardGroupedComponent} from './input-card-grouped.component';

@NgModule({
    imports: [
        TuiInputCardGroupedModule,
        TuiLinkDirective,
        TuiErrorModule,
        TuiFieldErrorPipeModule,
        TuiDataListModule,
        TuiThumbnailCardComponent,
        TuiLabelModule,
        TuiSvgComponent,
        CommonModule,
        ReactiveFormsModule,
        TuiAddonDocModule,
        InheritedDocumentationModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiInputCardGroupedComponent)),
        PolymorpheusModule,
    ],
    declarations: [
        ExampleTuiInputCardGroupedComponent,
        TuiInputCardGroupedExample1,
        TuiInputCardGroupedExample2,
        TuiInputCardGroupedExample3,
        TuiInputCardGroupedExample4,
        TuiInputCardGroupedExample5,
    ],
    exports: [ExampleTuiInputCardGroupedComponent],
})
export class ExampleTuiInputCardGroupedModule {}
