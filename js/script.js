//generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
const { createApp} = Vue;

createApp ({
    data() {
        return {
            email : []
        };
    },
    methods: {
    },
    mounted() {
        //genero per 10 volte un email casuale
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                const emailGen = response.data;

                //pusho l'email nell'array email
                this.email.push(emailGen.response);
            });
        } 
    }
}).mount('#app');