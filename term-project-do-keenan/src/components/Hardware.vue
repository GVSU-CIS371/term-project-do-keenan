<template>
  <div class="hardware-page">
    <div class="category-banner">
      <h1>Computer Hardware</h1>
      <p>Premium components to build and upgrade your PC</p>
    </div>

    <div class="hardware-container">
      <div v-if="isLoading" class="loading">
        <div class="loading-spinner"></div>
        <p>Loading hardware components...</p>
      </div>

      <div v-else class="hardware-grid">
        <div v-for="item in hardware" :key="item.id" class="hardware-card">
          <div class="hardware-image">
            <img :src="getImageUrl(item.imageFile)" :alt="item.name">
            <div class="hardware-type-tag">
              {{ item.type }}
            </div>
          </div>
          <div class="hardware-details">
            <h3 class="hardware-title" :title="item.name">{{ truncateTitle(item.name) }}</h3>
            <div class="hardware-brand">{{ item.brand }}</div>
            <div class="hardware-rating">
              <div class="stars">
                <span v-for="n in 5" :key="n" :class="{ 'filled': n <= item.rating }">★</span>
              </div>
              <span class="review-count">({{ item.reviewCount }})</span>
            </div>
            <div class="hardware-price-cart">
              <div class="hardware-price">
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
} from "firebase/firestore";

// Import all hardware images at once
const imageFiles = import.meta.glob('../assets/images/hardware/*.jpg', { eager: true });

export default {
  name: 'HardwarePage',
  data() {
    return {
      hardware: [],
      isLoading: true
    };
  },
  methods: {
    async fetchHardware() {
      this.isLoading = true;
      const hardwareCol = collection(db, "Hardware");
      
      try {
        console.log("Fetching from collection:", hardwareCol.path);
        
        const querySnapshot = await getDocs(hardwareCol);
        console.log("Documents found:", querySnapshot.docs.length);
        
        this.hardware = querySnapshot.docs.map((doc) => {
          if (typeof doc.data !== 'function') {
            console.error("Invalid document:", doc);
            return null;
          }
          
          const data = doc.data();
          console.log("Document data:", data);
          
          return {
            id: doc.id,
            name: data.name,
            price: data.price,
            salePrice: data.salePrice,
            rating: data.rating,
            reviewCount: data.reviewCount,
            brand: data.brand,
            type: data.type,
            imageFile: data.image
          };
        }).filter(item => item !== null);
      
      } catch (error) {
        console.error('Error fetching hardware:', error);
      } finally {
        this.isLoading = false;
      }
    },
    getImageUrl(imageName) {
      if (!imageName) {
        return 'https://placehold.co/400x300?text=Hardware';
      }
      
      const path = `../assets/images/hardware/${imageName}`;
      
      if (imageFiles[path]) {
        return imageFiles[path].default;
      }
      
      return 'https://placehold.co/400x300?text=Hardware';
    },
    truncateTitle(title) {
      if (title.length <= 40) {
        return title;
      }
      return title.substring(0, 38) + '...';
    },
    addToCart(item) {
      console.log('Added to cart:', item);
      alert(`${item.name} added to cart!`);
    }
  },
  mounted() {
    this.fetchHardware();
  }
};
</script>

<style scoped>
.hardware-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.category-banner {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://via.placeholder.com/1200x300?text=Hardware+Banner');
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

.hardware-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 25px;
}

.hardware-card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.hardware-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.hardware-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.hardware-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hardware-type-tag {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
}

.hardware-details {
  padding: 15px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.hardware-title {
  font-size: 1rem;
  margin-bottom: 8px;
  line-height: 1.2;
  min-height: 40px;
  max-height: 40px;
  overflow: hidden;
  position: relative;
}

.hardware-brand {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 8px;
}

.hardware-rating {
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

.hardware-price-cart {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
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