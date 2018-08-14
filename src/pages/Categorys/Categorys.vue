<template>
<div class="categorys">
  <div class="categorys_head">
    <div class="categorys_head2">
      <svg class="icon" aria-hidden="true"  @click="$router.push('/msite')">
        <use xlink:href="#icon-xingtaiduICON_sousuo---copy"></use>
      </svg>
      <span>搜索商品, 共11963款好物</span>
    </div>

  </div>
  <div class="categorys_list">
    <div class="categorys_list_left">
      <div ref="categoryindex" v-for="(category1,index) in categoryList.categoryL1List"
           :key="index"
           @click="changeActive(index)" :class="{'categoryActive':index===0}"><span>{{category1.name}}</span></div>

    </div>
    <div class="categorys_list_right">
      <Category v-if="categoryList.categoryL1List" :current="current" :cateTitle = 'categoryList.categoryL1List'/>
      <CategoryRight v-if="categoryList.categoryL1List" :current="current" :cateData="categoryList.categoryL1List"/>
    </div>
  </div>

</div>
</template>

<script>
  import {mapState} from 'vuex'
  import CategoryRight from './CategoryRight/CategoryRight'
  import Category from './Category/Category'
  export default {
    data(){
      return {
        current:0
      }
    },
    components:{
      CategoryRight,
      Category
    },
    methods:{
      changeActive(e){
        const categoryindex = this.$refs.categoryindex
        for(let i=0;i<categoryindex.length;i++){
          categoryindex[i].classList.remove('categoryActive')
        }
        this.current = e
        categoryindex[e].classList += ' categoryActive'
      }
    },
    computed:{
      ...mapState(['categoryList'])
    },
    mounted(){
      this.$store.dispatch('getCategoryLists')
    }
  }
</script>

<style lang="less" scoped>
  .categorys{
    margin-bottom: 1.5rem;
    width: 100%;
    overflow: hidden;
    background-color: white;
  }
  .categorys .categorys_head{
    background-color: white;
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 1.1333rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .categorys .categorys_head2{
    border-radius: 0.1rem;
    width: 65%;
    height: 0.5rem;
    background-color: #EDEDED;
    border: 1px solid #EDEDED;
    padding: 0.02rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.3rem;
  }
  .categorys .categorys_head .icon{
    font-size: 0.3rem;
    margin-right: 0.05rem;
  }
  .categorys_list{
    margin-top: 1.1333rem;
    width: 100%;
    border: 0.01rem solid #eee
  }
  .categorys_list .categorys_list_left{
    float: left;
    border-right:0.01rem solid #eee ;
    width: 1.5rem;
    height: 100%;
    padding-top: 0.4rem;
  }
  .categorys_list_left div{
    width: 1.5rem;
    height: 0.8rem;

    margin-bottom: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .categorys_list_right{
    margin: 0.2rem 0  0 0.2rem;
    float: left;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 5.5rem;
    min-width: 5rem;
  }
  .categorys_list .categorys_list_left .categoryActive{
    font-size: .35rem;
    color: #ab2b2b;

  }
  .categoryActive span{
    border-left: 0.06rem solid #ab2b2b;;
    height: 0.5rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

</style>
