import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'pwe-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() isVisible: boolean;
  @Output() hideModal = new EventEmitter<void>();
  constructor() {}

  ngOnInit() {
  }
  hide(): void {
    this.hideModal.emit();
  }

}
