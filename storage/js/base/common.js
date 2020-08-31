const DEFAULT_P         = 1;
const DEFAULT_SIZE      = 2;

function closeModal()
{
    $('#modal-template').css('display', 'none');
    $("#modal-template").css('background-color', '');
}

function showModal()
{
    $('#modal-template').css('display', 'block');
    $("#modal-template").css('background-color', 'rgba(0,0,0,.6)');
}

function handleDeleteCallback(callback)
{
    showModal();

    $('#doConfirmDelete').bind('click', function () {
        callback();
        closeModal();
    })
}

function renderPage(data)
{
    if (data !== false && data.total != 0) {
        // 总页码
        var totalPageNum = Math.ceil(data.total / data.size);

        data.p      = parseInt(data.p);
        data.size   = parseInt(data.size);
        data.total  = parseInt(data.total);

        $('#pagination-total').html('总共&nbsp;&nbsp;<span style="color:#007bff;">' + data.total + '</span>&nbsp;&nbsp;条数据</div>');

        var pageHtml = '';

        if (data.p == 1) {
            pageHtml += '<li class="page-item disabled"><a class="page-link">&laquo;</a></li>';
        } else {
            pageHtml += '<li class="page-item" onclick="handleSearch(' + (data.p - 1) + ')"><a class="page-link">&laquo;</a></li>';
        }

        // 11 页以内
        if (totalPageNum <= 11) {
            for (var i = 1; i <= totalPageNum; i++) {
                pageHtml += '<li class="page-item"><a class="page-link" onclick="handleSearch($(this).html())">' + i + '</a></li>';
            }
        }
        // 大于 11 页
        else {
            if (data.p <= 6) {
                for (var i = 1; i <= 9; i++) {
                    pageHtml += '<li class="page-item"><a class="page-link" onclick="handleSearch($(this).html())">' + i + '</a></li>';
                }
                pageHtml += '<li class="page-item disabled"><a class="page-link">' + '...' + '</a></li>';

                for (var i = totalPageNum - 1; i <= totalPageNum; i++) {
                    pageHtml += '<li class="page-item"><a class="page-link" onclick="handleSearch($(this).html())">' + i + '</a></li>';
                }
            } else if (data.p >= totalPageNum - 5) {
                for (var i = 1; i <= 2; i++) {
                    pageHtml += '<li class="page-item"><a class="page-link" onclick="handleSearch($(this).html())">' + i + '</a></li>';
                }
                pageHtml += '<li class="page-item disabled"><a class="page-link">' + '...' + '</a></li>';
                for (var i = totalPageNum - 8; i <= totalPageNum; i++) {
                    pageHtml += '<li class="page-item"><a class="page-link" onclick="handleSearch($(this).html())">' + i + '</a></li>';
                }
            } else {
                for (var i = 1; i <= 2; i++) {
                    pageHtml += '<li class="page-item"><a class="page-link" onclick="handleSearch($(this).html())">' + i + '</a></li>';
                }
                pageHtml += '<li class="page-item disabled"><a class="page-link">' + '...' + '</a></li>';

                for (var i = data.p - 3; i <= data.p + 3; i++) {
                    console.log(data.p + 3);
                    pageHtml += '<li class="page-item"><a class="page-link" onclick="handleSearch($(this).html())">' + i + '</a></li>';
                }

                pageHtml += '<li class="page-item disabled"><a class="page-link">' + '...' + '</a></li>';

                for (var i = totalPageNum - 1; i <= totalPageNum; i++) {
                    pageHtml += '<li class="page-item"><a class="page-link" onclick="handleSearch($(this).html())">' + i + '</a></li>';
                }
            }
        }

        if (data.next == 1) {
            pageHtml += '<li class="page-item" onclick="handleSearch(' + (data.p + 1) + ')"><a class="page-link">&raquo;</a></li>';
        } else {
            pageHtml += '<li class="page-item disabled"><a class="page-link">&raquo;</a></li>';
        }

        $('.card-footer > .pagination').html(pageHtml);

        $('.card-footer > .pagination > .page-item').each(function (index, element) {
            $(element).removeClass('active')
            if ($(element).children('.page-link').html() == data.p) {
                $(element).addClass('active')
            }
        });

        $('.card-footer > .pagination > .page-item > .page-link').css('cursor', 'pointer').css('color', '#007bff');
        $('.card-footer > .pagination > .disabled > .page-link').css('color', '#000');
        $('.card-footer > .pagination > .active > .page-link').css('color', '#fff');
    }
}

function renderUpdateForm(data, columns)
{
    if (data !== false) {
        for (var i = 0; i < columns.length; i++) {
            $('input[name=' + columns[i] + ']').val(data[columns[i]]);
        }
    }
}

function renderList(id, data, columns, options = {'update' : false, 'delete' : false, 'update_url' : '/view/user/update'})
{
    if (data !== false) {
        $('#' + id).html('');
        var html = '';
        var list = data.list;
        for (var i = 0; i < list.length; i++) {
            html += '<tr>';
            for (var j = 0; j < columns.length; j++) {
                html += '<td>' + list[i][columns[j]] + '</td>';
            }

            if (options.update === true || options.delete === true) {
                html += '<td>';

                if (options.update === true) html += '<a href="' + options.update_url + '?id=' + list[i].id + '"><i class="fas fa-edit"></i></a>';
                if (options.delete === true) html += '<a href="javascript:;" class="ml-2" onclick="handleDelete(' + list[i].id + ')"><i class="fas fa-trash"></i></a>';

                html += '</td>';
            }

            html += '</tr>';
        }
        $('#' + id).html(html);
    }
}

function handleErrorPlacement(error, element)
{
    error.addClass('invalid-feedback col-sm-10');
    element.closest('.form-group').append('<label class="col-sm-2 col-form-label"></label>');
    element.closest('.form-group').append(error);
}

function handleHighlight(element, errorClass, validClass)
{
    $(element).addClass('is-invalid');
}

function handleUnHighlight(element, errorClass, validClass)
{
    $(element).removeClass('is-invalid');
}

function pjaxToUrl(url)
{
    $.pjax({ url: url, container: '#pjax-container' });
}