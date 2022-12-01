(function() {
    $(".monitor .tabs").on("click", "a", function() {
        $(this)
            .addClass("active")
            .siblings("a")
            .removeClass("active");

        // console.log($(this).index());
        //   选取对应索引号的content
        $(".monitor .content")
            .eq($(this).index())
            .show()
            .siblings(".content")
            .hide();
    });
    // 1. 先克隆marquee里面所有的行（row）
    $(".marquee-view .marquee").each(function() {
        // console.log($(this));
        var rows = $(this)
            .children()
            .clone();
        $(this).append(rows);
    });
})();
//饼状图
(function() {
    var myChart = echarts.init(document.querySelector('.pie'));
    option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        color: [
            "#006cff",
            "#60cda0",
            "#ed8884",
            "#ff9f7f",
            "#0096ff",
            "#9fe6b8",
            "#32c5e9",
            "#1d9dff"
        ],
        series: [{
            name: '面积模式',
            type: 'pie',
            radius: ['10%', '65%'],
            center: ['50%', '50%'],
            roseType: 'radius',
            data: [
                { value: 20, name: "云南" },
                { value: 26, name: "北京" },
                { value: 24, name: "山东" },
                { value: 25, name: "河北" },
                { value: 20, name: "江苏" },
                { value: 25, name: "浙江" },
                { value: 30, name: "四川" },
                { value: 42, name: "湖北" }
            ],
            // 修饰饼形图文字相关的样式 label对象
            label: {
                fontSize: 10
            },
            // 修饰引导线样式
            labelLine: {
                // 连接到图形的线长度
                length: 6,
                // 连接到文字的线长度
                length2: 8
            }
        }],

    };
    myChart.setOption(option)
})()