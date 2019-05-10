<template>
    <div style="width:100%;display:flex;flex-direction: column;justify-content: center;align-items: center;">
        <navication-bar style="position: sticky;z-index: 1000;top: 0px;"></navication-bar>
        <router-view></router-view>
    </div>
</template>

<script>
import navicationBar from "@/components/navicationBar"
import menuTool from "@/components/menuTool"
import register from "@/components/register"
import footerDev from "@/components/footerDev"
import other from "@/components/other"

export default {
    name:'develop',
    components: {
        navicationBar,
        menuTool,
        register,
        footerDev,
        other,
    },data () {
        return {
            
        }
    },
}
</script>

