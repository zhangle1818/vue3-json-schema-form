<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld />
    {{ state.name }} -- {{ nameRef }} ::: {{ computedName }}
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed, watchEffect } from 'vue'
import HelloWorld from './components/HelloWorld'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
  },
  setup(props, { slots, attrs, emit }) {
    let state = reactive({
      name: 1,
    })

    let nameRef = ref(0)

    setInterval(() => {
      state.name += 1
      nameRef.value += 1
    }, 1000)

    const computedName = computed(() => {
      return nameRef.value + '222'
    })
    watchEffect(() => {
      console.log(state.name)
    })

    return {
      state,
      nameRef,
      computedName,
    }
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
