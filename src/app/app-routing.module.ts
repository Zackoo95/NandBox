import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { UpdateComponent } from './update/update.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/login' , pathMatch: 'full'},
    { path: 'signup' , component: SignupComponent },
    { path: 'update' , component: UpdateComponent },
    { path: 'list' , component: ListComponent },
    { path: 'detail' , component: DetailComponent },
    { path: 'login' , component: LoginComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}