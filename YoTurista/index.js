const {createApp} = Vue;

createApp({
    data(){
        return{
            productos: [],
            url: '#',
            cargando: true,
            error: false
        }
    },

    methods: {
        fetchApi(url){
            fetch(url)
            .then(res => res.json())
            .then(data =>{
                this.productos = data;
                this.cargando = false;
            })
            .catch(err=>{
                console.error(err);
                this.error = true;
            })
        }
    },
    created(){
        this.fetchApi(this.url);
    }
}).mount('#app')