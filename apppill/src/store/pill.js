import axios from '../axios'
import _ from 'lodash'
import { make } from 'vuex-pathify'
import store from '.'
import { create } from 'domain'
const state = {
    listPilldata : [],
}
const getters = {

}

const mutations = make.mutations(state)

const actions = {

    async insert(context,params){
        let read = await axios.post('/api/pill',params)
        .then((r)=>{
            alert('Save Success');
        })
        .catch((e)=>{
            console.log(e);
        });
        return read;
    },
    async update(context,params){
        let read = await axios.put('/api/pill/'+params.id,params)
        .then((r)=>{
            alert('Update Success');
        })
        .catch((e)=>{
            console.log(e);
        });
        return read;
    },
    async delete(context,params){
        let read = await axios.delete('/api/pill/'+params.id)
        .then((r)=>{
            alert('Delete Success');
        })
        .catch((e)=>{
            console.log(e);
        });
        return read;
    },
    async read(context,params){
        let read = await axios.get('/api/pill')
                    .then((r)=>{
                        state.listpill = r.data;
                    })
                    .catch((e)=>{
                        console.log(e);
                    });
                    return read;
    },

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
    }