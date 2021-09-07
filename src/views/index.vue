<template>
    <div>
        {{name}}
    </div>
</template>

<script lang='ts'>
import {Vue,Component} from 'vue-property-decorator'
@Component
export default class Index extends Vue{
    private name:string = "Mclwh"
    private created(){

    }
    private mounted(){

    }
}
</script>

<style lang='scss' scoped>

</style>