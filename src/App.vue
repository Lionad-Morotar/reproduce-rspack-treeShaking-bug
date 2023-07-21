<template>
  <router-view />
  <div id="canvas"></div>
</template>

<script lang="ts" setup>
import { Graph } from '@antv/x6';

new Graph({
    container: document.querySelector('#canvas'),
    background: {
      color: '#black',
    },
    autoResize: true,
    translating: {
      restrict: true,
    },
    mousewheel: true,
    interacting: false,
    panning: true,
  });
</script>
