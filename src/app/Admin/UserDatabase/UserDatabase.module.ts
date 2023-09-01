import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdModule } from '../md/md.module';
import { MaterialModule } from '../../app.module';
import { UserDatabaseComponent } from './UserDatabase.component';
import { UserDatabaseRoutes } from './UserDatabase.routing';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(UserDatabaseRoutes),
        FormsModule,
        MdModule,
        MaterialModule,
        ReactiveFormsModule
    ],
    declarations: [
        UserDatabaseComponent
    ]
})

export class UserDatabaseModule {}
