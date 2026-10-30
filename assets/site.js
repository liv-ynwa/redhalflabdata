'use strict';
const dialog=document.querySelector('.image-dialog');
if(dialog&&typeof dialog.showModal==='function'){
const image=dialog.querySelector('[data-dialog-image]');
document.querySelectorAll('[data-preview]').forEach(link=>link.addEventListener('click',event=>{event.preventDefault();image.src=link.href;image.alt=link.querySelector('img').alt;dialog.querySelector('[data-dialog-title]').textContent=link.dataset.title;dialog.showModal();}));
dialog.querySelector('[data-close-dialog]').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
}
document.querySelectorAll('[data-copy-caption]').forEach(button=>{button.hidden=false;button.addEventListener('click',async()=>{const section=button.closest('.caption-details');const value=section.querySelector('[data-caption-text]').textContent;const status=section.querySelector('.copy-status');try{if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(value);}else{const field=document.createElement('textarea');field.value=value;field.setAttribute('readonly','');field.style.position='fixed';field.style.top='-9999px';document.body.appendChild(field);field.select();const copied=document.execCommand('copy');field.remove();if(!copied)throw Error('copy unavailable');}status.textContent='Caption copied.';}catch{status.textContent='Select the caption text above to copy it.';}});});
