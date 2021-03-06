@extends('layouts.app')
@section('header')
    <li class="breadcrumb-item"><a href="/view/article/search">文章</a></li>
    <li class="breadcrumb-item active">更新</li>
@endsection
@section('content')
    <script src="/storage/js/validate/article.validate.js"></script>
    <script src="/storage/js/form/article.form.js"></script>

    <input name="id" type="hidden" value="{{ $id }}">

    <div class="row">
        <div class="col-12">
            <!-- /.card -->
            <!-- Horizontal Form -->
            <div class="card card-info">
                <!-- /.card-header -->
                <!-- form start -->
                <form class="form-horizontal" id="article-update" onsubmit="return false;">
                    <div class="card-body">
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">标题<span class="text-danger">*</span></label>
                            <div class="col-sm-10">
                                <input type="text" name="title" class="form-control" placeholder="标题">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">内容<span class="text-danger">*</span></label>
                            <div class="col-sm-10">
                                <textarea name="content" class="form-control" id="article-markdown" rows="10"></textarea>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">排序（升序）</label>
                            <div class="col-sm-10">
                                <input type="text" name="sort" class="form-control" placeholder="排序" value="99">
                            </div>
                        </div>
                    </div>
                    <!-- /.card-body -->
                    <div class="card-footer">
                        <button type="submit" class="btn btn-primary float-right" onclick="handleSubmit();">提交</button>
                    </div>
                    <!-- /.card-footer -->
                </form>
            </div>
            <!-- /.card -->
        </div>
    </div>

    <script type="text/javascript">
        var simplemde = getSimpleMDE("article-markdown");

        var data = findArticle({id : $('input[name=id]').val()});

        // 渲染表单数据
        renderUpdateForm(data, ['title', 'sort']);
        if (data !== false) {
            simplemde.value(data.content);
        }

        function handleSubmit()
        {
            if (validateArticleParam('article-update')) {
                var param   = assembleArticleFormParam(true)
                var data    = updateArticle(param)
                if (data !== false) {
                    pjaxToUrl('/view/article/search');
                }
            }
        }
    </script>
@endsection

