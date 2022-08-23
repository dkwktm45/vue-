<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4" />
    <div class="row g-3">
      <div v-for="post in posts" :key="post.id" class="col-4">
        <PostItem
          :title="post.title"
          :content="post.content"
          :created-at="post.createdAt"
          @click="goPage(post.id)"
        >
        </PostItem>
      </div>
    </div>
    <hr class="my-4" />
    <AppCard>
      <PostDetailView :id ="1"></PostDetailView>
    </AppCard>
  </div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import { getPost } from '@/api/posts';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import PostDetailView from './PostDetailView.vue';
import AppCard from "../../components/posts/AppCard.vue"
const posts = ref([]);
const fetchPosts = () => {
  posts.value = getPost();
};

const router = useRouter();
const goPage = id => {
  router.push({
    name: 'PostDetail',
    params: {
      id,
    },
  });
};
fetchPosts();
</script>

<style lang="scss" scoped></style>
