let cookie;

module.exports = {
    setCookie: (cookieIn) => {
        cookie = cookieIn
    },
    getCookie: () => cookie
};

