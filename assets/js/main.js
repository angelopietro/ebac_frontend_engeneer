document.addEventListener('DOMContentLoaded', () => {
    try {
        const username = 'angelopietro';
        const url = `https://api.github.com/users/${username}`;
        const profileAvatar = document.querySelector('#profileAvatar');
        const profileName = document.querySelector('#profileName');
        const profileUserName = document.querySelector('#profileUserName');
        const totalPublicRepositories = document.querySelector('#totalPublicRepositories');
        const totalFollowers = document.querySelector('#totalFollowers');
        const totalFollowing = document.querySelector('#totalFollowing');
        const profileUrl = document.querySelector('#profileUrl');

        fetch(url)
            .then(res => res.json())
            .then(data => {
                profileUserName.innerText = data.name;
                profileAvatar.src = data.avatar_url;
                profileName.innerText = data.name;
                profileUserName.innerText = `@${data.login}`;
                totalPublicRepositories.innerText = data.public_repos;
                totalFollowers.innerText = data.followers;
                totalFollowing.innerText = data.following;
                profileUrl.href = data.html_url;
            });
    } catch (error) {
        const displayError = document.querySelector('#displayError');
        displayError.innerText = `${error.message}`;
    }
});
