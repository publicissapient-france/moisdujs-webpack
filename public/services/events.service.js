export default {
  handleAddSlotEvent(column, slotName) {
    // return the event
    return new CustomEvent('add-slot', {
      detail: {
        slot: column,
        name: slotName
      }
    });
  }
};