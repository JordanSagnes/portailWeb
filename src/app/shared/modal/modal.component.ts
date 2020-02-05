import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'pwe-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() private isVisible: boolean;
  @Output('hideModal') hideModal = new EventEmitter<void>();
  constructor() {}

  ngOnInit() {
  }
  hide(): void {
    this.hideModal.emit();
  }

}
