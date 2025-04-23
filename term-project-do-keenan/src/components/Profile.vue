<template>
    <h1 v-if="!isLogged" class="name-header">
        Not Logged In
    </h1>    
    <div v-else>
        <h1 class="name-header">
        Hello {{userName}}
        </h1>
        <h2 class="name-header">
        ID: {{userID}}
        </h2>
        <h2 class="item-header">
        Owned Items
        </h2>
        <div class="games-grid">
            <div v-for="item in ownedItem" :key="item.id" class="game-card">
                <div class="game-image">
                    <img :src="getImageUrl(item.imageFile)" :alt="item.name">
                </div>
                <div class="game-details">
                    <h3 class="game-title">{{ item.name }}</h3>
                    <div class="game-rating">
                        <div class="stars">
                            <span v-for="n in 5" :key="n" :class="{ 'filled': n <= item.rating }">★</span>
                        </div>
                        <span class="review-count">({{ item.reviewCount }})</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import{getAuth, signInWithEmailAndPassword} from "firebase/auth";
import db from "../firestore";
import {
  collection,
  getDocs,
  getDoc,
  setDoc,
  doc,
  QuerySnapshot,
  QueryDocumentSnapshot,
  onSnapshot,
  CollectionReference,
} from "firebase/firestore";

export default {
    name: 'profile',
    data () {
        return {
            ownedItem: [],
            isLogged: false,
            userID: '',
            userName: ''
        };
    },
    mounted() {
    // Check if user is logged in on component mount
        const auth = getAuth();
        auth.onAuthStateChanged((user) => {
            this.isLogged = !!user;
            if(this.isLogged){
            this.userID = user.uid;
            const userCol = collection(db, `Users/${this.userID}/ownedItems`);
            const userDoc = doc(db, `Users/${this.userID}`)
            getDoc(userDoc).then((qs) => {
                this.userName = qs.data().name
            })
            console.log(userCol);
            getDocs(userCol).then((qs) => {
                this.ownedItem = qs.docs.map((doc) => ({
                id: doc.id,
                name: doc.data().name,
                rating: doc.data().rating,
                reviewCount: doc.data().reviewCount,
                imageFile: doc.data().image
            }));
            });  
            console.log(user.uid);
            this.loadItems();    
            }
            
        });
        
    },
    methods: {
        getImageUrl(imageName) {
        // For now, return a placeholder image 
        return `https://via.placeholder.com/300x400?text=${imageName.replace('.jpg', '')}`;
        },
    }
}


</script>

<style scoped>
    .name-header{
        text-align: center;
        color: white;
    }
    .item-header{
        text-align: center;
        color: white;
        padding: 10px;
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

  .game-details {
    padding: 15px;
  }
</style>