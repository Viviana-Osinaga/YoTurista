const {createApp} = Vue;

const myList = reactive({
    title: 'Samaipata',
    descripcion: 'Samaipata es una pequeña ciudad en la base de los Andes bolivianos. A través de ella se accede al Parque Nacional Amboró, a sus bosques húmedos, sus cascadas y diversas aves. Al este de la ciudad, se encuentran las ruinas del antiguo sitio de ceremonial de El Fuerte de Samaipata. En el centro de la ciudad, el Museo Arqueológico de Samaipata exhibe artefactos del sitio. Los edificios coloniales y las calles adoquinadas rodean la Plaza Principal.',
    imagen: '@/imagenes/bolivia-ruinas-de-samaipata-06.webp'
}, {
    title: 'Santa Cruz',
    descripcion: 'Santa Cruz es una provincia en la Patagonia argentina en el sur del país. Se ubica entre la cordillera de los Andes al oeste y el océano Atlántico al este. El Parque Nacional los Glaciares, donde se encuentra el glaciar Perito Moreno, es conocido por sus paisajes helados en constante cambio. Las ciudades de El Chaltén y El Calafate son centros para explorar Los Glaciares.',
    imagen: '@/imagenes/plaza-24-de-sept-chico.jpg'
}, {
    title: 'Cochabamba',
    descripcion: 'Cochabamba es una ciudad del centro de Bolivia. En un cerro en el este, un teleférico asciende a la enorme estatua del Cristo de la Concordia con vista al área circundante. En el centro de la ciudad está la Plaza 14 de Septiembre, una plaza colonial rodeada de galerías y la catedral barroca andina de San Sebastián. En los alrededores, hay muchas iglesias coloniales, como la de Santo Domingo con su impresionante fachada de piedra tallada.',
    imagen: '@/imagenes/Telefericocochabamba.jpg'
})
createApp({

}).mount('#app')
//     data(){
//         return{
//             productos: [],
//             url: '#',
//             cargando: true,
//             error: false
//         }
//     },

//     methods: {
//         fetchApi(url){
//             fetch(url)
//             .then(res => res.json())
//             .then(data =>{
//                 this.productos = data;
//                 this.cargando = false;
//             })
//             .catch(err=>{
//                 console.error(err);
//                 this.error = true;
//             })
//         }
//     },
//     created(){
//         this.fetchApi(this.url);
//     }
// }).mount('#app')