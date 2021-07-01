<template>
 <div id="app">
  <tab-bar-content class="content"></tab-bar-content>
 </div>
</template>
<script>
import TabBarContent from "components/content/TabBarContent/TabBarContent.vue";
export default {
 name: "App",
 components: { TabBarContent },
};
</script>
<style>
@import 'assets/css/base.css';

</style>
