export const getCookie = (name) => {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length === 2) return parts.pop().split(";").shift();
    }

export const dropCookie = (name) => {
    document.cookie = `${name}= ; expires = Thu, 01 Jan 1970 00:00:00 GMT`
}