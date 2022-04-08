import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MarjoryeComponent } from './marjorye/marjorye.component';
import { MarjoryeListaComponent } from './marjorye-lista/marjorye-lista.component';
import { RouterModule } from '@angular/router';
import { MarjoryeDisciplinaService } from './marjorye-disciplina.service';
import { MarjoryeDetalhesComponent } from './marjorye-detalhes/marjorye-detalhes.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: MarjoryeComponent },
      { path: 'disciplinas', component: MarjoryeListaComponent },
      { path: 'disciplinas/:index', component: MarjoryeDetalhesComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    MarjoryeComponent,
    MarjoryeListaComponent,
  ],
  bootstrap: [AppComponent],
  providers: [MarjoryeDisciplinaService],
})
export class AppModule {}
