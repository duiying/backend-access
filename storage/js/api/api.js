/******************** 管理员 API begin *********************************************************************************/

function searchUser(data = {}) {
    return request.get('v1/user/search', data);
}

function findUser(data = {}) {
    return request.get('v1/user/find', data);
}

function createUser(data = {}) {
    return request.post('v1/user/create', data);
}

function updateUser(data = {}) {
    return request.post('v1/user/update', data);
}

function updateUserField(data = {}) {
    return request.post('v1/user/update_field', data);
}

/******************** 管理员 API end ***********************************************************************************/

/******************** 菜单 API begin ***********************************************************************************/

function searchMenu(data = {}) {
    return request.get('v1/menu/search', data);
}

function createMenu(data = {}) {
    return request.post('v1/menu/create', data);
}

function updateMenu(data = {}) {
    return request.post('v1/menu/update', data);
}

function findMenu(data = {}) {
    return request.get('v1/menu/find', data);
}

function updateMenuField(data = {}) {
    return request.post('v1/menu/update_field', data);
}

/******************** 菜单 API end *************************************************************************************/