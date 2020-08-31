<template>
  <div class="shopList_wrap">
    <Goback></Goback>
    <div class="shopList_content">
      <ul class="shopList_ul_1">
        <li
          v-for="(item,index) in items"
          v-bind:key="item.id"
          class="shopList_ul1_item"
          @click="changeData(index,item.name)"
        >
          <router-link
            :to="{path:'/shoplist/'+item.name}"
            class="shopList_item_link"
            @click="indexFun(this.$route.params.id)"
            :class="[index==indexData? 'shopList_active':'']"
          >{{item.name}}</router-link>
        </li>
      </ul>
      <ul class="shopList_ul_2">
        <li class="shopList_ul2_li" v-for="item in shops" v-bind:key="item._id">  
          <router-link :to="{path:'/shops/'+item._id}" class="ul2_link" >
              <img class="ul2_img" :src="item.url" alt />
              <p class="ul2_name">{{item.name}}</p>
              <span class="ul2_price">￥{{item.price}}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <BottomNav></BottomNav>
    <!-- {{check()}} -->
  </div>
  
</template>

<script>
import $ from "jquery";
import Goback from "./Goback";
import BottomNav from "./Bottom_Nav";
export default {
  name: "ShopList",
  components: {
    BottomNav,
    Goback
  },
  data: function() {
    return {
      items: [
        {
          name: "京东商城"
        },
        {
          name: "数码电器"
        },
        {
          name: "京东服饰"
        },
        {
          name: "京东生鲜"
        },
        {
          name: "京东到家"
        }
      ],
      shopList: [],
      indexData: 0,
      shops:[]
    };
  },
  created() {
    var that = this;
    that.indexFun(this.$route.params.id);
    this.getData();
    this.changeData(this.indexData,this.$route.params.id)
  },
  methods: {
    getData: function() {
      var that=this
        $.ajax({
          url:'http://localhost:4001/shoplist',
          type:'get',
          success:function(result){
              that.shopList=result
          }
        })
    },
    changeData: function(e,name) {
        this.indexData=e;
        var that=this;
        $.ajax({
          url:'http://localhost:4001/shops',
          type:'post',
          data:{name:name},
          success:function(result){
            that.shops=result
          }
        })
    },
    indexFun: function(e) {
      
      var that = this;
      if (e == "京东商城" ||e==undefined) {
        that.indexData = 0;
      } else if (e == "数码电器") {
        that.indexData = 1;
      } else if (e == "京东服饰") {
        that.indexData = 2;
      } else if (e == "京东生鲜") {
        that.indexData = 3;
      } else if (e == "京东到家") {
        that.indexData = 4;
      } else {
        that.indexData = 5;
      }
     
    },
    check: function() {
      console.log(this.$route);
    }
  }
};
</script>