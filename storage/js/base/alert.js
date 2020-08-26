var alert = {
    success : function (msg = '操作成功！') {
        toastr.success(msg);
    },
    error : function (msg = '操作失败！') {
        toastr.error(msg);
    },
}