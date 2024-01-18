const createNavBar = () => {
    const content = document.querySelector('#content');
    content.classList.add("bg-[url('/src/images/restaurant.jpg')]", 'bg-cover', "h-screen", "bg-bottom", "lg:bg-bottom");
    const navBar = document.createElement('nav');
    navBar.classList.add('flex', 'justify-center');
    navBar.innerHTML = `
        <ul class="flex justify-center gap-32 bg-yellow-100 w-screen py-1.5">
            <li class="text-black hover:cursor-pointer text-lg">Home</li>
            <li class="text-black hover:cursor-pointer text-lg">Menu</li>
            <li class="text-black hover:cursor-pointer text-lg">Contact</li>
        </ul>`;

    content.appendChild(navBar);
}

export default createNavBar;
