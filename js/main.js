var app = new Vue({
    el: '#app',
    data: {
        randomMail: [],
    },

    mounted(){
        for(let x = 0; x < 10; x++){
          axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
                this.randomMail.push(response.data.response);
            }) 
        }    
    },
  })