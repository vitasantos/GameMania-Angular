import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjudaComponent } from './views/ajuda/ajuda.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { PoliticaComponent } from './views/politica/politica.component';
import { ProdutosComponent } from './views/produtos/produtos.component';
import { TermosComponent } from './views/termos/termos.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "ajuda", component: AjudaComponent},
  { path: "produtos", component: ProdutosComponent},
  { path: "politica", component: PoliticaComponent},
  { path: "termos", component: TermosComponent},
  { path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
