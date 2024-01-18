const createHomePage = () => {
    const content = document.querySelector('#content');
    const homePageContent = document.createElement('div');
    homePageContent.classList.add('border-solid', 'border-2', 'rounded-lg', 'border-yellow-100', 'bg-yellow-100', 'flex-1', 'justify-center', 'items-center', 'mt-16', 'mx-auto', 'w-10/12', 'p-5', 'lg:w-4/12');
    homePageContent.innerHTML = `
        <h1 class="text-black text-3xl text-center lg:text-6xl">Gusto Italiano</h1>
        <p class="text-black text-center mt-4">
            Indulge your taste buds on a journey to culinary excellence at Gusto Italiano, where every dish is crafted with passion and expertise.
        </p>
        <div class="text-black text-center mt-4">
            <strong>Opening Hours:</strong><br>
            Monday: Closed<br>
            Tuesday: Closed<br>
            Wednesday: 6PM - 8PM<br>
            Thursday: 6PM - 8PM<br>
            Friday: 6PM - 10PM<br>
            Saturday: 6PM - 10PM<br>
            Sunday: 6PM - 8PM
        </div>
        <div class="text-black text-center mt-4">
            <strong>Address:</strong><br>
            Pylimo g.5, Vilnius
        </div>
        <p class="text-black text-center mt-4">
            Discover the perfect blend of tradition and innovation, ensuring a delightful dining experience for every palate. 
        </p>`;

    content.appendChild(homePageContent);
}

export default createHomePage;
