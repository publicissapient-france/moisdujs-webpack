import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

// on importe directement les deux composants
import './slot-grid/x-slot-grid';
import './slot-form/x-slot-form';

// on import les méthodes du services
import { addSlot, resetEvent } from './services/slot.service';

// si on importe une seule méthode, l'autre ne sera pas exportée
// import { addSlot, resetEvent } from './services/slot.service';

const init = () => {
  const grid = document.querySelector('x-slot-grid');

  document
    .querySelector('x-slot-form')
    .addEventListener('add-slot', event  => {
      const newSlots = addSlot(event);
      grid.setAttribute('data', JSON.stringify(newSlots));
    }, true);

  document
    .querySelector('x-slot-form')
    .addEventListener('reset-event', event => {
      const newSlots = resetEvent(event); // eslint-disable-line no-undef
      grid.setAttribute('data', JSON.stringify(newSlots));
    }, true);

};

init();
