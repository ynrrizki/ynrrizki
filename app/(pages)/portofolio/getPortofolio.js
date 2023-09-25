import http from "../../utilities/http"

export async function getPortofolio(origin) {
    let url = origin + '/api/portofolio'
    const req = await http.get(url)
    return req.data
}