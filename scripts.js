const app = new Vue({
    el:"#app",
    data: {
        personas:[],
        nuevoNombre:"",
        edad: null
    },
    methods:{
        agregarPersona: function() {
            this.personas.push({
                nombre: this.nuevoNombre,
                edad: this.edad,
                estado: false
            })
            this.nuevoNombre = "";
            this.edad = null;
            localStorage.setItem("personas-vue", JSON.stringify(this.personas));
        },
        abrirPersonas: function(index) {
            this.personas[index].estado = !this.personas[index].estado;
        },
        editarPersonas: function(index) {
            this.personas[index].nombre = this.nuevoNombre;
            this.personas[index].edad = this.edad;
            this.personas[index].estado = false;
            this.nuevoNombre = "";
            this.edad = null
            localStorage.setItem("personas-vue", JSON.stringify(this.personas));
        },
        eliminarPersonas: function(index) {
            this.personas.splice(index,1);
            localStorage.setItem("personas-vue", JSON.stringify(this.personas));
        }
    },
    created: function() {
        let dataDB = JSON.parse(localStorage.getItem("personas-vue"));
        if (dataDB == null) {
            this.personas = [];
        }else{
            this.personas = dataDB
        }
    }
})