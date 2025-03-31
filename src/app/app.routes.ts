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
        path: 'history/:query', //dinámico
        loadComponent: () => import('./gifts/pages/gift-history--page/Gift-history.component').then(c => c.GiftHistoryComponent)
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
