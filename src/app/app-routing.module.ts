import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header/header.component';
import { ConvertComponent } from './convert/convert/convert.component';
import { ConvertToComponent } from './convertTo/convert-to/convert-to.component';

const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'convert', component: ConvertComponent },
  { path: 'convertTo', component: ConvertToComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
