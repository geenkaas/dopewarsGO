new Vue({
    el: '#vue-app',
    data: {
        dopelist: [
            {
                name: 'Peyote',
                min: 1000,
                max: 2500,
                amount: 0,
            },
            {
                name: 'Speed',
                min: 200,
                max: 500,
                amount: 0,
            },
        ],
    },
    methods: {
        add: function(dope, inc) {
            this.dopelist[dope].amount += inc;
        },
        subtract: function(dope, dec) {
            if (this.dopelist[dope].amount > 0) {
                this.dopelist[dope].amount -= dec;
            }
        },
    }
});
