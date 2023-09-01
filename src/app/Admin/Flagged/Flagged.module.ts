import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdModule } from '../md/md.module';
import { MaterialModule } from '../../app.module';
import { FlaggedComponent } from './Flagged.component';
import { FlaggedRoutes } from './Flagged.routing';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(FlaggedRoutes),
        FormsModule,
        MdModule,
        MaterialModule,
        ReactiveFormsModule
    ],
    declarations: [
        FlaggedComponent
    ]
})

export class FlaggedModule {}
