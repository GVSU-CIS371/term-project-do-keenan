<template>
  <div class="homepage">
    <header class="hero">
      <div class="hero-content">
        <h1>371 Hardware</h1>
        <p>Your one-stop shop for premium computer hardware and the latest games</p>
        <button class="cta-button">Shop Now</button>
      </div>
    </header>

    <section class="featured-products">
      <h2>Featured Products</h2>
      <div class="product-grid">
        <div v-for="product in featuredProducts" :key="product.id" class="product-card">
          <img :src="getImageUrl(product)" :alt="product.name" class="product-image">
          <div class="product-details">
            <h3 class="product-name">{{ product.name }}</h3>
            <p class="product-category">{{ product.category }}</p>
            <p class="product-price">${{ product.price.toFixed(2) }}</p>
          </div>
          <button class="add-to-cart" @click="addToCart(product)">Add to Cart</button>
        </div>
      </div>
    </section>

    <section class="categories">
      <h2>Browse Categories</h2>
      <div class="category-grid">
        <div class="category-card" @click="navigateToCategory('hardware')">
          <h3>Computer Hardware</h3>
          <p>CPUs, GPUs, Motherboards, and more</p>
        </div>
        <div class="category-card" @click="navigateToCategory('games')">
          <h3>Games</h3>
          <p>Latest PC and console titles</p>
        </div>
        <div class="category-card" @click="navigateToCategory('accessories')">
          <h3>Accessories</h3>
          <p>Keyboards, mice, headsets, and more</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// Import images from different categories
const hardwareImages = import.meta.glob('../assets/images/hardware/*.jpg', { eager: true });
const gameImages = import.meta.glob('../assets/images/games/*.jpg', { eager: true });
const accessoryImages = import.meta.glob('../assets/images/accessories/*.jpg', { eager: true });

export default {
  name: 'HomePage',
  data() {
    return {
      featuredProducts: [
        {
          id: 1,
          name: 'RTX 4080 Graphics Card',
          category: 'Hardware',
          price: 799.99,
          imageFile: 'rtx4080.jpg'
        },
        {
          id: 2,
          name: 'AMD Ryzen 9 7950X CPU',
          category: 'Hardware',
          price: 549.99,
          imageFile: 'ryzen9.jpg'
        },
        {
          id: 3,
          name: 'Cyberpunk 2077',
          category: 'Games',
          price: 59.99,
          imageFile: 'cyberpunk.jpg'
        },
        {
          id: 4,
          name: 'Mechanical Gaming Keyboard',
          category: 'Accessories',
          price: 129.99,
          imageFile: 'logitech-keyboard.jpg'
        }
      ]
    }
  },
  methods: {
    navigateToCategory(category) {
      // Will be implemented with Vue Router
      console.log(`Navigating to ${category}`);
      this.$router?.push(`/${category}`);
    },
    
    getImageUrl(product) {
      if (!product.imageFile) {
        return 'https://placehold.co/300x200?text=Product';
      }
      
      let imageCollection;
      
      // Determine which image collection to use based on category
      switch(product.category.toLowerCase()) {
        case 'hardware':
          imageCollection = hardwareImages;
          break;
        case 'games':
          imageCollection = gameImages;
          break;
        case 'accessories':
          imageCollection = accessoryImages;
          break;
        default:
          return `https://placehold.co/300x200?text=${encodeURIComponent(product.name)}`;
      }
      
      // Look for the correct path in the collection keys
      for (const key in imageCollection) {
        if (key.includes(product.imageFile)) {
          return imageCollection[key].default;
        }
      }
      
      // Fall back to a placeholder with the product name
      return `https://placehold.co/300x200?text=${encodeURIComponent(product.name)}`;
    },
    
    addToCart(product) {
      console.log('Added to cart:', product);
      alert(`${product.name} added to cart!`);
    }
  }
}
</script>

<style scoped>
.homepage {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.hero {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://via.placeholder.com/1200x400?text=TechGamer+Hero');
  background-size: cover;
  color: white;
  padding: 100px 0;
  text-align: center;
  margin-bottom: 40px;
  border-radius: 8px;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}

.cta-button {
  background-color: #ff5722;
  color: white;
  border: none;
  padding: 12px 30px;
  font-size: 1.2rem;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #e64a19;
}

h2 {
  font-size: 2rem;
  margin: 40px 0 20px;
  text-align: center;
}

.product-grid, .category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
}

.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: white; /* Changed to white background */
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.product-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 15px;
}

.product-details {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.product-name {
  margin-bottom: 5px;
  /* Set a fixed height to handle multi-line titles */
  min-height: 50px;
}

.product-category {
  color: #666;
  margin: 5px 0;
}

.product-price {
  font-weight: bold;
  font-size: 1.2rem;
  margin: 10px 0;
}

.add-to-cart {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s;
  margin-top: auto;
}

.add-to-cart:hover {
  background-color: #388e3c;
}

.category-card {
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 30px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  background-color: #e0e0e0;
}
</style>