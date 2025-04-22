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
              <img :src="getImageUrl(game.imageFile)" :alt="game.name">
              <div class="game-platform-tag" v-if="game.platform">
                {{ game.platform }}
              </div>
            </div>
            <div class="game-details">
              <h3 class="game-title">{{ game.name }}</h3>
              <div class="game-rating">
                <div class="stars">
                  <span v-for="n in 5" :key="n" :class="{ 'filled': n <= game.rating }">★</span>
                </div>
                <span class="review-count">({{ game.reviewCount }})</span>
              </div>
              <div class="game-price-cart">
                <div class="game-price">
                  <span v-if="game.salePrice" class="original-price">${{ game.price.toFixed(2) }}</span>
                  <span class="current-price">${{ (game.salePrice || game.price).toFixed(2) }}</span>
                </div>
                <button class="add-to-cart-btn" @click="addToCart(game)">
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
    name: 'GamesPage',
    data() {
      return {
        games: [],
        isLoading: true
      };
    },
    methods: {
      async fetchGames() {
        this.isLoading = true;
        const gameCol = collection(db, "Games");

        
        try {
          // Simulate API delay
          await new Promise(resolve => setTimeout(resolve, 500));
          
          //Trying to get items from firestore
          getDocs(gameCol).then((qs) => {
            this.games = qs.docs.map((doc) => ({
              id: doc.id,
              name: doc.data().name,
              price: doc.data().price,
              salePrice: doc.data().salePrice,
              rating: doc.data().rating,
              reviewCount: doc.data().reviewCount,
              platform: doc.data().platform,
              imageFile: doc.data().image
            }))
          })
          
          // Dummy data for now
          /*this.games = [
            {
              id: 1,
              name: 'Cyberpunk 2077',
              price: 59.99,
              salePrice: 39.99,
              rating: 4,
              reviewCount: 1250,
              platform: 'PC',
              imageFile: 'cyberpunk.jpg'
            },
            {
              id: 2,
              name: 'Elden Ring',
              price: 59.99,
              salePrice: null,
              rating: 5,
              reviewCount: 3872,
              platform: 'PC',
              imageFile: 'elden-ring.jpg'
            },
            {
              id: 3,
              name: 'Horizon Forbidden West',
              price: 69.99,
              salePrice: 49.99,
              rating: 4,
              reviewCount: 1842,
              platform: 'PlayStation 5',
              imageFile: 'horizon.jpg'
            },
            {
              id: 4,
              name: 'FIFA 23',
              price: 59.99,
              salePrice: null,
              rating: 4,
              reviewCount: 958,
              platform: 'PC',
              imageFile: 'fifa23.jpg'
            },
            {
              id: 5,
              name: 'Starfield',
              price: 69.99,
              salePrice: null,
              rating: 4.5,
              reviewCount: 1324,
              platform: 'Xbox Series X',
              imageFile: 'starfield.jpg'
            },
            {
              id: 6,
              name: 'The Legend of Zelda: Tears of the Kingdom',
              price: 59.99,
              salePrice: null,
              rating: 5,
              reviewCount: 4251,
              platform: 'Nintendo Switch',
              imageFile: 'zelda.jpg'
            },
            {
              id: 7,
              name: 'Baldur\'s Gate 3',
              price: 59.99,
              salePrice: null,
              rating: 5,
              reviewCount: 3762,
              platform: 'PC',
              imageFile: 'baldurs-gate.jpg'
            }
          ];*/
          
        } catch (error) {
          console.error('Error fetching games:', error);
        } finally {
          this.isLoading = false;
        }
      },
      getImageUrl(imageName) {
        // For now, return a placeholder image 
        return `https://via.placeholder.com/300x400?text=${imageName.replace('.jpg', '')}`;
      },
      addToCart(game) {
        // For now, just log to console
        console.log('Added to cart:', game);
        
        // Show a toast or notification
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
  }
  
  .game-title {
    font-size: 1rem;
    margin-bottom: 8px;
    height: 40px;
    /* Simple solution without webkit properties */
    overflow: hidden;
    position: relative;
    max-height: 2.4em; /* Approximately 2 lines of text */
  }
  
  /* Add ellipsis effect manually */
  .game-title:after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 30%;
    height: 1.2em;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), white 50%);
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
  
  .game-price-cart {
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