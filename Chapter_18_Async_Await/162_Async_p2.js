function getToken() {
    return Promise.resolve("token");

}

async function getData() {
    let token = await getToken();
    console.log(token);


}

getData();