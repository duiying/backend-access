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