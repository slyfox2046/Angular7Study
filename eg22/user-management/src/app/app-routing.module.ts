/*
 * @Author: Admin
 * @Date: 2020-01-09 17:04:05
 * @FilePath: \Angular7Study\eg12\user-management\src\app\app-routing.module.ts
 * @Description: file content
 */
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { UsersComponent } from "./users/users.component";
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/dashboard",
    pathMatch: "full"
  },
  {
    path: "users",
    component: UsersComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "detail/:id",
    component: UserDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
