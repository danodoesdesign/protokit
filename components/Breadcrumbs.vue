<template>
  <div class="bg-gray-200">
    <ol
      class="container pt-3 pb-4 px-5 lg:px-0"
      vocab="http://schema.org/"
      typeof="BreadcrumbList"
    >
      <li property="itemListElement" typeof="ListItem">
        <NLink property="item" typeof="WebPage" to="/">
          <span v-if="firstTitle" property="name">{{ firstTitle }}</span>
          <span v-if="firstTitle === null" property="name">Home</span>
        </NLink>
        <meta property="position" content="1" />
      </li>
      <li
        v-for="(crumb, index) in crumbs"
        :key="index"
        property="itemListElement"
        typeof="ListItem"
      >
        <NLink property="item" typeof="WebPage" :to="crumb.path">
          <span property="name">{{
            $route.fullPath === crumb.path && title !== null
              ? title
              : crumb.title
          }}</span>
        </NLink>
        <meta property="position" :content="index + 2" />
      </li>
    </ol>
  </div>
</template>

<script>
const titleCase = require("ap-style-title-case");
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
    firstTitle: { type: String, default: null },
  },
  computed: {
    crumbs() {
      const fullPath = this.$route.fullPath;
      const params = fullPath.startsWith("/")
        ? fullPath.substring(1).split("/")
        : fullPath.split("/");
      const crumbs = [];
      let path = "";
      params.forEach((param, index) => {
        path = `${path}/${param}`;
        const match = this.$router.match(path);
        if (match.name !== null) {
          crumbs.push({
            title: titleCase(param.replace(/-/g, " ")),
            ...match,
          });
        }
      });
      return crumbs;
    },
  },
};
</script>

<style scoped>
.container {
  min-height: 0;
}

ol {
  list-style: none;
}
li {
  display: inline;
}
li:after {
  content: " \203A ";
  display: inline;
  font-size: 1.2rem;
  @apply text-gray-900 mr-2 ml-1;
}

li:last-child:after {
  content: "";
}

li a.nuxt-link-exact-active.nuxt-link-active {
  @apply text-gray-600;
}
</style>