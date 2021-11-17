import { defineComponent, reactive, ref } from 'vue'
import HelloWorld from './components/HelloWorld'
const img = require('./assets/logo.png') //eslint-disable-line

function renderHellowrld(num: number) {
  return <HelloWorld age={num} />
}

export default defineComponent({
  setup() {
    const state = reactive({
      name: 'jack',
    })
    const numberRef = ref(1)

    setInterval(() => {
      state.name += '1'
      numberRef.value += 1
    }, 1000)
    return () => {
      const number = numberRef.value
      return (
        <div id="app">
          <img src={img} alt="vue logo" />
          <p>{state.name + number}</p>
          {renderHellowrld(88)}
        </div>
      )
      // return h('div', { id: 'app' }, [
      //   h('img', {
      //     alt: 'Vue logo',
      //     src: img,
      //   }),
      //   h('p', state.name + number),
      // ])
    }
  },
})
