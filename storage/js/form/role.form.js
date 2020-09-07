/**
 * 组装表单参数
 *
 * @returns {{password: (jQuery|string|undefined), name: (jQuery|string|undefined), mobile: (jQuery|string|undefined), position: (jQuery|string|undefined), email: (jQuery|string|undefined)}}
 */
function assembleRoleFormParam(fromUpdate = false)
{
    var name    = $('input[name=name]').val();
    var sort    = $('input[name=sort]').val();
    var permission_id  = '';
    var permissionOptions = $('#rolePermissionSelect option:selected');
    if (permissionOptions.length > 0) {
        for (var i = 0; i < permissionOptions.length; i++) {
            permission_id += permissionOptions[i].value + ',';
        }
    }

    var retFromParam = {
        name : name,
        sort : sort,
    }
    if (permission_id !== '') {
        retFromParam.permission_id = permission_id.substr(0, permission_id.length - 1);
    }

    if (fromUpdate) {
        retFromParam.id = $('input[name=id]').val();
    }

    return retFromParam;
}

function renderPermissionSelect(permissionList, role = false)
{
    var html = '';

    var hadPermissionIdList = [];

    if (role !== false) {
        for (var i = 0; i < role.permission_list.length; i++) {
            hadPermissionIdList.push(role.permission_list[i].permission_id);
        }
    }

    if (permissionList !== false) {
        var list = permissionList.list;

        for (var i = 0; i < list.length; i++) {
            html += '<option value="' + list[i].id + '"';
            if (hadPermissionIdList.includes(list[i].id)) html += ' selected';
            html += '>';
            html += list[i].name;
            html += '</option>';
        }
    }

    $('#rolePermissionSelect').html(html);

    //Bootstrap Duallistbox
    $('.duallistbox').bootstrapDualListbox()
}

function renderMenuSelect(menuList)
{
    if (menuList !== false) {
        menuList = menuList.list;

        var menuSelecthtml = '';

        for (var i = 0; i < menuList.length; i++) {
            menuSelecthtml += '<div class="form-check">';
            menuSelecthtml += '<input class="form-check-input role-menu-pid-' + menuList[i].id + '" type="checkbox" onclick="menuPidClick(' + menuList[i].id + ')">';
            menuSelecthtml += '<label class="form-check-label">' + menuList[i].name + '</label>';
            menuSelecthtml += '</div>';

            for (var j = 0; j < menuList[i].sub_menu_list.length; j++) {
                menuSelecthtml += '<div class="form-check ml-4">';
                menuSelecthtml += '<input pid="' + menuList[i].id + '" class="form-check-input" type="checkbox" value="' + menuList[i].sub_menu_list[j].id + '" onclick="menuSubIdClick(this)">';
                menuSelecthtml += '<label class="form-check-label">' + menuList[i].sub_menu_list[j].name + '</label>';
                menuSelecthtml += '</div>';
            }
        }

        $('#role-menu-select').html(menuSelecthtml);
    }
}

/**
 * 父级菜单点击
 *
 * @param pid
 */
function menuPidClick(pid)
{
    var pidCheckedStatus = $('.role-menu-pid-' + pid).is(':checked');
    $('input[pid="' + pid + '"]').each(function (index, element) {
        if (pidCheckedStatus) {
            if (!$(element).is(':checked')) {
                $(element).click();
            }
        } else {
            if ($(element).is(':checked')) {
                $(element).click();
            }
        }
    });
}

function menuSubIdClick(obj = null)
{
    if (obj === null) return;
    console.log(obj.value);
}