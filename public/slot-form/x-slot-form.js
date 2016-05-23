import './x-slot-form.css';
import template from './x-slot-form.html';

import eventsService from '../services/events.service.js';

class XSlotForm extends HTMLElement {

  createdCallback() {
    this.innerHTML = template;

    this.slotColumn = this.querySelector('#slot-column');
    this.slotName = this.querySelector('#slot-name');

    this.querySelector('#add-slot')
      .addEventListener('click', this.onClickAddSlot.bind(this), false);
    this.querySelector('#add-slot')
      .addEventListener('submit', this.onClickAddSlot.bind(this), false);
    this.querySelector('#reset-event')
      .addEventListener('click', this.onClickResetSlot.bind(this), false);
  }

  onClickAddSlot(e) {
    e.preventDefault();
    let event;
    // l'utilisation de require.ensure n'est plus possible
    // car nous n'utilisons plus le plugin babale transform-es2015-modules-commonjs
    // (qui empêche le tree shaking)
    // see http://www.2ality.com/2015/12/webpack-tree-shaking.html 
    event = eventsService.handleAddSlotEvent(this.slotColumn.value, this.slotName.value);
    if (event && event.detail && event.detail.name && event.detail.slot) {
      this.dispatchEvent(event);
      this.reset();
    }
  }

  onClickResetSlot(e) {
    e.preventDefault();
    const event = new CustomEvent('reset-event', {
      detail: {
        slot: this.slotColumn.value
      }
    });
    if (event.detail.slot) {
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

