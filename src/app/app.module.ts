import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroChildComponent } from './components/hero-child/hero-child.component';
import { HeroParentComponent } from './components/hero-parent/hero-parent.component';
import { NameChildComponent } from './components/name-child/name-child.component';
import { NameParentComponent } from './components/name-parent/name-parent.component';
import { CountdownChildComponent } from './components/countdown-child/countdown-child.component';
import { CountdownParentComponent } from './components/countdown-parent/countdown-parent.component';
import { MissionControlComponent } from './components/mission-control/mission-control.component';
import { AstronautComponent } from './components/astronaut/astronaut.component';
import { PopupComponent } from './components/popup/popup.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {PopupService} from './services/popup.service';
import { AdDirective } from './directives/ad.directive';
import { AdBannerComponent } from './components/ad-banner/ad-banner.component';
import { HeroProfileComponent } from './components/hero-profile/hero-profile.component';
import { HeroJobAdComponent } from './components/hero-job-ad/hero-job-ad.component';
import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { HeroAsyncMessageComponent } from './components/hero-async-message/hero-async-message.component';
import { ProfileEditorComponent } from './components/profile-editor/profile-editor.component'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeroFormReactiveComponent } from './components/hero-form-reactive/hero-form-reactive.component';
import { HeroFormTemplateComponent } from './components/hero-form-template/hero-form-template.component';
import { IdentityRevealedDirective } from './directives/identity-revealed.directive';
import { ForbiddenNameDirective } from './directives/forbidden-name.directive';
import { UniqueAlterEgoValidatorDirective } from './directives/alter-ego.directive';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component'

@NgModule({
  declarations: [
    AppComponent,
    HeroChildComponent,
    HeroParentComponent,
    NameChildComponent,
    NameParentComponent,
    CountdownChildComponent,
    CountdownParentComponent,
    MissionControlComponent,
    AstronautComponent,
    PopupComponent,
    AdDirective,
    AdBannerComponent,
    HeroProfileComponent,
    HeroJobAdComponent,
    HighlightDirective,
    UnlessDirective,
    HeroAsyncMessageComponent,
    ProfileEditorComponent,
    HeroFormReactiveComponent,
    HeroFormTemplateComponent,
    IdentityRevealedDirective,
    ForbiddenNameDirective,
    UniqueAlterEgoValidatorDirective,
    DynamicFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PopupService],
  bootstrap: [AppComponent],
  entryComponents: [
    PopupComponent,
    HeroJobAdComponent,
    HeroProfileComponent
  ]
})
export class AppModule { }
