var titles = document.getElementsByClassName('title');


// for(i=0; i<titles.length;i++)
// {
//     console.log(titles[i]);
// }
//const wrap = document.querySelector('#book-list li:nth-child(2) .name');

//console.log(books);
//Array.from(books).forEach(function(item){item.textContent+='(book title)';})
//const band = document.querySelector('#book-list');
// const booklist = document.querySelector('#book-list');
// const addbook = document.querySelector('#add-book');
// console.log(band.nodeName);
//console.log(booklist.nodeType);
//console.log(band.nextElementSibling);

//one way to delete a book
// var btn = document.querySelectorAll('#book-list .del');
// Array.from(btn).forEach(function(item)
// {
//     item.addEventListener('click', function(e)
//     {
//         e.target.parentElement.remove();
//     });
// });

//other way to delete a book
const list = document.querySelector('#book-list ul');
list.addEventListener('click',function(e)
{
    if(e.target.className == 'del')
    {
        const li=e.target.parentElement;
        list.removeChild(li);
    }
})

//add a new book
const addbook = document.forms['add-book'];
addbook.addEventListener('submit', function(e)
{
    e.preventDefault();
    const val = addbook.querySelector('input[type="text"]').value;
    //console.log(val);
     
    //create elements
    const li = document.createElement('li');
    const bookname = document.createElement('span');
    const delbook = document.createElement('span');
    
    bookname.textContent = val;
    delbook.textContent = 'Delete';

    bookname.classList.add('name');
    delbook.classList.add('del');

    li.appendChild(bookname);
    li.appendChild(delbook);
    list.appendChild(li);

    addbook.querySelector('input[type="text"]').value = '';
})

//hide booklist
const hidebook = document.querySelector('#hide');
hidebook.addEventListener('change', function(e)
{
    if(hidebook.checked)
    {
        addbook.querySelector('label').textContent='Show all books';
        list.style.display = "none";    
    }
    else
    {
        addbook.querySelector('label').textContent='Hide all books';
        list.style.display = "initial";
    }
})

const search = document.forms['books'].querySelector('input');
search.addEventListener('keyup',function(e)
{
    const term = e.target.value.toLowerCase();
    const item = list.getElementsByTagName('li');
    Array.from(item).forEach(function(e)
    {
        const title = e.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term)!=-1)
        {
            e.style.display="block";
        }
        else
        {
            e.style.display="none";
        }
    })

})

//const tabs = document.querySelector('.tabs');
//const panels = document.querySelectorAll('.panel');
// // tabs.addEventListener('click',function(e)
// // {
// //     if(e.target.tagName == "LI")
// //     {
// //         const targetpanel = document.querySelector(e.target.dataset.target);
// //         panels.forEach(function(panel)
// //         {
// //             if(panel == targetpanel)
// //             {
// //                 panel.classList.add('active');
// //             }
// //             else
// //             {
// //                 panel.classList.remove('active');
// //             }
// //         })
// //     }
// })
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
document.title = 123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);





