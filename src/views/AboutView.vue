<script>
  import { mapActions, mapState } from 'vuex';

  export default{
    mounted(){
      this.cargarImagenes()
    },
    methods: {
      ...mapActions(['cargarImagenes'])
    },
    computed: {
      // ...mapState(['images'])
      ...mapState({
        images: (state) => state.about.images
      })
    },
  }

</script>

<template>
  <div>
    <Icon icon="carbon:search" />
    <Icon icon="carbon:login" />
    <Icon icon="carbon:mdi:account-child-outline" />
    <Icon icon="mdi:account-child-outline" />
    <Icon icon="icon-park:add-user" />
    <article class="card" v-for="im in images">
      <img :src="im.download_url" alt="">
    </article>
  </div>
</template>
