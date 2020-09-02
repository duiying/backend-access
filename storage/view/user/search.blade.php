@extends('layouts.app')
@section('header')
    <li class="breadcrumb-item active">管理员</li>
@endsection
@section('content')
    <script src="/storage/js/validate/user.validate.js"></script>
    <script src="/storage/js/form/user.form.js"></script>

    <div class="card">
        <div class="card-header">
            <form id="user-search" onsubmit="return false;">
                <div class="row">

                    <div class="input-group-append mr-1">
                        <a href="/view/user/create"><button type="button" class="btn btn-block btn-outline-primary"><i class="fas fa-plus"></i></button></a>
                    </div>
                    <div class="col-3">
                        <input type="text" name="name" class="form-control" placeholder="姓名">
                    </div>
                    <div class="col-3">
                        <input type="text" name="email" class="form-control" placeholder="邮箱">
                    </div>
                    <div class="col-3">
                        <input type="text" name="mobile" class="form-control" placeholder="手机号">
                    </div>
                    <div class="input-group-append ml-1">
                        <button type="submit" onclick="handleSearch();" class="btn btn-block btn-outline-primary"><i class="fas fa-search"></i></button>
                    </div>
                </div>
            </form>
        </div>
        <!-- /.card-header -->
        <div class="card-body table-responsive p-0">
            <table class="table table-hover text-nowrap">
                <thead>
                <tr>
                    <th style="width: 50px">ID</th>
                    <th style="width: 150px">姓名</th>
                    <th style="width: 150px">邮箱</th>
                    <th style="width: 150px">手机号</th>
                    <th style="width: 150px">创建时间</th>
                    <th style="width: 150px">更新时间</th>
                    <th style="width: 150px">职位</th>
                    <th style="width: 150px">操作</th>
                </tr>
                </thead>
                <tbody id="user-list">
                <tr>
                </tr>
                </tbody>
            </table>
        </div>
        <!-- /.card-body -->

        <div class="card-footer clearfix" id="pagination">
            <div class="float-left" id="pagination-total"></div>
            <ul class="pagination pagination-sm m-0 float-right">

            </ul>
        </div>
    </div>
    <!-- /.card -->
    <script type="text/javascript">
        // 首次加载页面渲染列表
        renderUserList();

        /**
         * 渲染列表
         *
         * @param param
         */
        function renderUserList(param = {p : DEFAULT_P, size : DEFAULT_SIZE, status : 1})
        {
            var data = searchUser(param);
            renderList('user-list', data, ['id', 'name', 'email', 'mobile', 'ctime', 'mtime', 'position'], {'update' : true, 'delete' : true, 'update_url' : '/view/user/update'})
            renderPage(data);
        }

        /**
         * 搜索处理
         *
         * @param p 页码
         */
        function handleSearch(p = 1)
        {
            handleSearchCallback(function () {
                var searchParam = assembleUserSearchParam(p);
                renderUserList(searchParam);
            });
        }

        function handleDelete(id)
        {
            handleDeleteCallback(function () {
                var param   = {id : id, status : -1}
                var data    = updateUserField(param)
                if (data !== false) {
                    renderUserList();
                }
            });
        }
    </script>
@endsection

