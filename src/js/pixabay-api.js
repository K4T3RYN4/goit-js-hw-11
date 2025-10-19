import axios from "axios";

getImagesByQuery('cat')

export function getImagesByQuery(query) {
    axios.get("https://pixabay.com/api/", {
        params: {
            key: "52839812-b4c86bdfff86c9a3d984b9ce5",
            q: query,
            image_type: photo,
            orientation: horizontal,
            safesearch: true
        }
    })
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err.message)
        })
}
