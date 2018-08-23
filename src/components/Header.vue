<template>
    <header>
        <h1>{{title}}</h1>
        <h2>{{newTitle}}</h2>
    </header>    
</template>

<script>
export default {
    name: 'Header',
    props: {
        title: String
    },
    data() {
      return {
          name: "Ryan Allen"
      };
    },
    computed: { 
        newTitle: function() {
            return "New Title " + this.name;
        }
    }
};
</script>

<style scoped>
header {
    background-color: #111;
    padding: 20px;
    color: white;
}
h1 {
    margin: 0;
}
</style>
