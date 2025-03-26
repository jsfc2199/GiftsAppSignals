import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./gifts/pages/dashboard-page/dashboard-page.component').then(c => c.DashboardPageComponent),
    children: [
      {
        path: 'trending',
        loadComponent: () => import('./gifts/pages/trending-page/trending-page.component').then(c => c.TrendingPageComponent)
      },
      {
        path: 'search',
        loadComponent: () => import('./gifts/pages/search-page/search-page.component').then(c => c.SearchPageComponent)
      },
      {
        path: '**',
        redirectTo: 'trending'
      }
    ]
  },

  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
