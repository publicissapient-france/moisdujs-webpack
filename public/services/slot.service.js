const slots = { 1: [], 2: [], 3: [], 4: [] };

export const addSlot = (event) => {
  slots[event.detail.slot].push(event.detail.name);
  return slots;
};

export const resetEvent = (event) => {
  slots[event.detail.slot] = [];
  return slots;
};

