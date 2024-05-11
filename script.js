
const faqListEl = document.querySelectorAll('.faq')

init()

faqListEl.forEach(faq => {

    faq.children[0].children[1].addEventListener('click', () => {

        if (faq.children[1].classList.contains('closed')) {
            faq.children[1].classList.toggle('closed')
            faq.children[0].children[1].children[0].classList.toggle('closed')
            faq.children[0].children[1].children[1].classList.toggle('closed')

            
        } else {
            faq.children[1].classList.add('closed')
            faq.children[0].children[1].children[0].classList.toggle('closed')
            faq.children[0].children[1].children[1].classList.toggle('closed')

        }
        
   })
})

function init() {
    faqListEl.forEach(faq => {
        faq.children[0].children[1].children[0].classList.add('closed')
    })
}


