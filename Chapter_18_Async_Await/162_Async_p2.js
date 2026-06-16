function getToken() {
    return Promise.resolve("token");

}

async function getdata() {
    let token = await getToken();
    console.log(token);


}

getdata();