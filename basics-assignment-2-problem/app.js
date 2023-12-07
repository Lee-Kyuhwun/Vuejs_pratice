app = Vue.createApp({
    data() {
        return {
            name: '',
            confirmedName: ''
        }
    
    },
    methods: {
        submitForm(event){
            alert("submit");
        },
        confirmInput(){
            this.confirmedName = this.name;
        },
        setName(event){
            this.name = event.target.value;
          },
    }
});



app.mount('#assignment');