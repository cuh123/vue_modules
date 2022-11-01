<template>
    <footer>
        <h1>{{message}}</h1>
        <ul class="footer-ul">
            <li>copyright ⓒ 2020</li>
            <li>All right reserved</li>
        </ul>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    data: () => ({
        message: 'Footer 컴포넌트'
    })
}
</script>

<style>
    footer {
        width: 100%;
        height: 200px;
        position: absolute;
        background-color: #f2f4f7;
        text-align: center;
        left: 0;
        bottom: 0;
        z-index: 1;
    }
    h1 {
        padding: 20px 0px 10px;
        font-size: 20px;
    }
    
</style>