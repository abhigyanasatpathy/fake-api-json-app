import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'dashboard' , 
    loadChildren: ()=> import ('./layout/dashboard/dashboard.module').then (m => m.DashboardModule)

  },
  { path:'user-info' , 
    loadChildren: ()=> import ('./layout/user-info/user-info.module').then (m => m.UserInfoModule)

  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: 'dashboard' } // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
