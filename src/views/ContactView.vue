<script>

import CarteContact from '../components/CarteContact.vue'
import { useContactStore } from '../stores/contact'
import { useCallStore } from '../stores/call'

export default {
  name: 'ContactView',

  setup() {
    const contactStore = useContactStore()
    const callStore = useCallStore()
    return{
      contactStore, callStore
    }
  },

  computed: {
    contacts() {
      return this.contactStore.contacts
    },
    calls() {
      return this.callStore.calls
    }
  },

  data() {
    return {
      
      addContact: {
        name: '',
        phone: '',
      },

      CallInfo: {
        info: '',
        date: '',
        hour: ''
      }
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

    NewCall(number) {
      this.CallInfo.info = number
      this.CallInfo.date = new Date().toLocaleDateString()
      this.CallInfo.hour = new Date().toLocaleTimeString()
      this.calls.push(this.CallInfo)
      this.CallInfo = {
        info: '',
        date: '',
        hour: ''
      }
    },
  },

  components: {
    CarteContact
  }

}

</script>

<template>

  <div id="container-contact">
    <div id="container-contact-cards" v-for="contact in contacts" :key="contact.name" >
    <CarteContact :contact="contact" />
    <button @click="NewCall(contact.name)"> <img src="../assets/icons8-téléphone-96.png" alt=""> </button>
    </div>

  </div>

  <div id="container-link"> 
    <RouterLink to="/new-contact"> 
      <img src="../assets/icons8-ajouter-96.png" alt="form"> Ajouter un contact !
    </RouterLink> 
  </div>

</template>

<style scoped>

#container-contact {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin-top: 5vh;
  margin-inline: 15vw;
}

#container-contact-cards{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  border-radius: 10px;
  padding: 10px;
  border: 3px solid #201b46;
}

#container-contact-cards img{
  width: 5vw;
}

#container-link{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5vh;
}

#container-link a{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 2vw;
  text-decoration: none;
  color: white;
  font-size: 1.5em;
  width: 60vw;
  height: 10vh;
  border: #201b46 3px solid;
  border-radius: 25px;
}

#container-link a:hover{
  background-color: #201b46;
}

#container-link img{
  width: 5vw;
}

button {
  background-color: transparent;
  border: none;
  height: 75%;
  width: 75%;
}



</style>