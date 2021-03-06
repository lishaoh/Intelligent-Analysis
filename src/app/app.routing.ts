import {RouterModule, Routes} from '@angular/router';
const ROUTES: Routes = [
  {path: '', loadChildren: 'app/module/index-operation/index-operation.module#IndexOperationModule'},
  {path: 'login', loadChildren: 'app/module/login/login.module#LoginModule'},
  {path: '**', redirectTo: 'login', pathMatch: 'full'}
];
export const ROOT_ROUTING = RouterModule.forRoot(ROUTES);
