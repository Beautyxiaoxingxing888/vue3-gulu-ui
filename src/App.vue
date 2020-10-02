<template>
<router-view />
</template>

<script lang="ts">
import {
  ref,
  provide
} from 'vue' //从vue里面引入ref和provide

export default {
  name: 'App',
  setup() {
    const asideVisible = ref(false) //默认值是false
    provide('xxx', asideVisible)
    // 标记为所有组件都能看见,任何人想访问asideVisible，只要提供xxx这个名字
  }
}
</script>
