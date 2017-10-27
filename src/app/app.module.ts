import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ROOT_ROUTING} from './app.routing';
import {IndexOperationModule} from './module/index-operation/index-operation.module';
import {HttpInterceptor} from './services/http/http-interceprot.service';
import {RoutingCenterService} from './services/routing-center/routing-center.service';

require('assets/js/jquery-3.1.1.min.js');
require('assets/js/bootstrap.min.js');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ROOT_ROUTING,
    IndexOperationModule
  ],
  providers: [HttpInterceptor, RoutingCenterService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
