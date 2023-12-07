const app = Vue.createApp({
    data() {
        return {
            userInput: '',
            confirmedName: '',
            name:''
        }
    
    },
    methods: {
        submitForm(event){
            alert("submit");
        },
        confirmInput(event){
            this.confirmedName = event.target.value;
        },
        setName(event){
            this.userInput = event.target.value;
          },
        
    }
});



app.mount('#assignment');