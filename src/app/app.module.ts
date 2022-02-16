import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { AjudaComponent } from './views/ajuda/ajuda.component';
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProdutosComponent } from './views/produtos/produtos.component';
import { PoliticaComponent } from './views/politica/politica.component';
import { TermosComponent } from './views/termos/termos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AjudaComponent,
    HeaderComponent,
    FooterComponent,
    ProdutosComponent,
    PoliticaComponent,
    TermosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
