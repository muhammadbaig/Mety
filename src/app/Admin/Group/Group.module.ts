import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdModule } from '../md/md.module';
import { MaterialModule } from '../../app.module';
import { GroupComponent } from './Group.component';
import { GroupRoutes } from './Group.routing';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(GroupRoutes),
        FormsModule,
        MdModule,
        MaterialModule,
        ReactiveFormsModule
    ],
    declarations: [
        GroupComponent
    ]
})

export class GroupModule {}
