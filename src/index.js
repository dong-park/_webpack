import Request from "./request";

const request = Request.init("http://localhost:8888/v1");
request.get("/public-common/policy")
    .then(response => {
        console.log(response);
    }).catch(error => {
        console.error(error);
    })