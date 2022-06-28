import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes,  } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table/table.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabViewModule } from "primeng/tabview";
import { BrowserAnimationsModule }  from "@angular/platform-browser/animations";
import { ModalPopComponent } from './modal-pop/modal-pop/modal-pop.component';
import { CloseModalComponent } from './shared/close-modal/close-modal.component';
import { TabViewComponent } from './modal-pop/tab-view/tab-view.component';

const  appRoutes:Routes =  [
{
  path:'',component:ModalPopComponent
}
]

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ModalPopComponent,
    CloseModalComponent,
    TabViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    TabViewModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
