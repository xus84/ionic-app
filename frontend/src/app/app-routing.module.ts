import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'posts',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./posts/posts.module').then((m) => m.PostsPageModule),
      },
      {
        path: ':postId',
        loadChildren: () =>
          import('./posts/post-detail/post-detail.module').then(
            (m) => m.PostDetailPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
