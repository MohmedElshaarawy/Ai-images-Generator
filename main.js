const api = "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";
const input = document.getElementById("send");
const images =document.querySelector('.images');

const getIamge = async () => {
    // make a request to apenia  Api
    const methods = {
        method:"POST",
        headers: {
            "Content-Type":"application/json",
            "Authorization":`Bearer ${api}`
        },
        body:JSON.stringify(
            {
                "prompt":input.value,
                "n":3,
                "size":"256x256"
            }
        )
    }
    const res = await fetch("https://api.openai.com/v1/images/generations" ,methods )

    // parse the response as json
    const data = await res.json()
    const listImages = data.data;
    images.innerHTML= '';
    listImages.map(photo => {
        const container = document.createElement("div");
        images.append(container);
        const img = document.createElement("img");
        container.append(img);
        img.src = photo.url
    })
}
