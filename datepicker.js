$("div.input-daterange").each(function(){
    var $inputs = $(this).find('input');
    $inputs.datepicker();
    if ($inputs.length >= 2) {
        var $from = $inputs.eq(0);
        var $to   = $inputs.eq(1);
        $from.on('changeDate', function (e) {
            var d = new Date(e.date.valueOf());
            $to.datepicker('setStartDate', d); // 종료일은 시작일보다 빠를 수 없다.
        });
        $to.on('changeDate', function (e) {
            var d = new Date(e.date.valueOf());
            $from.datepicker('setEndDate', d); // 시작일은 종료일보다 늦을 수 없다.
        });
    }
})