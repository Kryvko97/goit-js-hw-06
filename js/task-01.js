const items = document.querySelectorAll('.item')
console.log ('Кількісьть категорій:',items.length)


items.forEach((e) =>
{console.log(`Категорія:${e.querySelector('h2').textContent}`)

console.log(`Елементи: ${e.querySelector('ul').children.length}`)}
)




