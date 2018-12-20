export const fetchWrapper = (url,data,method) =>{
    let headers = {"Content-Type": "application/json"};
    if (localStorage.token) {
        headers["Authorization"] = `Bearer ${localStorage.token}`;
    }
    return fetch(url, {
        method: method,
        headers:headers,
        body: JSON.stringify(data),
    });
};