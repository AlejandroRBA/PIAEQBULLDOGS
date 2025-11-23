import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Details } from './details/details';
import { Admin } from './admin/admin';
import { UserList } from './admin/user-list/user-list';
import { ProductList } from './admin/product-list/product-list';
import { Etapa4 } from '../etapa4/etapa4';

const routes: Routes = [
  {
    path: '',
    component: Etapa4,
    children: [
      { path: '', component: Home },
      { path: 'details/:id', component: Details },
      {
        path: 'admin',
        component: Admin,
        children: [
          { path: 'users', component: UserList },
          { path: 'products', component: ProductList }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Etapa4RoutingModule {}
