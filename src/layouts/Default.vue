<template>
  <div class="layout">
    <Navbar />
    <main>
      <slot/>
    </main>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'Default',
  components: {
    Navbar
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap');

:root {
  --main: #0077ff;
  --dark: #2e2e2e;
  --white: #fff;
  --light: #f2f2f2;
}

body {
  font-family: 'Source Sans Pro', sans-serif;
  margin:0;
  padding:0;
}

.layout {
  box-sizing: border-box;
  background: var(--dark);
  min-height: 100vh;
}
</style>
