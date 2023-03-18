import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MaterialsModule } from './materials/materials.module';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { NzImageModule } from 'ng-zorro-antd/image';
import { ChatBoatComponent } from './components/chat-boat/chat-boat.component';
import { BirthDayComponent } from './components/birth-day/birth-day.component';
import { CommonComponent } from './common/common.component';
import { LoveComponent } from './components/love/love.component';
import { MessageComponent } from './components/message/message.component';
import { LoginComponent } from './components/chat-boat/login/login.component';
import { TextComponent } from './components/chat-boat/text/text.component';
import { CredentialsService } from './services/credentials.service';

registerLocaleData(en);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BirthDayComponent,
    LoveComponent,
    MessageComponent,
    ChatBoatComponent,
    LoginComponent,
    TextComponent,
    CommonComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzTabsModule,
    NzIconModule,
    NzImageModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_ICONS, useValue: icons },
    CredentialsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
