// https://dummyjson.com/posts

// use this  api and fetch from  this api show on webpage
// create it responsive for all the device
// add this project on github
// add live link on github as well





let api = "https://dummyjson.com/posts";

let container = document.getElementById("container");

async function dataFetch() {

    try {

        let res = await fetch(api);

        let data = await res.json();

        data.posts.forEach((item) => {

            let card = document.createElement("div");

            card.className = "card";

            card.innerHTML = `
            
                <h2>Post #${item.id}</h2>

                <h3>${item.title}</h3>

                <p>${item.body}</p>

                <p><strong>Views :</strong> ${item.views}</p>

                <p><strong>Likes :</strong> ${item.reactions.likes}</p>

                <p><strong>Dislikes :</strong> ${item.reactions.dislikes}</p>

                <div class="tags">
                    ${item.tags.map(tag => `<span>${tag}</span>`).join("")}
                </div>

            `;

            container.appendChild(card);

        });

    }

    catch(error){

        console.log(error);

    }

}

dataFetch();