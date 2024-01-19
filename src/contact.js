const createContactPage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.id = 'pageContent';
    pageContent.classList.add('border-solid', 'border-2', 'rounded-lg', 'border-yellow-100', 'bg-yellow-100', "bg-opacity-70", 'flex-1', 'justify-center', 'items-center', 'mt-16', 'mx-auto', 'p-5', 'w-4/5','lg:w-3/5');
    pageContent.innerHTML = `
    <h1 class="text-black text-3xl text-center lg:text-4xl font-semibold">Gusto Italiano</h1>
    <div class="text-black text-center mt-4">Pylimo g. 5, Vilnius</div>
    <div class="text-black text-center mt-2">Contact us</div>
    <p class="text-black text-center">Phone +370123456789 <br></p>
    <iframe class="w-10/12 mx-auto h-96 mt-5" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2306.533079620996!2d25.2743345769734!3d54.6826462739056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd9412386b686f%3A0xb41f390ae213dd65!2sPylimo%20g.%205%2C%2003107%20Vilnius!5e0!3m2!1sen!2slt!4v1705688205864!5m2!1sen!2slt" style="border:0;" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    content.appendChild(pageContent);
}

export default createContactPage;