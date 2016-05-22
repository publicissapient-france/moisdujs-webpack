import './x-slot-form.css';
import template from './x-slot-form.html';

class XSlotForm extends HTMLElement {

  createdCallback() {
    this.innerHTML = template;

    this.slotColumn = this.querySelector('#slot-column');
    this.slotName = this.querySelector('#slot-name');

    this.querySelector('#add-slot')
      .addEventListener('click', this.onClickAddSlot.bind(this), false);
    this.querySelector('#add-slot')
      .addEventListener('submit', this.onClickAddSlot.bind(this), false);
  }

  onClickAddSlot(e) {
    e.preventDefault();
    let event;
    require.ensure([], () => { // eslint-disable-line no-undef
      const eventsService = require('../services/events.service.js').default; // eslint-disable-line no-undef
      event = eventsService.handleAddSlotEvent(this.slotColumn.value, this.slotName.value);
    });
    if (event && event.detail && event.detail.name && event.detail.slot) {
      this.dispatchEvent(event);
      this.reset();
    }
  }

  reset() {
    this.slotColumn.value = 1;
    this.slotName.value = '';
  }
}

document.registerElement('x-slot-form', XSlotForm);

