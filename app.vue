<template>

    <div class="layout">
        <Button shape="circle" icon="ios-search">Search</Button>
        <Header :style="{position: 'fixed', width: '100%'}">
            <Menu mode="horizontal" theme="dark" active-name="1">
                <div class="layout-logo">
                    <a href="/">
                        <img src="https://lccdn.phphub.org/uploads/sites/hG5JuDSqZ7Y26Kuh0Qat8EYv6XNT0fGc.png" alt="CYJ">
                    </a>
                </div>
                <div class="layout-nav">
                    <MenuItem name="1">
                       社区
                    </MenuItem>
                    <MenuItem name="2">
                        分类
                    </MenuItem>
                    <MenuItem name="3">
                       教程
                    </MenuItem>
                    <MenuItem name="4">
                       文档
                    </MenuItem>
                    <MenuItem name="4">
                        开源
                    </MenuItem>
                </div>

            </Menu>

        </Header>
        <Content>
            　

        </Content>
        <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
    </div>
</template>
<style scoped>

    .layout{
        border:1px solid #d7dde4;
        background: #f5f7f9;
        position:relative;
        border-radius: 4px;
        overflow:hidden;
    }
    .layout-logo img{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 12px;
        left: 559px;

    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
    }
    .layout-footer-center{
        text-align: center;
    }


</style>

<script>
    export default{
        components:{
            "directive":"my-directive"
        }

    }
</script>
