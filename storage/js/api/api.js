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

function userLogin(data = {}) {
    return request.post('v1/user/login', data);
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

/******************** 权限 API begin ***********************************************************************************/

function searchPermission(data = {}) {
    return request.get('v1/permission/search', data);
}

function createPermission(data = {}) {
    return request.post('v1/permission/create', data);
}

function updatePermission(data = {}) {
    return request.post('v1/permission/update', data);
}

function findPermission(data = {}) {
    return request.get('v1/permission/find', data);
}

function updatePermissionField(data = {}) {
    return request.post('v1/permission/update_field', data);
}

/******************** 权限 API end *************************************************************************************/

/******************** 角色 API begin ***********************************************************************************/

function searchRole(data = {}) {
    return request.get('v1/role/search', data);
}

function createRole(data = {}) {
    return request.post('v1/role/create', data);
}

function updateRole(data = {}) {
    return request.post('v1/role/update', data);
}

function findRole(data = {}) {
    return request.get('v1/role/find', data);
}

function updateuRoleField(data = {}) {
    return request.post('v1/role/update_field', data);
}

/******************** 角色 API end *************************************************************************************/