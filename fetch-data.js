const fetchUserData = async () => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    const dataContainer = document.getElementById('api-data');

    try {
        const response = await fetch(apiUrl);
        const users = await response.json();

        dataContainer.innerHTML = '';

        const userList = document.createElement('ul');

        users.forEach(user => {
            const nameList = document.createElement('li');
            nameList.textContent = user;
            userList.appendChild(nameList);
        })
    } catch (error) {
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load data.';
    }
}

