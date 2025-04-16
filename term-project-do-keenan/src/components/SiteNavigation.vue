<template>
    <nav class="site-navigation">
      <div class="nav-container">
        <div class="logo" @click="navigateTo('/')">
          <span class="logo-text">371 Hardware</span>
        </div>
        
        <div class="search-bar">
          <input type="text" placeholder="Search for products..." v-model="searchQuery">
          <button class="search-button">Search</button>
        </div>
        
        <div class="nav-links">
          <div class="nav-link" @click="navigateTo('/hardware')">Hardware</div>
          <div class="nav-link" @click="navigateTo('/games')">Games</div>
          <div class="nav-link" @click="navigateTo('/accessories')">Accessories</div>
          <div class="nav-link" @click="navigateTo('/deals')">Deals</div>
        </div>
        
        <div class="user-actions">
          <div class="cart-icon" @click="navigateTo('/cart')">
            <span class="material-icons">shopping_cart</span>
            <span class="cart-count" v-if="cartItemCount > 0">{{ cartItemCount }}</span>
          </div>
          <div class="user-icon" @click="toggleUserMenu">
            <span class="material-icons">person</span>
            <div class="user-menu" v-if="showUserMenu">
              <div class="menu-item" @click="navigateTo('/profile')">My Profile</div>
              <div class="menu-item" @click="navigateTo('/orders')">Order History</div>
              <div class="menu-item" @click="navigateTo('/games-library')">My Games</div>
              <div class="menu-item" v-if="isLoggedIn" @click="logout">Logout</div>
              <div class="menu-item" v-else @click="navigateTo('/login')">Login</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'SiteNavigation',
    data() {
      return {
        searchQuery: '',
        showUserMenu: false,
        isLoggedIn: false,
        cartItemCount: 0
      }
    },
    methods: {
      navigateTo(path) {
        // Will be implemented with Vue Router
        console.log(`Navigating to ${path}`)
        this.showUserMenu = false
      },
      toggleUserMenu() {
        this.showUserMenu = !this.showUserMenu
      },
      logout() {
        this.isLoggedIn = false
        this.showUserMenu = false
        // Will implement actual logout logic later
        console.log('User logged out')
      }
    }
  }
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
    padding: 12px 15px;
    transition: background-color 0.3s;
  }
  
  .menu-item:hover {
    background-color: #f5f5f5;
  }
  </style>