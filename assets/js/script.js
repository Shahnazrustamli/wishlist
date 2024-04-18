const products = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6dKntmUhF2Bn1GSpd0TSXdPyzhhYNeoYFZ0rolcqNKQ&s",
    name: "Kırmızı Elbise",
    price: 49.99,
    title: "Zarif Kırmızı Elbise",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6dKntmUhF2Bn1GSpd0TSXdPyzhhYNeoYFZ0rolcqNKQ&s",
    name: "Siyah Deri Cüzdan",
    price: 29.95,
    title: "Şık Siyah Cüzdan",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6dKntmUhF2Bn1GSpd0TSXdPyzhhYNeoYFZ0rolcqNKQ&s",
    name: "Beyaz Spor Ayakkabı",
    price: 79.99,
    title: "Rahat Beyaz Sneaker",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6dKntmUhF2Bn1GSpd0TSXdPyzhhYNeoYFZ0rolcqNKQ&s",
    name: "Mavi Çanta",
    price: 39.5,
    title: "Şık Mavi Omuz Çantası",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6dKntmUhF2Bn1GSpd0TSXdPyzhhYNeoYFZ0rolcqNKQ&s",
    name: "Altın Bilezik",
    price: 199.99,
    title: "Zarif Altın Bileklik",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6dKntmUhF2Bn1GSpd0TSXdPyzhhYNeoYFZ0rolcqNKQ&s",
    name: "Kahverengi Güneş Gözlüğü",
    price: 59.95,
    title: "Vintage Stil Güneş Gözlüğü",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6dKntmUhF2Bn1GSpd0TSXdPyzhhYNeoYFZ0rolcqNKQ&s",
    name: "Pembe Şapka",
    price: 19.99,
    title: "Sevimli Pembe Kap",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6dKntmUhF2Bn1GSpd0TSXdPyzhhYNeoYFZ0rolcqNKQ&s",
    name: "Yeşil Çiçek Buketi",
    price: 45.0,
    title: "Taze Kesilmiş Çiçekler",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6dKntmUhF2Bn1GSpd0TSXdPyzhhYNeoYFZ0rolcqNKQ&s",
    name: "Lacivert Kravat",
    price: 24.99,
    title: "Resmi Kravat",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6dKntmUhF2Bn1GSpd0TSXdPyzhhYNeoYFZ0rolcqNKQ&s",
    name: "Gri Kazak",
    price: 34.95,
    title: "Rahat Triko Kazak",
  },
];

products.forEach(elem=>{
  
let cards = document.querySelector(".cards");

let card = document.createElement("div");
card.className = ".card";

let image = document.createElement("img");
image.className = ".card-img-top";
image.src=`${elem.image}`

let cardBody = document.createElement("div");
cardBody.className = ".card-body";


let cardTitle = document.createElement("h5");
cardTitle.className = ".card-title";
cardTitle.innerText=`${elem.name}`

let cardText = document.createElement("p");
cardText.className = ".card-text";
cardText.innerText=`${elem.title}`

let favBtn = document.createElement("a");
favBtn.className = ".btn";
favBtn.innerHTML=`<i class="fa-regular fa-heart"></i>`

cards.appendChild(card)
cardBody.append(cardTitle,cardText,favBtn)
card.append(image,cardBody)
})

