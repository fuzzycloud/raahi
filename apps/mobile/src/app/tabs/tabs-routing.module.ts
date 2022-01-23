import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
     
      {
    path: 'home',
    loadChildren: () =>
      import('../home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'account',
    loadChildren: () => import('../account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'offers',
    loadChildren: () => import('../offers/offers.module').then( m => m.OffersPageModule)
  },
  {
    path: 'privacy',
    loadChildren: () =>
      import('../privacy/privacy.module').then((m) => m.PrivacyPageModule),
  },
  {
    path: 'news',
    loadChildren: () => import('../news/news.module').then( m => m.NewsPageModule)
  },

      // {
      //   path: 'tab2',
      //   loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      // },
      // {
      //   path: 'tab3',
      //   loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      // },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
