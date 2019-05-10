<template>
    <div style="width:100%;display:flex;flex-direction: column;justify-content: center;align-items: center;">
        <div style="width:70%;padding: 3px 10px;display: flex;">
        <menu-tool></menu-tool>
        <router-view style="width: 850px;height: 525px;"></router-view>
    </div>
    <footer-dev></footer-dev>
    </div>
</template>

<script>
import menuTool from "@/components/menuTool"
import register from "@/components/register"
import footerDev from "@/components/footerDev"
import {
    mapState,
    mapGetters,
    mapMutations,
    mapActions
  } from "vuex";
export default {
    name:'mainBody',
    components: {
        menuTool,
        register,
        footerDev,
    },
    methods: {
        ...mapMutations(["logout"]),
      ...mapActions(["login"]),
    },
    mounted () {
        this.login();
    }
}
</script>

