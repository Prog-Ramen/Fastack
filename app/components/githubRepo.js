
export function makeRepo(token, privateRepos){
    return fetch("https://api.github.com/user/repos", {
        method: 'POST',
        headers: {
            'Authorization' : 'token ' + token,
        },
        body: JSON.stringify({
            'name': 'newTestFastack',
            'auto_init': true,
            'private': privateRepos,
            'gitignore_template': 'nanoc'
        })
    })
        .then((response) => {
            const isValid = response.status < 400;
            const body = response._bodyInit;
            return response.json().then((json) => {
                if (isValid) {
                    console.log("success");
                    return "success";
                } else {
                    throw new Error(json.message);
                }
            });
        });
}

export function getPlan(token){
    return fetch("https://api.github.com/user", {
        method: 'GET',
        headers: {
            'Authorization' : 'token ' + token,
        }
    })
        .then((response) => {
            const isValid = response.status < 400;
            const body = response._bodyInit;
            return response.json().then((json) => {
                if (isValid) {
                    return json.plan;
                } else {
                    throw new Error(json.message);
                }
            });
        });
}