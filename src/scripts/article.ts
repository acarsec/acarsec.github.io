import dimensions from '../data/image-dimensions.json';
const status = document.querySelector<HTMLElement>('.copy-status');
const report = (message: string) => { if(status) status.textContent = message; };
document.querySelectorAll<HTMLPreElement>('.prose pre').forEach(pre => {
  const button = document.createElement('button'); button.type = 'button'; button.className = 'copy-code'; button.textContent = 'Copy code';
  button.addEventListener('click', async () => { try { await navigator.clipboard.writeText(pre.querySelector('code')?.textContent || ''); button.textContent = 'Copied'; report('Code copied to clipboard'); } catch { report('Clipboard unavailable. Select the code to copy it.'); } });
  const wrap = document.createElement('div'); wrap.className = 'code-wrap'; pre.before(wrap); wrap.append(button, pre);
});
document.querySelectorAll('.prose table').forEach(table => { const wrap = document.createElement('div'); wrap.className='table-scroll'; wrap.tabIndex=0; wrap.setAttribute('role','region'); wrap.setAttribute('aria-label','Scrollable table'); table.before(wrap); wrap.append(table); });
const dialog = document.querySelector<HTMLDialogElement>('.lightbox');
let opener: HTMLButtonElement | undefined;
document.querySelectorAll<HTMLImageElement>('.prose img').forEach((img, index) => {
  const size = (dimensions as Record<string, {width: number; height: number}>)[new URL(img.src).pathname]; if(size) { img.width = size.width; img.height = size.height; }
  img.loading = index === 0 ? 'eager' : 'lazy'; img.decoding = 'async';
  if (!dialog || img.closest('a')) return;
  const button = document.createElement('button'); button.type='button'; button.className='image-zoom'; button.setAttribute('aria-label',`Enlarge ${img.alt || 'article image'}`); img.before(button); button.append(img);
  button.addEventListener('click', () => { opener=button; const large = dialog.querySelector('img')!; large.src=img.src; large.alt=img.alt; dialog.querySelector('.lightbox-caption')!.textContent=img.alt; dialog.showModal(); });
});
if (dialog) { dialog.querySelector('button')!.addEventListener('click', () => dialog.close()); dialog.addEventListener('click', event => { if(event.target === dialog) dialog.close(); }); dialog.addEventListener('close', () => opener?.focus()); }
