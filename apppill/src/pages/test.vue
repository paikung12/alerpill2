<!----------Make By YourName---------------->
 <template>
  <div class="bg-teal">
    <q-card style="margin:20px; padding:30px; border-radius: 48px; ">
       <form @submit.prevent="(form.id)?edit():save() ">
       
      <q-input standout="bg-teal text-white" v-model="form.namepill" label="กรอกชื่อยา">
      <template v-slot:prepend>
          <q-icon name="favorite_border" />
      </template>
      </q-input>
      <br>
      <q-input standout="bg-teal text-white" v-model="form.repastpill" label="ก่ออาหาร-หลังอาหาร">
     <template v-slot:prepend>
          <q-icon name="brightness_medium" />
      </template>
      </q-input>
      <br>
      <q-input standout="bg-teal text-white" v-model="form.ppill" label="รับประทานกี่เม็ด">
        <template v-slot:prepend>
          <q-icon name="scatter_plot" />
      </template>
      </q-input>
      <br>
      <q-input sstandout="bg-teal text-white" v-model="form.time" type="time" >
         <template v-slot:prepend>
          <q-icon name="access_alarm" />
      </template>
      </q-input>
      <br>
       <q-btn  type="submit" color="white" text-color="black"  :label="(form.id)?'Update':'Save'" />
        
    </form>
    </q-card>
    <div class=" text-center text-white">
    <h5>รายการเเจ้งเเตือน</h5>
    </div>
    <div  class="q-pa-md q-gutter-sm">
    <q-card class="my-card" v-for="list,index in listKalee" :key="index" style="border-radius: 25px;">
    <q-card-section style="margin:10px; padding:20px; ">
      ชื่อยา : {{list.namepill}}<br>
      รับประทาน : {{list.repastpill}}
      รับประทนกี่เม็ด : {{list.ppill}}
      เวลาเเจ้งเตือน : {{list.time}}
      <div>
       <q-btn @click="openEdit(list)" color="orange" text-color="black" label="Edit " style=""/>
       <q-btn @click="removeData(list)" color="red" text-color="black" label="Delete" />
      </div>
    </q-card-section> 
    </q-card>
    </div>
  </div>
  
</template>

    <script>
import { get, sync, call } from "vuex-pathify";
export default {
  name: "Root",
  /*-------------------------Load Component---------------------------------------*/
  components: {},
  /*-------------------------Set Component---------------------------------------*/
  props: {},
  /*-------------------------DataVarible---------------------------------------*/
  data() {
    return {
        form:{
          namepill:'',
          repastpill:'',
          ppill:'',
          time:'00:00',
        }
    };
  },
  /*-------------------------Run Methods when Start this Page------------------------------------------*/
  async mounted() {
    /**** Call loading methods*/
    await this.load();
  },
  /*-------------------------Run Methods when Start Routed------------------------------------------*/
  async beforeRouteEnter(to, from, next) {
    next();
  },
  /*-------------------------Vuex Methods and Couputed Methods------------------------------------------*/
  computed: {
    ...sync('kalee/*'),
  },
  /*-------------------------Methods------------------------------------------*/
  methods: {
    ...call('kalee/*'),
    async edit(){
        await this.update(this.form);
      await this.load();
      this.from ={};
    },
    async openEdit(list){
      this.form = list;
    },
    async removeData(list){
       await this.delete(list);
      await this.load();
    },
    async save(){
      console.log('save')
      await this.insert(this.form);
      await this.load();
      this.form ={};
    },
    /******* Methods default run ******/
    load: async function() {
      await this.read();
      this.form = {};
    }
     
  }
};
</script>