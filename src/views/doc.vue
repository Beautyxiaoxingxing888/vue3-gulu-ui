<template>
<div>
  <TopNav />
  <div class="content">
    <aside>
      <h2>组件列表</h2>
      <ol>
        <li>
          <router-link to="/doc/switch">Switch组件</router-link>
        </li>
        <li>
          <router-link to="/doc/button">Button组件</router-link>
        </li>
        <li>
          <router-link to="/doc/dialog">Dialog组件</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs组件</router-link>
        </li>
      </ol>
    </aside>
    <main>主内容</main>
  </div>
</div>
</template>

<script lang="ts">
import TopNav from '../components/topNav.vue'; //引入公共组件
import {
  inject,
  Ref
} from 'vue'
export default {
  setup() {
    const asideVisible = inject < Ref < boolean >> ('xxx')
    //相当于get，<Ref<boolean>>定义类型
    console.log('Doc aside 获取的asideVisible 为:' + asideVisible.value)
    const toggleMenu = () => {
      asideVisible.value = !asideVisible.value
    }
    return {
      asideVisible
    }
  },
  components: {
    TopNav
  }
}
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  >.nav {
    flex-shrink: 0;
  }

  >.content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;

    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}

.content {
  display: flex;

  >aside {
    flex-shrink: 0;
  }

  >main {
    flex-grow: 1;
    padding: 16px;
    background: lightgreen;
  }
}

aside {
  background: lightblue;
  width: 150px;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;

  >h2 {
    margin-bottom: 4px;
  }

  >ol {
    >li {
      padding: 4px 0;
    }
  }
}

main {
  overflow: auto;
}
</style>
