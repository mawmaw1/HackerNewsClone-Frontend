new Vue({

    // We want to target the div with an id of 'events'
    el: '#events',

    // Here we can register any values or collections that hold data
    // for the application
    data: {
        text: "Brakuk"
    },


    // Methods we want to use in our application are registered here
    methods: {

        getText: function(){

            this.$http.get('http://localhost:8081')
                .then(function(text){
                    this.text = text;
                }, function (error) {

                })
        }

    },
        mounted: function () {
            this.getText();
        }

}



);
