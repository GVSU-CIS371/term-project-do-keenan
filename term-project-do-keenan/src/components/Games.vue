<template>
  <div class="games-page">
    <div class="category-banner">
      <h1>Games</h1>
      <p>Discover the latest and greatest PC and console games</p>
    </div>

    <div class="games-container">
      <div v-if="isLoading" class="loading">
        <div class="loading-spinner"></div>
        <p>Loading games...</p>
      </div>

      <div v-else class="games-grid">
        <div v-for="game in games" :key="game.id" class="game-card">
          <div class="game-image">
            <img :src="getImageUrl(game.image)" :alt="game.name">
            <div class="game-platform-tag" v-if="game.platform">
              {{ game.platform }}
            </div>
          </div>
          <div class="game-details">
            <h3 class="game-title" :title="game.name">{{ truncateTitle(game.name) }}</h3>
            <div class="game-rating">
              <div class="stars">
                <span v-for="n in 5" :key="n" :class="{ 'filled': n <= game.rating }">★</span>
              </div>
              <span class="review-count">({{ game.reviewCount }})</span>
            </div>
            <div class="game-price">
              <span v-if="game.salePrice" class="original-price">${{ game.price.toFixed(2) }}</span>
              <span class="current-price">${{ (game.salePrice || game.price).toFixed(2) }}</span>
            </div>
          </div>
          <!-- Replace the cart button entirely -->
          <button class="add-to-cart-button" @click="addToCart(game)">Add to Cart</button>
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

// Import all game images at once
const imageFiles = import.meta.glob('../assets/images/games/*.jpg', { eager: true });

export default {
  name: 'GamesPage',
  data() {
    return {
      games: [],
      isLoading: true,
    };
  },
  methods: {
    async fetchGames() {
      this.isLoading = true;
      const gameCol = collection(db, "Games");
      
      try {
        console.log("Fetching from collection:", gameCol.path);
        
        const querySnapshot = await getDocs(gameCol);
        console.log("Documents found:", querySnapshot.docs.length);
        
        this.games = querySnapshot.docs.map((doc) => {
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
            platform: data.platform,
            image: data.image
          };
        }).filter(item => item !== null);
      
      } catch (error) {
        console.error('Error fetching games:', error);
      } finally {
        this.isLoading = false;
      }
    },
    getImageUrl(imageName) {
      if (!imageName) {
        return 'https://placehold.co/400x300?text=Game';
      }
      
      const path = `../assets/images/games/${imageName}`;
      
      if (imageFiles[path]) {
        return imageFiles[path].default;
      }
      
      return 'https://placehold.co/400x300?text=Game';
    },
    truncateTitle(title) {
      if (title.length <= 40) {
        return title;
      }
      return title.substring(0, 38) + '...';
    },
    addToCart(game) {
      console.log('Added to cart:', game);
      alert(`${game.name} added to cart!`);
    }
  },
  mounted() {
    this.fetchGames();
  }
};
</script>

<style scoped>
.games-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.category-banner {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://via.placeholder.com/1200x300?text=Games+Banner');
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

.games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 25px;
}

.game-card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.game-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.game-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.game-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.game-platform-tag {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
}

.game-details {
  padding: 15px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.game-title {
  font-size: 1rem;
  margin-bottom: 8px;
  line-height: 1.2;
  min-height: 40px; /* Space for approx 2 lines */
  max-height: 40px;
  overflow: hidden;
  position: relative;
}

.game-rating {
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

.game-price {
  margin-top: auto;
  margin-bottom: 15px;
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

/* Completely remove the original add-to-cart-btn style */
.add-to-cart-btn {
  display: none !important;
}

/* Add the new button style with a different class name to avoid conflicts */
.add-to-cart-button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 4px;
  cursor: pointer;
  width: calc(100% - 30px);
  margin: 0 15px 15px 15px;
  font-size: 1rem;
  transition: background-color 0.3s;
  text-align: center;
  display: block;
}

.add-to-cart-button:hover {
  background-color: #388e3c;
}

/* Override any material icon styles */
.material-icons {
  display: none !important;
}
</style>