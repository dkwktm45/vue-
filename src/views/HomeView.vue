<!-- eslint-disable prettier/prettier -->
<template>
  <div>
    <h2>home view</h2>
    <p>{{$route.path}}</p>
    <p>{{$route.name}}</p>
    <button class="btn btn-primary" @click='goAboutPage'>
      About으로 이동2
    </button>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goAboutPage = () => {
  router.push('/about');
};

</script>
<!-- eslint-disable prettier/prettier -->

<style lang="scss" scoped></style>
