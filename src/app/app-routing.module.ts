import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddArticleComponent } from './add-article/add-article.component';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ShowOneArticleComponent } from './show-one-article/show-one-article.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
{path:'' , redirectTo:'login', pathMatch:'full'},
{path:'home',component:HomeComponent},
{path:'login' , component:LoginComponent},
{path:'add',component:AddArticleComponent},
{path:'articles',component:ArticlesComponent},
{path:'show',component:ShowOneArticleComponent},
{path:'update/:id',component:UpdateComponent},

{path:"**" , component:NotFoundComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
