import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NgxsModule} from "@ngxs/store";
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import {NgxsLoggerPluginModule} from "@ngxs/logger-plugin";
import {HeaderComponent} from './_layout/header/header.component';
import {PollCreateFormComponent} from './_components/poll-create-form/poll-create-form.component';
import {PollVoteFormComponent} from './_components/poll-vote-form/poll-vote-form.component';
import {PollGraphComponent} from './_components/poll-graph/poll-graph.component';
import {BarChartModule} from "@swimlane/ngx-charts";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {PollState} from "./_states/poll.state";
import {environment} from "../environments/environment";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxsFormPluginModule} from "@ngxs/form-plugin";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PollCreateFormComponent,
    PollVoteFormComponent,
    PollGraphComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([PollState], {developmentMode: !environment.production}),
    NgxsFormPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot({disabled: environment.production}),
    BarChartModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
