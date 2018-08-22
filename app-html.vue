<template>
    <div role="navigation" class="navbar navbar-default">
        <div class="container">
            <!-- <div class="navbar-header">
 　　　　　　　　　&lt;!&ndash;　<button type="button" class="navbar-toggle"></button>&ndash;&gt;
                 <a href="/" class="navbar-brand">
                     <img src="https://lccdn.phphub.org/uploads/sites/hG5JuDSqZ7Y26Kuh0Qat8EYv6XNT0fGc.png" alt="CYJ">
                 </a>
             </div>-->
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li>
                        <a tabindex="-1" href="https://laravel-china.org/topics">社区</a>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle">分类</a>
                    </li>

                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle">教程</a>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle">文档</a>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle">开源</a>
                    </li>

                </ul>

            </div>

        </div>
    </div>
</template>
<script>
    import $ from './libs/util';
    import Item from './components/item.vue';

    export default{
        components:{
            Item
        },
        data(){
            return{
                themes:[],
                showThemes:false,
                type:'recommend',
                themeId:0
            }
        },
        methods:{
            getThemes(){
                $.ajax.get('themes').then(res =>{
                    this.themes = res.others;
                })
            }
        },
        mounted(){
            this.getThemes();
        }
    }
</script>
<style scoped>
    .navbar-default {
        border-top: 4px solid #f46660;
        height: auto;
        background-color: #fff;
        min-height: 45px;
    }
    .navbar{
        margin-bottom:32px;
    }

    .container{
        width:1200px;
    }
    .navbar-toggle{
        postion:relative;
    }
    .navbar-brand img{
        width: 128px;
        height: 16px;
    }
    .navbar-collapse{
        display:block;
        height:auto;
        padding-bottom: 0;
    }

    .navbar-nav{
        float:left;
        margin:0;
        margin-left: 141px;
        margin-top: 9px;
    }

    .navbar-nav > li{
        float:left;
        position:relative;
        display: block;
    }

    .navbar-nav > li > a{
        padding:15px 15px 9px;
        text-decoration: none;
        line-height: 28px;
        color: inherit;
    }

</style>