import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { AppComponent } from './app.component';
import { routes } from './app.routes';  // Import routes from app.routes.ts

@NgModule({
  declarations: [
    AppComponent,
    // other components (e.g., HomeComponent)
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)  // Ensure routes are passed here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
