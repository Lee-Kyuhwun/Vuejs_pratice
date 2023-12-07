const app = Vue.createApp({
    data: function(){ // data(){ } 이렇게 써도 됨
        return {
            courseGoalA: 'Vue 연습',
            courseGoalB: '<h2>Vue를 잘 다루기</h2>',
            vueLink: 'https://kr.vuejs.org/'
        };
    },
    methods: {
        outputGoal(){
            const randomNumber = Math.random();
            if(randomNumber < 0.5){
                return this.courseGoalA;
            }else{
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal'); // mount the app to the element with id assignment

