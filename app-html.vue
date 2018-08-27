<template>
    <div>
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
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="300" data-close-others="true" aria-expanded="false">分类
                                <b class="caret"></b>
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <a tabindex="-1" href="https://laravel-china.org/wikis"> 社区 Wiki</a>
                                    <!-- <i class="fa fa-wikipedia-w"></i>-->
                                </li>
                                <li>
                                    <a tabindex="-1" href="https://laravel-china.org/c/qa"></a>
                                </li>
                                <li>
                                    <a tabindex="-1" href="https://laravel-china.org/c/php-jobs"></a>
                                </li>
                                <li>
                                    <a tabindex="-1" href="https://laravel-china.org/c/hunt"></a>
                                </li>
                                <li></li>
                                <li></li>
                            </ul>
                        </li>

                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle">教程
                                <b class="caret"></b>
                            </a>
                        </li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle">文档
                                <b class="caret"></b>
                            </a>
                        </li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle">开源
                                <b class="caret"></b>
                            </a>
                        </li>

                    </ul>

                </div>

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

    .caret{
        display:inline-block;
        width:0;
        height:0;
        margin-left:2px;
        vertical-align: middle;
        border-top:4px dashed;
        border-right:4px solid  transparent;
        border-left:4px solid transparent;
    }

    .dropdown{

    }
    .dropdown-toggle{

    }

</style>