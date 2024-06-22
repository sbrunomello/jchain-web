import { Component, OnInit } from '@angular/core';
import { BlockchainService } from '../../services/blockchain.service';

@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.page.html',
  styleUrls: ['./blockchain.page.scss'],
})
export class BlockchainPage implements OnInit {
  blocks: any[] = [];

  constructor(private blockchainService: BlockchainService) {}

  ngOnInit() {
    this.blockchainService.getBlocks().subscribe((data: any[]) => {
      this.blocks = data;
    });
  }
}
