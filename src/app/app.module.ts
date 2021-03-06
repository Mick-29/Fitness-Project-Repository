import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TrainingComponent } from './training/training.component';
import { RunningExerciseTimer } from './training/exercise-timer/running-exercise-timer/running-exercise-timer.component';
import { NewExerciseComponent } from './training/new-exercise/new-exercise.component';
import { PastExerciseComponent } from './training/past-exercise/past-exercise.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { ExerciseTimerComponent } from './training/exercise-timer/exercise-timer.component';
import { TimerService } from './training/timer.service';
import { TrainingService } from './training/training.service';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    TrainingComponent,
    RunningExerciseTimer,
    NewExerciseComponent,
    PastExerciseComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent,
    ExerciseTimerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
  ],
  providers: [TimerService, TrainingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
