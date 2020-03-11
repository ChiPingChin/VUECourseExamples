<template>
  <nav>
    <ul class="menu">
      <li class="menu-item">
        <router-link to="/">
          Home
        </router-link>
      </li>
      <li class="menu-item">
        <router-link to="/video">
          Videos
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
.menu{
  display: block;
  list-style: none;
  text-align: center;
  background-color: #222;
  .menu-item{
    display: inline-block;
    font-size: 20px;
    padding: 12px 24px;
    &:hover{
      background-color: #282828;
    }
    a.router-link-exact-active{
      color: green;
      background-color: white;
    }
  }
}
</style>
