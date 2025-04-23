<template>
    <div class="accessories-page">
      <div class="category-banner">
        <h1>Gaming Accessories</h1>
        <p>Enhance your gaming experience with premium peripherals</p>
      </div>
  
      <div class="accessories-container">
        <div v-if="isLoading" class="loading">
          <div class="loading-spinner"></div>
          <p>Loading accessories...</p>
        </div>
  
        <div v-else class="accessories-grid">
          <div v-for="item in accessories" :key="item.id" class="accessory-card">
            <div class="accessory-image">
              <img :src="getImageUrl(item.imageFile)" :alt="item.name">
              <div class="accessory-type-tag">
                {{ item.type }}
              </div>
            </div>
            <div class="accessory-details">
              <h3 class="accessory-title">{{ item.name }}</h3>
              <div class="accessory-brand">{{ item.brand }}</div>
              <div class="accessory-rating">
                <div class="stars">
                  <span v-for="n in 5" :key="n" :class="{ 'filled': n <= item.rating }">★</span>
                </div>
                <span class="review-count">({{ item.reviewCount }})</span>
              </div>
              <div class="accessory-price-cart">
                <div class="accessory-price">
                  <span v-if="item.salePrice" class="original-price">${{ item.price.toFixed(2) }}</span>
                  <span class="current-price">${{ (item.salePrice || item.price).toFixed(2) }}</span>
                </div>
                <button class="add-to-cart-btn" @click="addToCart(item)">
                  <span class="material-icons">shopping_cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import db from "../firestore";
  import {
    collection,
    getDocs,
    setDoc,
    doc,
    QuerySnapshot,
    QueryDocumentSnapshot,
    onSnapshot,
    CollectionReference,
  } from "firebase/firestore";
  
  export default {
    name: 'AccessoriesPage',
    data() {
      return {
        accessories: [],
        isLoading: true
      };
    },
    methods: {
      async fetchAccessories() {
        this.isLoading = true;
        const accessoriesCol = collection(db, "Accessories");
        
        try {
          // Simulate API delay
          await new Promise(resolve => setTimeout(resolve, 500));
          
          // Fetch items from Firestore
          getDocs(accessoriesCol).then((qs) => {
            this.accessories = qs.docs.map((doc) => ({
              id: doc.id,
              name: doc.data().name,
              price: doc.data().price,
              salePrice: doc.data().salePrice,
              rating: doc.data().rating,
              reviewCount: doc.data().reviewCount,
              brand: doc.data().brand,
              type: doc.data().type,
              imageFile: doc.data().image
            }))
          })
          
        } catch (error) {
          console.error('Error fetching accessories:', error);
        } finally {
          this.isLoading = false;
        }
      },
      getImageUrl(imageName) {
        // For now, return a placeholder image 
        return `https://via.placeholder.com/300x300?text=${imageName.replace('.jpg', '')}`;
      },
      addToCart(item) {
        // For now, just log to console
        console.log('Added to cart:', item);
        
        // Show a toast or notification
        alert(`${item.name} added to cart!`);
      }
    },
    mounted() {
      this.fetchAccessories();
    }
  };
  </script>
  
  <style scoped>
  .accessories-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .category-banner {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://via.placeholder.com/1200x300?text=Accessories+Banner');
    background-size: cover;
    background-position: center;
    color: white;
    padding: 60px 30px;
    text-align: center;
    border-radius: 8px;
    margin-bottom: 30px;
  }
  
  .category-banner h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }
  
  .category-banner p {
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .loading {
    text-align: center;
    padding: 50px 0;
  }
  
  .loading-spinner {
    border: 4px solid #f3f3f3;
    border-top: 4px solid #1a1a2e;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
    margin: 0 auto 20px;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  .accessories-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 25px;
  }
  
  .accessory-card {
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  .accessory-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  .accessory-image {
    position: relative;
    height: 200px;
    overflow: hidden;
  }
  
  .accessory-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .accessory-type-tag {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 0.8rem;
  }
  
  .accessory-details {
    padding: 15px;
  }
  
  .accessory-title {
    font-size: 1rem;
    margin-bottom: 5px;
    height: 40px;
    /* Simple solution without webkit properties */
    overflow: hidden;
    position: relative;
    max-height: 2.4em; /* Approximately 2 lines of text */
  }
  
  /* Add ellipsis effect manually */
  .accessory-title:after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 30%;
    height: 1.2em;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), white 50%);
  }
  
  .accessory-brand {
    color: #666;
    font-size: 0.9rem;
    margin-bottom: 8px;
  }
  
  .accessory-rating {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .stars {
    color: #ccc;
    margin-right: 5px;
  }
  
  .stars .filled {
    color: #ffc107;
  }
  
  .review-count {
    font-size: 0.8rem;
    color: #666;
  }
  
  .accessory-price-cart {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .original-price {
    text-decoration: line-through;
    color: #999;
    font-size: 0.9rem;
    margin-right: 5px;
  }
  
  .current-price {
    font-weight: bold;
    font-size: 1.1rem;
  }
  
  .add-to-cart-btn {
    background-color: #4caf50;
    color: white;
    border: none;
    width: 36px;
    height: 36px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .add-to-cart-btn:hover {
    background-color: #388e3c;
  }
  
  .material-icons {
    font-size: 20px;
  }
  </style>