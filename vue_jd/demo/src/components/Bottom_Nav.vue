<template>
  <div class="bottom_nav_wrap">
    <ul class="b_nav_ul">
      <li class="b_nav_li" v-for="(item,index) in items" v-bind:key="item.id" :class="[index==indexData? 'bottom_nav_active' :'']">
        <router-link
          :to="{path:item.path}"
          class="b_nav_link"
          :class="[index==indexData? 'bottom_nav_active' :'']"
          @click="change(this.$route.path)"
        >{{item.name}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  name: "Bottom_Nav",
  data: function() {
    return {
      items: [
        {
          name: "首页",
          path: "/"
        },
        {
          name: "分类",
          path: "/shoplist/京东商城"
        },
        {
          name: "购物车",
          path: "/shopcar"
        },
        {
          name: "登录",
          path: "/login"
        }
      ],
      indexData: 0
    };
  },
  created() {
    this.getIcon();
    this.change(this.$route.path)
  },
  methods: {
    getIcon: function() {
      var that = this;
      $.ajax({
        url: "http://localhost:4001/bottomNav",
        type: "get",
        succeess: function(result) {
          that.items = result;
        }
      });
    },
    change:function(e){
         var that = this;
      if (e == "/") {
        that.indexData = 0;
      } else if (
        e == "/shoplist/京东商城" ||
        e == "/shoplist/数码电器" ||
        e == "/shoplist/京东服饰" ||
        e == "/shoplist/京东生鲜" ||
        e == "/shoplist/京东到家" ||
        e =="/shoplist"
      ) {
        that.indexData = 1;
      } else if (e == "/shopcar") {
        that.indexData = 2;
      } else {
        that.indexData = 3;
      }
    },
    getDatas:function(){
        $.ajax({
          url:'http://localhost:4001/shoplist',
          type:'get',
          success:function(result){
              console.log('数据初始化成功')
              console.log(result)
          }
        })
    },
    check: function() {
      console.log(this.$route);
    }
  }
};
</script>