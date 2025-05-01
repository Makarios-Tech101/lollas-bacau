<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);
const isDropdownOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

</script>

<template>
    <header>
        <div class="navigation">
            <div class="header-logo">
              <router-link to="/">
                 <img src="../assets/images/lollas-bacau-logo.png">
              </router-link>   
            </div>
            <Transition name="slide-fade">
              <div class="header-menu" :class="{ open: isMenuOpen }" >
                <ul >
                    <li>
                      <router-link to="/">Home</router-link>
                    </li>
                    <li>
                      <router-link to="/about-us">About</router-link>
                    </li>
                    <li class="dropdown" >
                      <a href="#"  @click.prevent="toggleDropdown">Services <span style="font-size: 15px;">&#x2BC6;</span>  </a>
                      <ul class="dropdown-menu" :class="{ 'open': isDropdownOpen }">
                          <li class="dropdown-item"><router-link to="/portraits-and-headshots">Portraits and Headshots</router-link></li>
                          <li class="dropdown-item"><router-link to="/wedding-and-events">Wedding and Events</router-link></li>
                          <li class="dropdown-item"><router-link to="/birthday-shoots">Birthday Shoots</router-link></li>
                          <li class="dropdown-item"><router-link to="/child-photography">Child Photography</router-link></li>
                          <li class="dropdown-item"><router-link to="/corporate-events">Corporate Events</router-link></li>
                          <li class="dropdown-item"><router-link to="/fashion-photography">Fashion Photography</router-link></li>
                          <li class="dropdown-item"><router-link to="/outdoor-shoots">Outdoor Shoots</router-link></li>
                          <li class="dropdown-item"><router-link to="/product-photography">Product Photography</router-link></li>
                      </ul>
                    </li>
                    <li>
                      <router-link to="/gallery">Gallery</router-link>
                    </li>
                    <li>
                      <router-link to="/pricing">Pricing</router-link>
                    </li>
                    <li>
                      <router-link to="/contact">Contact & Bookings</router-link>
                    </li>
                </ul>
              </div>
            </Transition>
                 <!-- Mobile Menu Toggle -->
            <button class="menu-toggle" @click="toggleMenu">
               <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 25 24"><path fill="#000" d="M3.563 6a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 0 1.5h-16a.75.75 0 0 1-.75-.75m0 12a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 0 1.5h-16a.75.75 0 0 1-.75-.75m.75-6.75a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5z"/>
               </svg>
               <svg v-else xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24"><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"/>
               </svg>
            </button>
       </div>
    </header>
</template>

<style scoped>
/* Header Styling */
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: white;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: auto;
  padding: 10px 30px;
}

/* Logo */
.header-logo img {
  width: 100px;
  margin-bottom: -10px;
}


.header-menu ul {
  display: flex;
}

.header-menu ul li {
  list-style-type: none;
  margin-left: 20px;
  position: relative;
}

.header-menu ul a {
  text-decoration: none;
  color: black;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0.4px;
}

.header-menu ul a:hover {
  color: grey;
}


/* Dropdown Menu */
.dropdown {
  position: relative;
}

ul.dropdown-menu {
     display: flex ;
     flex-direction: column;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
}

.dropdown-menu {
   display: none;
  position: absolute;
  top: 100%;
  left: -40%;
  background: rgba(20, 20, 20, 0.9);
  color: white;
  width: 230px;
  padding: 10px 0;
  margin-top: 15px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
}

.dropdown-menu .dropdown-item {
  padding: 10px;
  margin-left: 10px;
}

/* Show dropdown on hover (Desktop) */
.dropdown:hover .dropdown-menu,
.dropdown-menu:hover {
    visibility: visible;
    opacity: 1;
}

.dropdown-menu li a {
  color: white;
  display: block;
  font-size: 13px;
}

.dropdown-menu li a:hover {
  color: rgb(203, 203, 203);
}

.dropdown-menu.open {
  display: block; /* Show when toggled */
}

/* .dropdown:hover .dropdown-menu {
  display: block;
} */

/* Mobile Menu Button */
.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  margin-bottom: -10px;
}

/* Transition for mobile menu */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

.slide-fade-enter-to,
.slide-fade-leave-from {
  transform: translateY(0);
  opacity: 1;
}

@media (max-width: 400px) {

}

@media (min-width: 993px) {
  .dropdown:hover .dropdown-menu {
    display: block;
  }
}

/* Mobile Responsive Styles */
@media (max-width: 992px) {
  .navigation {
        padding: 10px;
    }
  .header-menu {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 67px;
    /* right: 0; */
    background: white;
    padding: 20px 0px;
    border-top: 1px solid white;;
    width: 90%;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  }

  .header-logo img {
    width: 90px;
    margin-bottom: -10px;
  }

  .header-menu.open {
    display: flex;
  }

  .header-menu ul {
    flex-direction: column;
    gap: 8px;
  }

  .header-menu ul a {
    font-size: 12px;
  }

  .header-menu .dropdown-menu{
    gap: 0px;
    margin-left: -10px;
  }

  

  .menu-toggle {
    display: block;
  }
  .header-menu ul {
    flex-direction: column;
    padding-left: 10px;
  }

  .dropdown-menu {
    display: block !important;
    position: static !important;
    background: white;
    color: black;
    width: 100%;
    box-shadow: none;
    opacity: 1 !important;
    visibility: visible !important;
    transition: none;
  }
   
  

  .dropdown-menu li a {
      color: black !important;
      padding: 8px 0px;
      font-size: 12px;
  }
  

  .dropdown-menu .dropdown-item { 
      padding: 0px;
      margin-left: 10px;
      color: black;
      display: block;
   }

  /* .dropdown.open .dropdown-menu {
    display: block;
  } */
}
</style>