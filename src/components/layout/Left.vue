<template>
  <section class="layout_leftMenu">
    <sidebar-menu class="leftMenu"
      :menu="treeData"
      :relative=true
      :hideToggle=true
      @item-click="reset()"/>
  </section>
</template>

<script>
export default {
  name: 'Left',
  data: () => ({
    message: 'Left 컴포넌트',
    treeData : [
      { href : '/admin',
        title : '관리자 관리'
      }
    ]
  }),
  methods: {
    reset: function() {
      localStorage.clear()
    }
  }
}
</script>
