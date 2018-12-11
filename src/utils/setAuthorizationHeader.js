export const fetchWrapper = (url,data) =>{
    let headers = {"Content-Type": "application/json"};
    if (localStorage.token) {
        headers["Authorization"] = `Bearer ${localStorage.token}`;
    }
    return fetch(url, {
        method: 'post',
        headers:headers,
        body: JSON.stringify(data),
    });
};