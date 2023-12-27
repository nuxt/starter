<script setup lang="ts">
import { useDevtoolsClient } from '@nuxt/devtools-kit/iframe-client'

const client = useDevtoolsClient()
</script>

<template>
  <div class="relative p-10 n-bg-base flex flex-col h-screen">
    <h1 class="text-3xl font-bold">
      My Module
    </h1>
    <div class="opacity-50 mb-4">
      Nuxt DevTools Integration
    </div>
    <div
      v-if="client"
      class="flex flex-col gap-2"
    >
      <NTip
        n="green"
        icon="carbon-checkmark"
      >
        Nuxt DevTools is connected
      </NTip>
      <div>
        The current app is using
        <code class="text-green">vue@{{ client.host.nuxt.vueApp.version }}</code>
      </div>
      <div>
        <NButton
          n="green"
          class="mt-4"
          @click="client!.host.devtools.close()"
        >
          Close DevTools
        </NButton>
      </div>
    </div>
    <div v-else>
      <NTip n="yellow">
        Failed to connect to the client. Did you open this page inside Nuxt DevTools?
      </NTip>
    </div>

    <div class="flex-auto" />
    <ModuleAuthorNote class="mt-5 " />
  </div>
</template>
