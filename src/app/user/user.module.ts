import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserComponent } from './user.login.component';
import { UserService } from './user.service';
import { routing } from './user.router';
import { SharedModule } from '../shared/shared.module';
@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, SharedModule, routing],
    declarations: [UserComponent],
    bootstrap: [UserComponent],
    providers: [UserService]
})
export class UserModule {}  