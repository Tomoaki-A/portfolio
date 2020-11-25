'use strict'
// ------------------ハンバーガー------------------
{
  const open = document.getElementById('open')
  const close = document.getElementById('close')
  const hidden = document.getElementById('hidden')
  const link = document.querySelectorAll('.link')
  
  open.addEventListener('click',() => {
    open.style.display = 'none'
    close.style.display = 'block'
    hidden.classList.remove('hidden')
  })

  close.addEventListener('click',() => {
    open.style.display = 'block'
    close.style.display = 'none'
    hidden.classList.add('hidden')
  })
  link.addEventListener('click',() => {
    open.style.display = 'block'
    close.style.display = 'none'
    hidden.classList.add('hidden')
  })
}

// -------------------------モーダル-------------------------

