<template>
    <div style="width:100%;display:flex;flex-direction: column;justify-content: center;align-items: center;">
        <navication-bar></navication-bar>
        <div style="width:80%;padding: 3px 10px;display: flex;">
            <menu-tool></menu-tool>
            <register></register>
        </div>
        <footer-dev></footer-dev>
    </div>
</template>

<script>
import navicationBar from "@/components/navicationBar"
import menuTool from "@/components/menuTool"
import register from "@/components/register"
import footerDev from "@/components/footerDev"

export default {
    name:'develop',
    components: {
        navicationBar,
        menuTool,
        register,
        footerDev,
    },data () {
        return {
            
        }
    },
}
</script>

