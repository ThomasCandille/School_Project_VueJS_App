<script>

import { useCallStore } from '../stores/call';

export default {
  name: 'CallView',

  setup() {
    const callStore = useCallStore()
    return{
      callStore
    }
  },

  computed: {
    calls() {
      return this.callStore.calls
    }
  },

  data() {
    return {
      info:'',
      date:'',
      hour:''
    }
  },
}
</script>

<template>
  <div id="container-call">
    <h2>Call History</h2>
     <div v-for="call in calls" :key="call.info">
      <p>{{ call.info }}</p>
      <p>{{ call.date }}</p>
      <p>{{ call.hour }}</p>
     </div>
  </div>
</template>

<style scoped>

#container-call{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 5vh;
}

h2{
  font-size: 2em;
  margin-bottom: 2vh;
}

#container-call div{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  width: 50vw;
  border: 3px solid #201b46;
  border-radius: 10px;
  padding: 10px;
}

#container-call div p{
  font-size: 1.2em;
}



</style>