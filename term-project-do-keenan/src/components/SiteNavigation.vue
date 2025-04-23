<template>
  <nav class="site-navigation">
    <div class="nav-container">
      <router-link class="logo" to="/">
        <span class="logo-text">371 Hardware</span>
      </router-link>
      
      <div class="search-bar">
        <input type="text" placeholder="Search for products..." v-model="searchQuery">
        <button class="search-button">Search</button>
      </div>
      
      <div class="nav-links">
        <router-link class="nav-link" to="/hardware">Hardware</router-link>
        <router-link class="nav-link" to="/games">Games</router-link>
        <router-link class="nav-link" to="/accessories">Accessories</router-link>
        <router-link class="nav-link" to="/deals">Deals</router-link>
      </div>
      
      <div class="user-actions">
        <router-link class="cart-icon" to="/cart">
          <span class="material-icons">Shopping Cart</span>
          <span class="cart-count" v-if="cartItemCount > 0">{{ cartItemCount }}</span>
        </router-link>
        <div class="user-icon" @click="toggleUserMenu">
          <span class="material-icons">Profile</span>
          <div class="user-menu" v-if="showUserMenu">
            <router-link class="menu-item" to="/profile">My Profile</router-link>
            <router-link class="menu-item" to="/orders">Order History</router-link>
            <router-link class="menu-item" to="/games-library">My Games</router-link>
            <div class="menu-item" v-if="isLoggedIn" @click="logout">Logout</div>
            <router-link class="menu-item" v-else to="/login">Login</router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, signOut } from 'firebase/auth';

export default defineComponent({
name: 'SiteNavigation',
setup() {
  const router = useRouter();
  
  return {
    router
  };
},
data() {
  return {
    searchQuery: '',
    showUserMenu: false,
    isLoggedIn: false,
    cartItemCount: 0
  }
},
mounted() {
  // Check if user is logged in on component mount
  const auth = getAuth();
  auth.onAuthStateChanged((user) => {
    this.isLoggedIn = !!user;
  });
},
methods: {
  toggleUserMenu() {
    this.showUserMenu = !this.showUserMenu;
  },
  logout() {
    const auth = getAuth();
    signOut(auth).then(() => {
      this.isLoggedIn = false;
      this.showUserMenu = false;
      // Redirect to home page
      this.router.push('/');
      console.log('User logged out');
    }).catch((error) => {
      console.error('Logout error:', error);
    });
  }
}
});
</script>

<style scoped>
.site-navigation {
  background-color: #1a1a2e;
  color: white;
  padding: 15px 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
}

.logo-text {
  background-image: linear-gradient(45deg, #ff5722, #ff9800);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

.search-bar {
  flex-grow: 1;
  margin: 0 40px;
  display: flex;
  max-width: 500px;
}

.search-bar input {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px 0 0 4px;
  outline: none;
}

.search-button {
  background-color: #ff5722;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  transition: background-color 0.3s;
}

.search-button:hover {
  background-color: #e64a19;
}

.nav-links {
  display: flex;
}

.nav-link {
  color: white;
  margin: 0 15px;
  cursor: pointer;
  position: relative;
  padding: 5px 0;
}

.nav-link:after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #ff5722;
  transition: width 0.3s;
}

.nav-link:hover:after {
  width: 100%;
}

.user-actions {
  display: flex;
  align-items: center;
}

.cart-icon, .user-icon {
  color: white;
  position: relative;
  margin-left: 20px;
  cursor: pointer;
}

.material-icons {
  font-size: 24px;
}

.cart-count {
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #ff5722;
  color: white;
  font-size: 12px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-menu {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  color: #333;
  border-radius: 4px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  width: 180px;
  z-index: 10;
  margin-top: 10px;
}

.menu-item {
  display: flex;
  color: black;
  padding: 15px 15px;
  transition: background-color 0.3s;
}

.menu-item:hover {
  background-color: #f5f5f5;
}
</style>