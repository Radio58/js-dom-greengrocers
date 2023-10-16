const state = {
  items: [
    {
      id: "001-beetroot",
      name: "beetroot",
      price: 0.35
    },
    {
      id: "002-carrot",
      name: "carrot",
      price: 0.35
    },
    {
      id: "003-apple",
      name: "apple",
      price: 0.35
    },
    {
      id: "004-apricot",
      name: "apricot",
      price: 0.35
    },
    {
      id: "005-avocado",
      name: "avocado",
      price: 0.35
    },
    {
      id: "006-bananas",
      name: "bananas",
      price: 0.35
    },
    {
      id: "007-bell-pepper",
      name: "bell pepper",
      price: 0.35
    },
    {
      id: "008-berry",
      name: "berry",
      price: 0.35
    },
    {
      id: "009-blueberry",
      name: "blueberry",
      price: 0.35
    },
    {
      id: "010-eggplant",
      name: "eggplant",
      price: 0.35
    }
  ],
  cart: []
};

const itemDisplay = document.querySelector('.store--item-list')

state.items.forEach(item => {
  const newItem = document.createElement('li')
  const div = document.createElement('div')
  const img = document.createElement('img')
  const addButton = document.createElement('button')


  div.className = 'store--item-icon'
  img.src = `assets/icons/${item.id}.svg`
  img.alt = item.name
  addButton.innerText = 'Add to cart'

  div.append(img)
  newItem.append(div, addButton)
  itemDisplay.append(newItem)
})