const id = window.location.pathname.split('/')[2];
const url =`http://localhost:3000/api/dogs/${id}`;

const getData = () => {
    return fetch(url)
        .then(res => res.json())
        .then(res => {
            document.querySelectorAll(".dog")[0].innerHTML = `
                <h3 class="name"><a href="/dogs/${res.dog.id}">${res.dog.name}</a></h3>
                <img class="profile-picture" src="/${res.dog.profilePicture}" alt="${res.dog.name}"/>
                <p class="bio">${res.dog.bio}</p>`;
        })
        .catch(err => console.error(err));
}

getData();