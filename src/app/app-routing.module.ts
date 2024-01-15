import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentDComponent } from './component-d/component-d.component';
import { ComponentFComponent } from './component-f/component-f.component';

const routes: Routes = [
  { path: 'component1', component: ComponentDComponent },
  { path: 'component2', component: ComponentFComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
