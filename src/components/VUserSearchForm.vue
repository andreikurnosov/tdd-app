<template>
  <form @submit.prevent="$emit('submitted', username)">
    <el-input
      placeholder="Enter the search request"
      v-model="username"
      class="search-form__input"
    >
      <el-button
        class="search-form__button"
        native-type="submit"
        slot="append"
        icon="el-icon-search"
      />
    </el-input>
  </form>
</template>

<script>
export default {
  name: 'VUserSearchForm',
  data() {
    return {
      username: ''
    };
  }
};
</script>
