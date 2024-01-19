<script>

import { useCallStore } from '@/stores/call';
import { useContactStore } from '@/stores/contact';

export default {
  name: 'ClavierView',

  setup() {
    const callStore = useCallStore()
    const contactStore = useContactStore()
    return{
      callStore, contactStore
    }
  },

  computed: {
    calls() {
      return this.callStore.calls
    },
    contacts() {
      return this.contactStore.contacts
    }
  },

  data() {
    return {

      CallInfo: {
        info: '',
        date: '',
        hour: ''
      }
    }
  },

  methods: {
    NewCall() {
      this.CallInfo.date = new Date().toLocaleDateString()
      this.CallInfo.hour = new Date().toLocaleTimeString()
      this.calls.push(this.CallInfo)
      this.CallInfo = {
        info: '',
        date: '',
        hour: ''
      }
    },

    addNumber(number) {
      this.CallInfo.info += number
            
            }
          }
        
      }

      </script>

      <template>

        <h2> Clavier d'appel</h2>

        <p id="called-number">{{ CallInfo.info }}</p>

        <div>

        <div class="numeric-pad">
        <div class="row">
          <button class="number" @click="addNumber(1)">1</button>
          <button class="number" @click="addNumber(2)">2</button>
          <button class="number" @click="addNumber(3)">3</button>
        </div>
        <div class="row">
          <button class="number" @click="addNumber(4)">4</button>
          <button class="number" @click="addNumber(5)">5</button>
          <button class="number" @click="addNumber(6)">6</button>
        </div>
        <div class="row">
          <button class="number" @click="addNumber(7)">7</button>
          <button class="number" @click="addNumber(8)">8</button>
          <button class="number" @click="addNumber(9)">9</button>
        </div>
        <div class="row">
          <button class="number" @click="addNumber(0)">0</button>
        </div>
      </div>
    </div>

    <div id="container-call">
  <button @click="NewCall()"> <img src="../assets/icons8-téléphone-96.png" alt=""> Call </button>
    </div>

</template>

<style scoped>



h2{
  font-size: 2em;
  margin-bottom: 2vh;
  text-align: center;
  margin-top:5vh ;
}

#called-number{
  font-size: 2em;
  margin-bottom: 2vh;
  text-align: center;
  margin-top:5vh ;
}
.numeric-pad {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 5vh;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
}

.number {
  width: 5vw;
  height: 5vh;
  border-radius: 10px;
  border: 3px solid #201b46;
  background-color: #f1f1f1;
  font-size: 2em;
}

.number:hover {
  background-color: #201b46;
  color: white;
}

.number:active {
  background-color: #201b46;
  color: white;
}

#container-call{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5vh;
}

#container-call button{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 15vw;
  height: 10vh;
  border-radius: 10px;
  border: 3px solid #201b46;
  background-color: #f1f1f1;
  font-size: 1.8em;
}

#container-call button:hover{
  background-color: #201b46;
  color: white;
}

#container-call button:active{
  background-color: #201b46;
  color: white;
}

#container-call img{
  width: 5vw;
}

</style>