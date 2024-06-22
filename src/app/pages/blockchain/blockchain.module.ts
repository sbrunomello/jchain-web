import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlockchainPageRoutingModule } from './blockchain-routing.module';

import { BlockchainPage } from './blockchain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlockchainPageRoutingModule
  ],
  declarations: [BlockchainPage]
})
export class BlockchainPageModule {}
