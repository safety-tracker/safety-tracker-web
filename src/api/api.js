export const api_url = "https://blooming-coast-08475.herokuapp.com/http://191.252.120.78:7878/"

export const default_headers = {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Access-Control-Allow-Origin': '*'
}

export function get_counties(province, callback) {
    if(province === "") return
    const url = api_url + "counties?province=" + province;
    console.log(url);
    fetch(url, { headers: default_headers, method: "GET", 
    }).then(resp => resp.json()).then(json => callback(json))
}

export function get_brs(province, callback) {
    if(province === "") return
    fetch(api_url + "brs?province=" + province, { headers: default_headers, method: "GET", 
    }).then(resp => resp.json()).then(json => callback(json))
}

export function classify(data, callback) {

}