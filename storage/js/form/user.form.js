/**
 * 组装表单参数
 *
 * @returns {{password: (jQuery|string|undefined), name: (jQuery|string|undefined), mobile: (jQuery|string|undefined), position: (jQuery|string|undefined), email: (jQuery|string|undefined)}}
 */
function assembleFormParam(fromUpdate = false)
{
    var name        = $('input[name=name]').val();
    var mobile      = $('input[name=mobile]').val();
    var email       = $('input[name=email]').val();
    var position    = $('input[name=position]').val();
    var password    = $('input[name=password]').val();

    var retFromParam = {
        name : name,
        mobile : mobile,
        email : email,
        position : position,
        password : password,
    }

    if (fromUpdate) {
        retFromParam.id = $('input[name=id]').val();
    }

    return retFromParam;
}

function assembleSearchParam(p)
{
    var name        = $('input[name=name]').val();
    var mobile      = $('input[name=mobile]').val();
    var email       = $('input[name=email]').val();

    var searchParam = {
        p       : DEFAULT_P,
        size    : DEFAULT_SIZE,
    };
    if (p !== 0) searchParam.p = p;

    if (name !== '')        searchParam.name = name;
    if (mobile !== '')      searchParam.mobile = mobile;
    if (email !== '')       searchParam.email = email;

    return searchParam;
}