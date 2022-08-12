import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketRoutingModule } from './ticket-routing.module';

import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { TicketTableComponent } from './components/ticket-table/ticket-table.component';
import { SearchComponent } from './components/search/search.component';
import { CrearTicketComponent } from './pages/crear-ticket/crear-ticket.component';
import { SeguimientoTicketComponent } from './pages/seguimiento-ticket/seguimiento-ticket.component';
import { CerrarTicketComponent } from './pages/cerrar-ticket/cerrar-ticket.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { TicketComponent } from './pages/ticket/ticket.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    TicketTableComponent,
    SearchComponent,
    CrearTicketComponent,
    SeguimientoTicketComponent,
    CerrarTicketComponent,
    TicketsComponent,
    TicketComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    TicketRoutingModule
  ]
})
export class TicketModule { }
