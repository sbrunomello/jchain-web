import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlockchainPage } from './blockchain.page';

describe('BlockchainPage', () => {
  let component: BlockchainPage;
  let fixture: ComponentFixture<BlockchainPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockchainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
