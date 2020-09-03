/**
 * 组装表单参数
 *
 * @returns {{password: (jQuery|string|undefined), name: (jQuery|string|undefined), mobile: (jQuery|string|undefined), position: (jQuery|string|undefined), email: (jQuery|string|undefined)}}
 */
function assembleRoleFormParam(fromUpdate = false)
{
    var name    = $('input[name=name]').val();
    var admin   = $('input[name=admin]').is(':checked');
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
        admin : admin ? 1 : 0,
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

function renderPermissionSelect(data)
{
    var html = '';

    if (data !== false) {
        var list = data.list;

        for (var i = 0; i < list.length; i++) {
            html += '<option value="' + list[i].id + '">';
            html += list[i].name;
            html += '</option>';
        }
    }

    $('#rolePermissionSelect').html(html);

    //Bootstrap Duallistbox
    $('.duallistbox').bootstrapDualListbox()
}