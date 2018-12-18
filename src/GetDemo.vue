<template>
    <div class="c-getdemo">
        <p v-for="blog in blogs ">{{ blog.title.slice(0,10) | to-uppercase }}</p>
    </div>
</template>

<script>

export default {
    data() {
        return {
            blogs: []
        };
    }, // end data

    // https://www.youtube.com/watch?v=9qqFH60isFc&list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa&index=23
    props: {
    }, // end props

    created() {
        // Store parent component in that
        let that = this;

        // GET demo:
        // https://www.youtube.com/watch?v=aoWqFLGCK60&list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa&index=34
        this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data) {
            this.blogs = data.body.slice(0,10);
        })
    }, // end created

    methods: {
    }, // end methods

    computed: {
    }, // end computed

};
</script>
