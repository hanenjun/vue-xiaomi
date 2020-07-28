import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      isLogin: false
    },
    one:true,
    cart: [

    ],
    count: 0,
    Select: 0,
    totalPrice: 0,
    checkAll: false,
    orderCount: 0,
    orderPrice: 0,
    map: [],
    orderdetail: {

    },
    orders: [

    ],
    orderSubmit: {}
  },
  mutations: {
    createdCheckAll(state) {
      for (let i = 0; i < state.cart.length - 1; i++) {
        if (state.cart[i].select) {
          state.checkAll = true
        } else {
          console.log('a')
          state = false
          break
        }
      }
    },
    Logout(state) {
      state.user = {}
      state.user.isLogin = false
      location.reload()
    },
    login(state, obj) {
      console.log(obj)
      state.user = obj
    },
    editOrderMap(state, obj) {
      state.orderdetail[obj.ordergoodsid].map.name = obj.name
      state.orderdetail[obj.ordergoodsid].map.phone = obj.phone
      state.orderdetail[obj.ordergoodsid].map.map = obj.map
    },
    removecart(state) {
      let arr = []
      state.cart.forEach(item=>{
          if(!item.select){
            arr.push(item)
          }
      })
      state.cart.forEach((item, index) => {
        if (item.select) {
          state.cart.splice(index, 1);
          state.count--
        }
      })
      state.cart = arr
      state.count=  state.cart.length
    },
    addorderdetail(state, obj) {
      let goodDetil = {}
      obj.goods = []
      state.cart.forEach(item => {
        if (item.select) {
          goodDetil.name = item.title;
          goodDetil.price = item.price;
          goodDetil.num = item.num;
          obj.goods.push(goodDetil)
          goodDetil = {}
        }
      })
      state.orderSubmit.name = obj.map.name
      state.orderSubmit.map = obj.map.map
      state.orderSubmit.phone = obj.map.phone
      state.orderdetail[obj.ordergoodsid] = obj
    },
    addorders(state, obj) {
      let good = {}
      obj.goods = [];
      state.cart.forEach(item => {
        if (item.select) {
          good.price = item.price;
          good.goodname = item.title;
          good.num = item.num;
          obj.goods.push(good);
          good = {}
        }
      })
      state.orders.push(obj)
    },
    edituser(state, obj) {
      state.user = obj
    },
    addMap(state, obj) {
      state.map.push(obj)
    },
    setMap(state, obj) {
      let index = obj.index
      delete obj.index
      state.map.splice(index, 1, obj)
    },
    // orderMap(state){
    //   state.cart.forEach((item,index)=>{
    //     if(item.select){
    //       state.map[index].map = item.map
    //     }
    //   })
    // },
    orderCount(state) {
      state.orderCount = 0
      state.cart.forEach(item => {
        if (item.select) {
          state.orderCount++
        }
      })
    },
    orderPrice(state) {
      state.orderPrice = 0
      state.cart.forEach(item => {
        if (item.select) {
          state.orderPrice += (item.price * item.num)
        }
      })
    },
    totalPrice(state) {
      let price = 0
      state.cart.forEach(item => {
        if (item.select) {
          price += item.price
          price = price * item.num
        }
      })
      state.totalPrice = price
    },
    addCart(state, good) {
      let repetition = false
      if (state.cart.length + 1 == 1) {
        state.cart.push(good)
        state.count = state.cart.length
      } else {
        state.cart.forEach((item, index) => {
          if (item.id == good.id) {
            let obj = { ...state.cart[index] }
            obj.num++
            state.cart.splice(index, 1, obj)
            repetition = false

          } else {

            repetition = true

          }
        })
        if (repetition) {
          console.log('a')
          state.cart.push(good)
          state.count = state.cart.length
        }
        repetition = false
      }
    },
    addGoodNum(state, index) {
      let obj = { ...state.cart[index] }
      obj.num++
      state.cart.splice(index, 1, obj)
    },
    minusGoodNum(state, index) {
      if (state.cart[index].num - 1 < 1) {
        return
      } else {
        let obj = { ...state.cart[index] }
        obj.num--
        state.cart.splice(index, 1, obj)

      }
    },
    removeGood(state, index) {
      if (state.cart) {
        state.Select--
        state.count = state.cart.length
        state.cart.splice(index, 1);
      }
      if (state.cart.length==0) {
        state.count = 0
      }
    },
    toggleSelect(state, index) {
      if (state.cart[index].select) {
        let obj = { ...state.cart[index] }
        obj.select = false
        state.cart.splice(index, 1, obj)
        state.Select--

      } else {
        let obj = { ...state.cart[index] }
        obj.select = true
        state.cart.splice(index, 1, obj)
        state.Select++
      }
      for (let i = 0; i < state.cart.length; i++) {
        if (!state.cart[i].select) {
          state.checkAll = false
          break
        }
        if (state.cart[i].select) {
          state.checkAll = true
        }
      }
    },
    Select(state) {
      let i = 0;
      state.cart.forEach(item => {
        if (item.select) {
          i++
        }
      })
      state.Select = i
    },
    checkAll(state) {
      state.cart.forEach((item, index) => {
        let obj = { ...state.cart[index] }
        if (state.checkAll) {
          if (item.select) {
            obj.select = false
            state.cart.splice(index, 1, obj)
            state.Select--
          }
        } else {
          if (!item.select) {
            obj.select = true
            state.cart.splice(index, 1, obj)
            state.Select = state.cart.length
          }
        }
      })
      state.checkAll = !state.checkAll
    },
    one(state){
      state.one=false
    }
  },
  actions: {
    oneAsync({commit}){
      commit('one')
    },
    checkAllAsync({ commit }) {
      commit('checkAll')
    },
    addCartAsync({ commit }, good) {
      commit('addCart', good)
    },
    addGoodNumAsync({ commit }, index) {
      commit('addGoodNum', index)
    },
    minusGoodNumAsync({ commit }, index) {
      commit('minusGoodNum', index)
    },
    removeGoodAsync({ commit }, index) {
      commit('removeGood', index)
    },
    toggleSelectAsync({ commit }, index) {
      commit('toggleSelect', index)
    },
    SelectAsync({ commit }) {
      commit('Select')
    },
    totalPriceAsync({ commit }) {
      commit('totalPrice')
    },
    orderCountAsync({ commit }) {
      commit('orderCount')
    },
    orderPriceAsync({ commit }) {
      commit('orderPrice')
    },
    // orderMapAsync({commit}){
    //   commit('orderMap')
    // },
    setMapAsync({ commit }, obj) {
      commit('setMap', obj)
    },
    addMapAsync({ commit }, obj) {
      commit('addMap', obj)
    },
    edituserAsync({ commit }, obj) {
      commit('edituser', obj)
    },
    addordersAsync({ commit }, obj) {
      commit('addorders', obj)

    },
    addorderdetailAsync({ commit }, obj) {
      commit('addorderdetail', obj)
    },
    removecartAsync({ commit }) {
      commit('removecart')
    },
    editOrderMapAsync({ commit }, obj) {
      commit('editOrderMap', obj)
    },
    loginAsync({ commit }, obj) {
      let res = true
      if (res) {
        obj.userid = 1
        obj.name = '132123'
        obj.sex = '男'
        obj.phone = 234234
        obj.isLogin = true
        obj.micode = 234234
        // router.push({
        //   name:'home'
        // })
        router.go(-1)
      } else {
        obj = {}
        obj.isLogin = false
        alert('登入失败')
      }
      commit('login', obj)
    },
    LogoutAsync({ commit }) {
      commit('Logout')
    },
    createdCheckAllAsync({ commit }) {
      commit('createdCheckAll')
    }
  },
  modules: {
  }
})
