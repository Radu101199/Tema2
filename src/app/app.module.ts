import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyModule } from './my-module/my-module.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NzModalModule } from 'ng-zorro-antd/modal';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
