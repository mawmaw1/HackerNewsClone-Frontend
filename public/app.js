new Vue({

    // We want to target the div with an id of 'events'
    el: '#events',

    // Here we can register any values or collections that hold data
    // for the application
    data: {
        text: "Loading..."
    },


    // Methods we want to use in our application are registered here
    methods: {

        getText: function(){

            this.$http.get('http://139.59.211.36:8081/')
                .then(function(response){
                    this.text = response.body.msg;
                }, function (error) {

                })
        }

    },
        mounted: function () {
            this.getText();
        }
    }
);
