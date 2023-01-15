<script setup>
// fetch github data
const { data: gh } = await useFetch('https://api.github.com/repos/nuxt/framework')
</script>

<template>
  <div>
    <h1>About nuxt/framework</h1>
    <p>Stars: {{ gh.stargazers_count }}</p>
  </div>
</template>