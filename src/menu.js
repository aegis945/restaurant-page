const createMenuPage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.id = 'pageContent';
    pageContent.classList.add('border-solid', 'border-2', 'rounded-lg', 'border-yellow-100', 'bg-yellow-100', "bg-opacity-70", 'flex-1', 'justify-center', 'items-center', 'mt-12', 'pb-10', 'mx-auto', 'p-4', 'w-4/5','lg:w-3/5' ,'h-fit');

    const menuHeading = document.createElement('div');
    menuHeading.classList.add('text-2xl', 'text-center', 'mb-3');
    menuHeading.textContent = 'Menu';
    pageContent.appendChild(menuHeading);
    
    content.appendChild(pageContent);
    initializeMenu(pageContent);
}

const initializeMenu = (pageContent) => {
    const menu = [
        {
            name: "Gnocchi with ragu",
            price: "7€",
            description: "Soft potato dumplings served with a rich and savory meat-based ragu sauce",
        },
        {
            name: "Trofie with pesto",
            price: "9€",
            description: "Spiral-shaped pasta paired with a flavorful and aromatic basil pesto sauce",
        },
        {
            name: "Gnocchi with sugo di noci",
            price: "7€",
            description: "Gnocchi dressed in a walnut-based sauce, offering a delightful nutty flavor",
        },
        {
            name: "Parmigiana di melanzane",
            price: "8€",
            description: "Layers of eggplant, tomato sauce, and cheese baked to perfection, creating a savory and satisfying dish",
        },
        {
            name: "Pasta beans and trippa",
            price: "6€",
            description: "A hearty dish featuring pasta, beans, and tripe, offering a flavorful and comforting combination",
        },
        {
            name: "Gorgonzola plin butter and sage",
            price: "8€",
            description: "Plin-style pasta filled with creamy Gorgonzola cheese, served with butter and sage for a rich and indulgent taste",
        },
        {
            name: "Carbonara ravioli with butter and pecorino",
            price: "10€",
            description: "Ravioli filled with a decadent carbonara mixture, served with butter and Pecorino cheese",
        },
        {
            name: "Tagliatelle with ragu",
            price: "7€",
            description: "Long, flat ribbons of pasta served with a hearty and flavorful meat-based ragu sauce",
        }
    ];

    menu.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('grid', 'grid-cols-5', 'auto-rows-auto' ,'text-center', 'items-center', 'gap-1');
        menuItem.innerHTML = `
        <hr class="h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50 col-span-5" />
        <p class="col-span-2 py-2">${item.name}</p>
        <p class="col-span-2 py-2">${item.description}</p>
        <p class="py-2">${item.price}</p>`;
        
        pageContent.appendChild(menuItem);
    });
}

export default createMenuPage;