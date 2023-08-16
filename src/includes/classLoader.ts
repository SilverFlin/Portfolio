function setTailwindClassesOnMarkdown(document: Document) {
    const markdownClassWrapper = 'markdown-body'
    const baseQuerySelector = `div.${markdownClassWrapper}`

    document.querySelectorAll(`${baseQuerySelector} > h1`)
        .forEach((el) => {
            el.classList.add('text-3xl', 'font-bold', 'uppercase', 'mt-4')
        })
    document.querySelectorAll(`${baseQuerySelector} > h2`)
        .forEach((el) => {
            el.classList.add('text-2xl', 'font-bold', 'uppercase', 'mt-4')
        })
}

export {
    setTailwindClassesOnMarkdown
}