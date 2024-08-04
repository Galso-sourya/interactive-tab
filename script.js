const tabs = document.querySelectorAll('[data-tab-target]')//1.
const tabContents = document.querySelectorAll('[data-tab-content]')//5.

tabs.forEach(tab => {//2.here tab represents each tab like either home or pricing or about
  tab.addEventListener('click', () => {//3.
    const target = document.querySelector(tab.dataset.tabTarget)//4.we are storing the tag which is being 
    //selected
    tabContents.forEach(tabContent => {//6.both
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {//7.both
      tab.classList.remove('active')
    })
    tab.classList.add('active')//5.
    target.classList.add('active')//8.
  })
})