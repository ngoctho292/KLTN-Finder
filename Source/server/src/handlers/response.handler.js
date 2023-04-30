const responseWithData = (res, statusCode, data) => {
    res.status(statusCode).json(data)
}

const error = (res, message) =>
    responseWithData(res, 500, {
        statusCode: 500,
        message,
    });

const badrequest = (res, message) => responseWithData(res, 400, {
    statusCode: 400,
    message
})

const ok = (res, data) => responseWithData(res, 200, data)

const created = (res, data, message) => responseWithData(res, 201, data, message);

const unauthorize = (res) => responseWithData(res, 401, {
    statusCode: 401,
    status: "Unauthorized!",
    message: ["Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại!"]
})

const notfound = (res, message) =>
    responseWithData(res, 404, {
        statusCode: 404,
        message,
    });

export default {
    ok,
    created,
    notfound,
    badrequest,
    error,
    unauthorize
}