<template>
  <b-row>
    <b-col>
      <b-navbar toggleable="md" type="light" variant="info">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <router-link tag="b-navbar-brand" to="/">
          <a>Pastamen</a>
        </router-link>
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav>
            <router-link tag="b-nav-item" to="/">
              <a>Home</a>
            </router-link>
          </b-navbar-nav>
          <b-navbar-nav>
            <router-link tag="b-nav-item" to="/latest">
              <a>Latest</a>
            </router-link>
          </b-navbar-nav>
          <b-navbar-nav>
            <router-link tag="b-nav-item" to="/fav">
              <a>Favourites</a>
            </router-link>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>
a{
  color: white !important;
}
</style>
