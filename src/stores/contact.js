import { defineStore } from "pinia";

export const useContactStore = defineStore('contact', {
  state: () => ({
    contacts: [
      {
        name: 'Thomas',
        phone: '0624603715',
      },
      {
        name: 'Candille',
        phone: '0606060606',
      },
      {
        name: 'Maman',
        phone: '0606060606',
      },
      {
        name: 'Papa',
        phone: '0606060606',
      },
      {
        name: 'Mamie',
        phone: '0606060606',
      },
      {
        name: 'Papy',
        phone: '0606060606',
      },
      {
        name: 'Tonton',
        phone: '0606060606',
      },
      {
        name: 'Tata',
        phone: '0606060606',
      },
    ],
  }),
  actions: {
    addContact(contact) {
      this.contacts.push(contact);
    },
  },
});