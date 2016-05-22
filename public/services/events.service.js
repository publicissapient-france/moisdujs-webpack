export default {
  handleAddSlotEvent(column, slotName) {
    // this is just to make lazy loading visible
    const button = document.getElementById('add-slot');
    button.style.background = '#35c6e0';
    
    // return the event
    return new CustomEvent('add-slot', {
      detail: {
        slot: column,
        name: slotName
      }
    });
  }
};