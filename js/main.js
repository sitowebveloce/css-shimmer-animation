// Select DOM element
const container = document.querySelector('.container');
const title = document.querySelector('.title');
// Capitalize
const capitalize = sentence => {
    if (typeof sentence !== "string") return sentence

    return sentence.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
};
// FETCH POSTS FUNCTIONS
const fetchPosts = async() => {
    // Define url
    let url = 'https://jsonplaceholder.typicode.com/posts';
    // Fetch promise
    let postsRequest = await fetch(url);
    res = await postsRequest.json();
    console.log(res);
    title.innerHTML = 'Loading';
    // Loop through the result and add values
    res.forEach(e => {
        // Create article element
        let articleEl = document.createElement('article');
        // Add black class
        articleEl.classList.add('black');
        // Set inner html
        articleEl.innerHTML = `
        <div class='a-id-s'>Id</div>
        <h1 class='a-t-s'></h1>
        <p class='a-p-s'></p>
        <div class="shimmer"><span></span></div>
        `;
        // Append to the container
        container.prepend(articleEl);
    });
    // Show result after 5s
    setTimeout(() => {
        // Clear container before append
        container.innerHTML = '';
        // Loop through the result and add values
        res.forEach(e => {
            // Create article element
            let articleEl = document.createElement('article');
            articleEl.innerHTML = `
            <div class='id'>${e.id}</div>
            <h1>${capitalize(e.title.substring(0,13))}</h1>
            <p>${capitalize(e.body)}</p>
            `;
            // Append inside the container
            container.prepend(articleEl);
            // Change 
            title.innerHTML = 'Blog Veloce';
        });
    }, 6000);

};
// Run fetch
fetchPosts();