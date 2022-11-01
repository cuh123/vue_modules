<template>
    <section class="layout_container">
        <div class="contentWrap admin">
            <section class="content">
                <h2 class="ctTit">관리자 관리</h2>
                <div class="ctPath">HOME <i></i> 관리자 관리</div>
                <div class="ctBox">
                    <div class="ctBox_top">
                        <h3 class="ctTit_small">관리자 목록</h3>
                    </div>
                    <table class="tbl clearfix">
                        <colgroup>
                            <col style="width:5%">
                            <col>
                            <col>
                            <col>
                            <col>
                            <col>
                            <col>
                        </colgroup>
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>권한</th>
                                <th>ID</th>
                                <th>이름</th>
                                <th>연락처</th>
                                <th>담당 업무</th>
                                <th>등록 일시</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr @click="trClick(list)" v-for="list in lists" v-bind:key="list.no">
                                <td>{{ list.no }}</td>
                                <td v-if='list.auth === "AD"'>관리자</td>
                                <td v-else-if='list.auth === "NM"'>일반</td>
                                <td>{{ list.id }}</td>
                                <td>{{ list.name }}</td>
                                <td>{{ list.phone }}</td>
                                <td>{{ list.role }}</td>
                                <td>{{ list.create_dt }}</td>
                            </tr>

                            <tr v-if="this.flag === true">
                                <td colspan="7">등록된 관리자 정보가 없습니다.</td>
                            </tr>
                        </tbody>
                    </table>
                    <paging :page="page" @onPage="onPage" v-if="this.lists.length !== 0"/>
                </div>
            </section>
        </div>
    </section>
</template>

<script>
const $ = window.$;
import { mapState, mapActions } from 'vuex'
import paging from '@/components/board/paging'

export default {
    name: 'admin-main',
    components: {
        paging
    },
    data: () => ({
        page: {
            total: localStorage.getItem('total'),
            page: localStorage.getItem('page'),
            count: 20
        },
    }),
    computed: {
        ...mapState([
            'lists'
        ]),
    },
    mounted() {
        if(this.page.page === null) {
            this.page.page = 1
        }
        this.main(this.page.page)
    },
    methods: {
        main: function(page) {
            const payload = {
                page: page,
                count: this.page.count
            }

            this.adminList(payload)
                .then(res => {
                    this.page = res.data.page
                })
        },
        onPage: function(page) {
            this.main(page)
            localStorage.setItem('page', page)
        },
        ...mapActions(['adminList'])
    },
}
</script>

<style>
</style>
