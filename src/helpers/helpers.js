
export const verifyEmail = str => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(str);
}

export const verifyPassword = str => {
    return str.length < 8 ? false : true
};