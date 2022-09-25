'use strict';
const body = document.querySelector('body');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const topSection = document.createElement('section');
const topSectionRow1 = document.createElement('section');
const topSectionRow2 = document.createElement('section');
const btn = document.createElement('button');
const text1 = document.querySelector('.text1');

topSection.classList.add('top-section');
topSectionRow1.classList.add('rows');
topSectionRow2.classList.add('rows');

// TODO Flex layout
// topSection.style.display = 'flex';
// topSection.style.flexDirection = 'column';

// TODO Grid layout
topSection.style.display = 'grid';
topSection.style.width = '75%';
topSection.style.gridTemplateColumns = '40% 60%';
topSection.style.gridTemplateRows = '150px 150px';
topSection.style.gap = '5px';
body.removeChild(text1);

// TODO Box layout with float elements
// let tmpElement = body.removeChild(text1);
// text1.style.width = '500px';
// topSection.appendChild(tmpElement);

btn.classList.add('show-modal');
btn.append('Show Modal 4');

const rows = document.querySelectorAll('rows');

for (let i = 0; i < rows.length; ++i) {
  rows[i].display = 'flex';
  rows[i].flexDirection = 'row';
}

// TODO Flex layout
// topSection.appendChild(topSectionRow1);
// topSection.appendChild(topSectionRow2);

body.appendChild(btn);
body.appendChild(topSection);

const btnsOpenModal = document.querySelectorAll('.show-modal');

const closeModal = function () {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
};

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

/////////////////////////////////////////////////////////////////////
// Both solutions: below and the one below this one do the same thing
let ert = btnsOpenModal.forEach(elem => body.removeChild(elem));

console.log(ert);

// btnsOpenModal.forEach(function (elem) {
//   let child = body.removeChild(elem);
//   topSection.appendChild(child);
//   elem.addEventListener('click', openModal);
// });

// for (let i = 0; i < btnsOpenModal.length; i++) {
//   let child = body.removeChild(btnsOpenModal[i]);
//   topSection.appendChild(child);
//   btnsOpenModal[i].addEventListener('click', openModal);
// }
/////////////////////////////////////////////////////////////////////

// for (let i = 0; i < btnsOpenModal.length; i++) {
//   let idx = i % 2;
//   console.log(idx);
//   let child = body.removeChild(btnsOpenModal[i]);

//   // TODO Grid layout
//   topSection.appendChild(child);

//   // TODO Flex layout
//   // if (0 === idx) {
//   //   topSectionRow1.appendChild(child);
//   // } else {
//   //   topSectionRow2.appendChild(child);
//   // }

//   // TODO Default box layout with float elements
//   // if (0 === idx) {
//   //   if (0 === i) {
//   //     topSection.insertBefore(child, topSection.lastChild);
//   //     child.style.float = 'left';
//   //     child.style.width = '150px';
//   //     child.style.height = '150px';
//   //     child.style.mariginRight = '20px';
//   //   } else {
//   //     topSection.appendChild(child);
//   //     child.style.float = 'right';
//   //     child.style.width = '150px';
//   //     child.style.height = '150px';
//   //     child.style.mariginLeft = '20px';
//   //   }
//   // }
//   btnsOpenModal[i].addEventListener('click', openModal);
// }

body.insertBefore(body.removeChild(topSection), body.firstChild);

overlay.addEventListener('click', closeModal);

btnCloseModal.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if ('Escape' === e.code && !modal.classList.contains('hidden')) closeModal();
});
