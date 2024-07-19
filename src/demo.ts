import Prism from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/themes/prism.min.css';
import redent from 'redent';

import './scss/main.scss'
import './scss/demo.scss'

window.Prism = Prism;

const codeElements = document.querySelectorAll('.viewable-code');

codeElements.forEach(codeElement => {
  let codeViewParent;

  if ((codeViewParent = codeElement.parentElement!.querySelector('.code')) === null) {
    codeViewParent = document.createElement('div');
    codeViewParent.classList.add('code');
    codeElement.parentElement!.appendChild(codeViewParent);

    const pre = document.createElement('pre');
    codeViewParent.appendChild(pre);

    const code = document.createElement('code');
    code.classList.add('language-html');
    pre.appendChild(code);

    const button = document.createElement('button');
    button.classList.add('toggle');
    button.addEventListener('click', () => {
      button.parentElement!.classList.toggle('show');
    });

    codeViewParent.appendChild(button);
  }

  codeViewParent.querySelector('code')!.textContent += redent(codeElement.innerHTML);
});
