<script>

export default{
    name: 'CarteContact',
    props: [
      'contact'
    ],
}

</script>

<template>

  <ul>
        <p>{{ contact.name }}</p>
        <p>{{ contact.phone }}</p>
  </ul>

</template>

<style scoped>

ul{
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

ul p{
  font-size: 1.2em;
}

</style>