import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import PostCreateView from '@/views/posts/PostCreateView.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import PostEditView from '@/views/posts/PostEditView.vue';
import PostListView from '@/views/posts/PostListView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import NestedView from '@/views/nested/NestedView.vue';
import NestedOneView from '@/views/nested/NestedOneView.vue';
import NestedTwoView from '@/views/nested/NestedTwoView.vue';
import NestedHomeView from '@/views/nested/NestedHomeView.vue';

const routes = [
  {
    path: '/',
    component: HomeView,
    name: 'Home',
  },
  {
    path: '/about',
    component: AboutView,
    name: 'about',
  },
  {
    path: '/posts/create',
    component: PostCreateView,
    name: 'PostCreate',
  },
  {
    path: '/posts/:id/',
    component: PostDetailView,
    name: 'PostDetail',
    // props : true
    props : route => ({
      id : parseInt(route.params.id)
    })
  },
  {
    path: '/posts/:id/edit',
    component: PostEditView,
    name: 'PostEdit',
  },
  {
    path: '/posts',
    component: PostListView,
    name: 'PostList',
  },
  {
    // '/:user-:afterUser(.*)' : 특정 문자열 뒤에 정규식 설정
    path: '/:pathMatch(.*)*',
    name: "NotFound",
    component: NotFoundView
  },
  {
    // '/:user-:afterUser(.*)' : 특정 문자열 뒤에 정규식 설정
    path: '/nested',
    name: "NestedView",
    component: NestedView,
    children : [
      {
        path: '',
        name: "NestedHomeView",
        component: NestedHomeView
      },
      {
        path: 'one',
        name: "NestedOneView",
        component: NestedOneView
      },
      {
        path: 'two',
        name: "NestedTwoView",
        component: NestedTwoView
      },
    ]
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
