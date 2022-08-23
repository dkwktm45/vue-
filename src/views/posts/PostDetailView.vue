<template>
  <div>
    <h2>{{form.title}}</h2>
    <p>{{form.content}}</p>
    <p class="text-muted">{{form.createdAt}}</p>
    <hr class="my-4" />
    <div class="row g-2">
      <div class="col-auto">
        <button class="btn btn-outline-dark">이전글</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark">다음글</button>
      </div>
      <div class="col-auto me-auto"></div>
      <div class="col-auto">
        <button class="btn btn-outline-dark" @click="goListPage">목록</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-primary" @click="goEditPage">
          수정
        </button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-danger">삭제</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { getPostById } from '@/api/posts';
import { ref } from '@vue/reactivity';
const router = useRouter();
/**
 * 기존에는 route 방식으로 id를 통한 게시판 details 구현을 해줬다 하지만 route가 아닌
 * props로도 가능하다.
 */
/* const route = useRoute();
const id = route.params.id; */
const props  = defineProps({
  id: Number,
})

// ref : 한꺼번에 객체 할당 가능
// reactive : 하나의 value만 할당 가능 아니라면 object로 선언된다.
const form = ref({})

const fetchPost = () =>{
  const data = getPostById(props.id);
  form.value = {...data}
}
fetchPost()
const goListPage = () => {
  router.push({ name: 'PostList' });
};
const goEditPage = () => {
  router.push({ name: 'PostEdit', params: { id : props.id } });
};
</script>

<style lang="scss" scoped></style>
