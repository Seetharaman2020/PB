<template>
  <header>
    <nav class="navbar">
      <!-- show the routes if not mobile view -->
      <ul class="web-view" v-show="!mobile">
        <router-link to="/"><li>Home</li></router-link>
        <router-link to="Dashboard"><li>Dashboard</li></router-link>
      </ul>

      <!-- if mobile view, show an icon instead -->
      <div class="icon">
        <font-awesome-icon
          @click="toggleMobileNavBar"
          v-show="mobile"
          icon="fa-solid fa-user-secret"
        />
      </div>

      <!-- if mobile and the burger icon is selected -->
      <transition name="mobile-nav">
        <ul v-show="mobileNavBar" class="left-nav-bar">
          <router-link @click="toggleMobileNavBar" to="/"
            ><li>Home</li></router-link
          >
          <router-link @click="toggleMobileNavBar" to="Dashboard"
            ><li>Dashboard</li></router-link
          >
        </ul>
      </transition>
    </nav>
  </header>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      mobile: true,
      mobileNavBar: false,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreenWidth);
    // once the page is mounted, call the checkWidth function to know if it is a mobile view
    this.checkScreenWidth();
  },
  methods: {
    toggleMobileNavBar() {
      this.mobileNavBar = !this.mobileNavBar;
    },
    checkScreenWidth() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth < 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNavBar = false;
    },
  },
};
</script>
<style lang="css">
header {
  background-color: black;
  width: 100%;
  z-index: 99;
  transition: 0.5s ease all;
  color: white;

  nav {
    height: 100%;
    padding: 10px;
    margin-top: 10px;
    top: 0;
    padding-right: 24px;
    transition: 0.5s ease all;
  }
  .web-view {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 10px;
    text-decoration: none;
  }

  li {
    color: white;
    text-decoration: none;
    list-style: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  .icon {
    display: flex;
    justify-content: flex-end;
  }
  .mobile-nav-enter-active,
  .mobile-nav-leave-active {
    transition: 1s ease all;
  }

  .mobile-nav-enter-from .mobile-nav-leave-to {
    transform: translateX(-250px);
  }

  .mobile-nav-enter-to {
    transform: translateX(0px);
  }

  .left-nav-bar {
    display: flex;
    flex-direction: column;
    background-color: white;
    height: 100%;
    width: 100%;
    max-width: 250px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    transition: 0.5s ease all;

    li {
      top: 0;
      color: black;
      margin-left: 0;
      padding-top: 20px;
    }
  }
}
</style>
