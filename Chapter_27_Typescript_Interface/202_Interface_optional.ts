interface APIResponse {
    readonly body: string;
    readonly headers?: Record<string, string>;
    readonly responseCode?: number;
}

let AR: APIResponse = {
    body: "Success",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer token"
    },
    responseCode: 200
};
console.log("API Response Body:", AR.body);
//console.log("API Response Headers:", AR.headers);
console.log("API Response Code:", AR.responseCode); 