<template>
  <div>
    <div class="px">
      <p>Counter: {{ count }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { store } from "../../store";

export default defineComponent({
  setup() {
    return {};
  },
  computed: {
    count() {
      return store.state.count;
    }
  }
});
</script>

<style scoped>
.px {
  overflow: hidden;
}
</style>
