介绍：
    tab组件...
1.使用方式

引入方式：
    1.拷贝到组件中
    2.加载方式
        import Vue from "vue"
        import Tabs from "tab"
        Vue.use(Tabs)
    3.使用规范
        <tabs :value="value" @events="getEvent">
            <tab label="导航1" index="1">
                <div></div>
            </tab>
            <tab label="导航2" index="2">
                <div></div>
            </tab>
            <tab label="导航3" index="3">
                <div></div>
            </tab>
        </tabs>