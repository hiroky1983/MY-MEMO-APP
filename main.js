const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.getElementById('modal');
const text = document.querySelector('input');
const exp = document.querySelector('textarea');

open.addEventListener('click', () => {
  modal.classList.remove('hidden');
  text.focus();
});

close.addEventListener('click', () => {
  modal.classList.add('hidden');
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  const inputTitle = document.getElementById('input-title').value;
  li.textContent = inputTitle;
  ul.appendChild(li);
  // const newMemo = document.getElementById('newMemo');
  // const Elements = newMemo.getElementsByTagName('li'); 
  const Elements = ul.querySelectorAll('li'); 
  const lists = Array.prototype.slice.call(Elements);

  
  function compareText (a,b) {
    if (a.textContent > b.textContent)
        return 1;
    else if (a.textContent < b.textContent)
        return -1;
    return 0;
    }
  lists.sort(compareText);

  for (let i=0; i<lists.length; i++) {
    ul.appendChild(ul.removeChild(lists[i]))
  }

  // const lists = [];
  // lists.push(add);
  // lists.sort((a,b) => {
  //    a.toLowerCase(value) < b.toLowerCase(value) ? -1 : 1 ; 
  //    orderRule.indexOf(a) - orderRule.indexOf(b);
  //   push(add);
  // });
  text.value = '';
  exp.value = '';
});

