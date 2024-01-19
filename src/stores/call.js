import { defineStore } from "pinia";

export const useCallStore = defineStore('call', {
  state: () => ({
    calls: [
      {
        info: '06 24 60 37 15',
        date: '12/12/2020',
        hour: '12:00',
      },
      {
        info: 'Candille',
        date: '12/12/2020',
        hour: '12:00',
      }
    ],
  }),

  actions: {
    addCall(call) {
      this.calls.push(call);
    },
  },
});