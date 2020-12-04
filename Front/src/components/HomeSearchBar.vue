<template>
    <div class="HomeSearchBar" onload="getplage()"> -->
        <input class="search-bar" type="text" @keyup.enter="submit" v-model="nomdelaplage" placeholder="Côte des Basques" aria-label="chercher un spot de baignade" >
        <button @click="btnclicked" type="button" class="btn btn-primary">Rechercher</button>
        <div class="propos" v-show="showpropos">
            <ul id="list-plage">
                <li @click="proposclicked(index)" :key="index" v-for="(item,index) in result_plage"><a class="plage">{{item}}</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
const axios = require('axios')

export default {
    data(){
        return{
            //plage api
            // api_key: "67b8e949b30416fe2cd9cfc306940057",
            // url_base: "https://api.openweathermap.org/data/2.5/",
            // query: "",
            // weather: {},

            rdy : false,
            listeplage:[], //["Adele","Agnes","bob","Christiana","Adele","Adele","Adele","Adele","Adele","Adele","Adele","Adele","Adele"], //quelques plages ici
            nomdelaplage : '',
            showpropos : false,
        }
    },
    methods: {
        getplage(){
            axios.get('http://127.0.0.1:3000/plage',{headers: {"Access-Control-Allow-Origin": "*"}}).then((response)=>{
                
                 response.forEach(plage => this.listeplage.push(plage.name));
            }).catch(error => {
                console.log(error.response)
            })
        },
        btnclicked(){
            this.submit();
        },
        submit(){
            if (!this.rdy){
                return;
            }
            //to page suivant + nomdelaplage this.$router.push('/edit/' + joke.id); 
            this.$router.push('/About/');  /*+ (id) this.nomdelaplage*/
        },
        proposclicked(index){
            this.nomdelaplage = this.result_plage[index];
        },
    },
    beforeMount(){
        this.getplage()
    },
    computed: {
        result_plage(){   
            let res = [];
            let plage = '';
            let i = 0;
            while(res.length < 5 && i < this.listeplage.length){
                plage = this.listeplage[i];
                if (plage.toLowerCase().includes(this.nomdelaplage.toLowerCase())){
                    res.push(plage);
                }
                i++;
            }
            return res;
        }
    },
    watch: {
        nomdelaplage: function(){
            this.rdy = false;
            this.listeplage.forEach(plage => {
                if(plage.toLowerCase() == this.nomdelaplage.toLowerCase()){
                    this.rdy = true;
                }
            });

            if (this.nomdelaplage.length >= 3 && !this.rdy){
                this.showpropos = true;
            } else {
                this.showpropos = false;
            }
        }
    },
    
}
</script>

<style scoped>
.search-bar {
  display: block;
  width: 70%;
  padding: 16px;
  /*background-image: url("./assets/search-solid.svg");*/
  margin-left:15%;
  margin-top: 60px;
  color: #313131;
  font-size: 20px;
  appearance: none;
  border: none;
  outline: none;
  background-color: rgba(255, 255, 255, 1);
  padding-left: 25px;
  /*background: none;*/
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 40px;
  outline: 0;
  /*background-color: rgba(255, 255, 255, 0.5);*/
  border-radius: 0px 16px 0px 16px;
  transition: 0.4s;
  margin-bottom: 40px;
}



</style>