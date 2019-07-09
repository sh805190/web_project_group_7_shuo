import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AvailableRoomComponent } from './available-room/available-room.component';
import { ProfileComponent } from './profile/profile.component';
import { BookingsComponent } from './bookings/bookings.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { ConfirmEqualValidatorDirective } from './confirm-equal-validator.directive';
import { HttpClientModule } from '@angular/common/http';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { BookingRecordsComponent } from './booking-records/booking-records.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    AvailableRoomComponent,
    ProfileComponent,
    BookingsComponent,
    FeedbackComponent,
    ContactUsComponent,
    HomeComponent,
    ConfirmEqualValidatorDirective,
    SearchFilterComponent,
    HotelDetailsComponent,
    BookingRecordsComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
  	AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
