<template>
  <div id="app" class="bg-gray-100">
    <dashboardComponent/>
    <HelloWorld/>
    <PropertyCard :property="property"/>
  </div>
</template>

<script>

import HelloWorld from './components/HelloWorld.vue';
import dashboardComponent from './components/dashboardComponent';
import PropertyCard from './components/PropertyCard';
export default {
  name: 'App',
  components: {
    HelloWorld,
    dashboardComponent,
    PropertyCard
  },
  data:() => ({
    
    property: {
      imageUrl: ["http://localhost:8080/img/beach-work.92201d81.jpg"],
      imageAlt: ["Rear view of modern home with pool"],
      beds: 3,
      baths: 2,
      title: "Modern home in city center",
      priceInCosts: 190000,
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    }
  })
}
</script>
