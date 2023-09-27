exports.queryParamsConverter = (json) => {
    return new URLSearchParams(json).toString();
};