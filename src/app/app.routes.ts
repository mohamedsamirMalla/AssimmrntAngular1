import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { NotFound } from './not-found/not-found';
import { About } from './about/about';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home , title: 'Home'},
  { path: 'about', component: About , title: 'About'},
  { path: 'contact', component: Contact , title: 'Contact'  },

  { path: '**', component: NotFound }

];
