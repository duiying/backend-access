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

/******************** 管理员 API end ***********************************************************************************/