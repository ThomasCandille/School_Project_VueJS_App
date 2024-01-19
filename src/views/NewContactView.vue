<script>

import CarteContact from '../components/CarteContact.vue'
import { useContactStore } from '../stores/contact'

export default {
  name: 'ContactView',

  setup() {
    const contactStore = useContactStore()
    return{
      contactStore
    }
  },

  computed: {
    contacts() {
      return this.contactStore.contacts
    },
  },

  data() {
    return {
      
      addContact: {
        name: '',
        phone: '',
      },
    }
  },

  methods: {
    NewContact() {
      this.contacts.push(this.addContact)
      this.addContact = {
        name: '',
        phone: '',
      }
    },
  },

  components: {
    CarteContact
  }

}

</script>

<template>

  <form @submit.prevent="NewContact()">
    <input type="text" id="name" placeholder="name" v-model="addContact.name">
    
    <p class="error" v-if="addContact.name.length == 0"> pas de nom de contact</p>

    <input type="text" id="phone" placeholder="numero" v-model="addContact.phone">

    <p class="error" v-if="addContact.phone.length != 10"> numero de telephone non valable</p>
    
    <input type="submit" value="Add Contact">

  </form>

</template>

<style scoped>

form{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 5vh;
  height: 30vh;
}

form input{
  width: 15vw;
  height: 3vh;
  border-radius: 10px;
  border: 2px solid #201b46;
  padding: 5px;
  font-size: 1.1em;
}

form input[type="submit"]{
  width: 10vw;
  height: 4vh;
  border-radius: 10px;
  border: 2px solid #201b46;
  padding: 5px;
  font-size: 1.1em;
  background-color: #201b46;
  color: white;
}

form input[type="submit"]:hover{
  cursor: pointer;
}

.error{
  color: rgb(180, 0, 0);
}



</style>