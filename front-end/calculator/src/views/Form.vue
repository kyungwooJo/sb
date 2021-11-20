<template>
<div>
    <div v-for="i in heirCount" :key="i.id">
    <FormInfo />
    </div>
</div>
</template>

<script>
// @ is an alias to /src
import FormInfo from "../components/FormInfo.vue"
export default {
  name: 'Home',
  data() {
    return {
     heirId: 2,
     heirCount:[{id:1}],

    }
  },

  components: {
    FormInfo
  },
  methods: {
    
  },

  computed: {
      addHeir(){
        return this.heirCount
      }
  }
  
}
</script>

<style>
    .form{
        margin: 20px; 
        width: 200px;
        height: 30px;
    }

    button {
        width: 100px;
        height: 30px;
    }

    .formContainer {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
