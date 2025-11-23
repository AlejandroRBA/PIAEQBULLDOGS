import { Home } from './home/home';
import { Details } from './details/details';
import { Admin } from './admin/admin';
import { UserList } from './admin/user-list/user-list';
import { ProductList } from './admin/product-list/product-list';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Etapa4RoutingModule } from './etapa4-routing.module';
import { RouterModule } from '@angular/router';
import { Etapa4 } from '../etapa4/etapa4';


@NgModule({
  declarations: [
    Home,
    Details,
    Admin,
    UserList,
    ProductList
  ],
  imports: [
    CommonModule,
    Etapa4RoutingModule,
    RouterModule,
    Etapa4
  ]
})
export class Etapa4Module {}
