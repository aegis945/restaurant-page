const createNavBar = () => {
    document.body.classList.add("bg-[url('/src/images/restaurant.jpg')]", "bg-cover", "bg-bottom", "h-screen","font-body");
    const content = document.querySelector('#content');
    const navBar = document.createElement('nav');
    navBar.classList.add('flex', 'justify-center');
    navBar.innerHTML = `
        <ul class="flex justify-center gap-28 bg-yellow-100 bg-opacity-70 w-screen py-1.5">
            <li id="home" class="text-black hover:cursor-pointer text-lg">Home</li>
            <li id="menu" class="text-black hover:cursor-pointer text-lg">Menu</li>
            <li id="contact" class="text-black hover:cursor-pointer text-lg">Contact</li>
        </ul>`;

    content.appendChild(navBar);
}

export default createNavBar;
