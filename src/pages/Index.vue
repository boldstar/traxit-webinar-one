<template>
  <Layout>
    <div class="hero">
      <Video /> 
      <Action />  
    </div>
  </Layout>
</template>

<script>
import Video from '@/components/Video.vue'
import Action from '@/components/Action.vue'
export default {
  metaInfo: {
    title: 'Webinar Registration'
  },
  components: {
    Video,
    Action
  }
}
</script>

<style>
.hero {
  display: flex;
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;
  position: relative;
}

@media screen and (max-width: 1150px) {
  .hero {
    flex-direction: column;
  }
}
</style>
