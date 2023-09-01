import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdModule } from '../md/md.module';
import { MaterialModule } from '../../app.module';
import { UserProfileRoutes } from './userProfile.routing';
import { UserProfileComponent } from './userProfile.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(UserProfileRoutes),
        FormsModule,
        MdModule,
        MaterialModule,
        ReactiveFormsModule
    ],
    declarations: [
        UserProfileComponent
    ]
})

export class UserProfileModule {}
