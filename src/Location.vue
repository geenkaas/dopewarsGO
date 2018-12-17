<template>
    <div class="c-location">
        <p class="c-latitude">lat</p>
        <p class="c-longitude">lon</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: null,
            location: this.$route.params.location,
            lon: 0,
            lat: 0,
        };
    }, // end data

    created() {


        //https://www.w3schools.com/html/html5_geolocation.asp

        // GET demo:
        // https://www.youtube.com/watch?v=aoWqFLGCK60&list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa&index=34
        console.log(this.location);
    }, // end created

};
</script>
