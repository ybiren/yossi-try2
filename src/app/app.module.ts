import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { YossiComponent } from './yossi/yossi.component';
import { FormTempComponent } from './form-temp/form-temp.component';
import { FormsModule } from '@angular/forms';
import { UniqueDirective } from './form-temp/unique.directive';
import { ObsComponent } from './obs/obs/obs.component';
import { MyInterceptor } from './my-interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { AppRoutingModule } from './app-routing.module';
import { LazyModule } from './lazy/lazy.module';
import { DupPipe } from './dup.pipe';


@NgModule({
  declarations: [
    AppComponent,
    YossiComponent,
    FormTempComponent,
    UniqueDirective,
    ObsComponent,
    MyDashboardComponent,
    DupPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
