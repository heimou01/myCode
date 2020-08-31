<template>
    <div>
        <Nav></Nav>
        <Swiper></Swiper>
        <Classify></Classify>
        <BottomNav></BottomNav>
    </div>
</template>
<script>
import Swiper from './Swiper'
import Nav from './Nav'
import Classify from './Classify'
import BottomNav from './Bottom_Nav'
export default {
    name :'Home',
     components:{
        Swiper,
        Nav,
        Classify,
        BottomNav
    }
}
</script>
