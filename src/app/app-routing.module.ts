import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  {
    path: 'login', loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  
  {
    path: 'tabhome',
    loadChildren: () => import('./tabspage/tabhome/tabhome.module').then( m => m.TabhomePageModule)
  },
  {
    path: 'tabjob',
    loadChildren: () => import('./tabspage/tabjob/tabjob.module').then( m => m.TabjobPageModule)
  },
  {
    path: 'tabmsg',
    loadChildren: () => import('./tabspage/tabmsg/tabmsg.module').then( m => m.TabmsgPageModule)
  },
  {
    path: 'tabmore',
    loadChildren: () => import('./tabspage/tabmore/tabmore.module').then( m => m.TabmorePageModule)
  },
  {
    path: 'tabtrainer',
    loadChildren: () => import('./tabspage/tabtrainer/tabtrainer.module').then( m => m.TabtrainerPageModule)
  },
  {
    path: 'register1',
    loadChildren: () => import('./auth/register1/register1.module').then( m => m.Register1PageModule)
  },
  {
    path: 'register2',
    loadChildren: () => import('./auth/register2/register2.module').then( m => m.Register2PageModule)
  },
  {
    path: 'registersuccess',
    loadChildren: () => import('./auth/registersuccess/registersuccess.module').then( m => m.RegistersuccessPageModule)
  },
  {
    path: 'explain',
    loadChildren: () => import('./auth/explain/explain.module').then( m => m.ExplainPageModule)
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },  
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'myjob', loadChildren: './pages/myjob/myjob.module#MyjobPageModule'},
  {
    path: 'jobcomplete',
    loadChildren: () => import('./pages/jobcomplete/jobcomplete.module').then( m => m.JobcompletePageModule)
  },
  {
    path: 'message',
    loadChildren: () => import('./pages/message/message.module').then( m => m.MessagePageModule)
  },
  {
    path: 'invoice',
    loadChildren: () => import('./pages/invoice/invoice.module').then( m => m.InvoicePageModule)
  },
  {
    path: 'jobtraining',
    loadChildren: () => import('./pages/jobtraining/jobtraining.module').then( m => m.JobtrainingPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'profileedit',
    loadChildren: () => import('./pages/profileedit/profileedit.module').then( m => m.ProfileeditPageModule)
  },
  {
    path: 'mapdetail',
    loadChildren: () => import('./pages/mapdetail/mapdetail.module').then( m => m.MapdetailPageModule)
  },
  {
    path: 'phonebook',
    loadChildren: () => import('./pages/phonebook/phonebook.module').then( m => m.PhonebookPageModule)
  },
  {
    path: 'confirmmsg',
    loadChildren: () => import('./pages/confirmmsg/confirmmsg.module').then( m => m.ConfirmmsgPageModule)
  },
  {
    path: 'enquiry',
    loadChildren: () => import('./pages/enquiry/enquiry.module').then( m => m.EnquiryPageModule)
  },
  {
    path: 'policy',
    loadChildren: () => import('./pages/policy/policy.module').then( m => m.PolicyPageModule)
  },
  {
    path: 'policyprivacy',
    loadChildren: () => import('./pages/policyprivacy/policyprivacy.module').then( m => m.PolicyprivacyPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./pages/payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'contactus',
    loadChildren: () => import('./pages/contactus/contactus.module').then( m => m.ContactusPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./pages/faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'mybid',
    loadChildren: () => import('./pages/mybid/mybid.module').then( m => m.MybidPageModule)
  },
  {
    path: 'paymoney1',
    loadChildren: () => import('./pages/paymoney1/paymoney1.module').then( m => m.Paymoney1PageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
