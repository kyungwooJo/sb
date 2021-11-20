<template>
<div>
  <div class="formContainer">
    <div class="heir_container">
        <button type="button" class="addBtn" @click="addHeir">+</button>
        <div v-for="(heir, idx) in computedHeir" :key="heir.id">
            <br>
            <input class="form" v-model="firstNameList[idx]" placeholder="heir's firstName">
            <br>
            <input class="form" v-model="lastNameList[idx]" placeholder="heir's lastName">
            <br>
            <input class="form" v-model="emailList[idx]" placeholder="heir's email">
            <br>
            <input class="form" v-model="percentageList[idx]" placeholder="heir's percentage">
            <hr>
        </div>
    </div>
       
    <div class="property_container">
        <button type="button" class="addBtn" @click=addProperty>+</button>
        <div v-for="(property, idx) in computedProperty" :key="property.id">
            <br>
            <input class="form" v-model="propertyTypeList[idx]" placeholder="Property Type">
            <br>
            <input class="form" v-model="propertyValueList[idx]" placeholder="Property sentimental Value">
            <hr>
        </div>
    </div>
  </div>
  <button type="button" @click="calcInheritedProperty">Submit</button>

  <div v-if="isShow">
    <br>
    <p class="resultInfo">Division of property Info</p>
    <div v-for="(item, idx) in partialCostList" :key="item">
      <br>
      <p class="heirInfo">heir {{idx+1}}</p>
      <p class="heirInfo">Name: {{firstNameList[idx]}} {{lastNameList[idx]}}</p>
      <p class="heirInfo">Email: {{emailList[idx]}}</p>
      <p class="heirInfo">Inherited money: <span>&#36;</span> {{item}} </p>
      <hr>
      
    </div>
  </div>

</div>

</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',

  data() {
    return {
     firstNameList: [],
     lastNameList: [],
     emailList: [],
     percentageList: [],

     propertyTypeList:[],
     propertyValueList:[],

     heirId: 2,
     heirCount:[{id:1}],
     propertyId: 2,
     propertyCount:[{id:1}],

     partialCostList:[],

     isShow: false
    }
  },

  methods: {

    addHeir(){
        let newHeir = {id: this.heirId}
        this.heirId = this.heirId + 1
        this.heirCount.push(newHeir);
    },

    addProperty(){
        let newProperty = {id: this.heirId}
        this.propertyId = this.propertyId + 1
        this.propertyCount.push(newProperty); 
    },

    calcInheritedProperty(){
        let totalVal = 0

        for(let i=0; i<this.propertyValueList.length; i++){
            this.propertyValueList[i] = parseInt(this.propertyValueList[i])
        }

        for(let i=0; i<this.propertyValueList.length; i++){
            totalVal = totalVal + this.propertyValueList[i]
        }

        console.log(totalVal)
        this.calcInheritedPropertyy(totalVal)
        this.isShow = true
        
    },

    int_Decimal(value){
        var float = parseFloat(value).toFixed(2);
        float = float/100;
        return float
    },

    calcInheritedPropertyy(totalAsset){
        for(let i=0; i<this.percentageList.length; i++){
            let ratio = this.int_Decimal(this.percentageList[i])
            let partialCost = ratio*parseInt(totalAsset)
            this.partialCostList.push(partialCost)
        }
    }

  },

  computed: {
      computedHeir(){
        return this.heirCount
      },
      computedProperty(){
        return this.propertyCount
      },

      
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

    .addBtn {
        width: 50px;
    }

    .formContainer {
        display: flex;
        justify-content: center;
    }

    .heirInfo{
      font-size: 24px;
      color: blue;
    }

    .resultInfo{
      font-size:30px;
      font-weight: bold;
    }
</style>

