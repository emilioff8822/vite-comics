const mainMenu = [
  {
    href: "#",
    text: "CHARACTERS",
    isActive: false
  },
  {
    href: "#",
    text: "COMICS",
    isActive: false
  },
  {
    href: "#",
    text: "MOVIES",
    isActive: false
  },
  {
    href: "#",
    text: "TV",
    isActive: false
  },
  {
    href: "#",
    text: "GAMES",
    isActive: false
  },
  {
    href: "#",
    text: "COLLECTIBLES",
    isActive: false
  },
  {
    href: "#",
    text: "VIDEOS",
    isActive: false
  },
  {
    href: "#",
    text: "FANS",
    isActive: false
  },
  {
    href: "#",
    text: "NEWS",
    isActive: false
  },
  {
    href: "#",
    text: "SHOP",
    isActive: false
  },
];

const footerMenu = {
  pastificio: [
  {
    href: "#",
    text: "Il Pastificio",
  },
  {
    href: "#",
    text: "Grano",
  },
  {
    href: "#",
    text: "Filiera",
  },
  {
    href: "#",
    text: "100 anni di pasta",
  },
  {
    href: "#",
    text: "Sanatoria della pasta",
  }
  ],
  prodotti: [
    {
      href: "#",
      text: "Le Classiche",
    },
    {
      href: "#",
      text: "Le Integrali",
    },
    {
      href: "#",
      text: "Le Speciali",
    },
    {
      href: "#",
      text: "Le Biologiche",
    },
    {
      href: "#",
      text: "Le Gluten-Free",
    }
    ],
}

const footerImages = [
  {
    src: "/assets/img/buy-comics-digital-comics.png",
    alt: "img",
    text: "DIGITAL COMICS"
  },
  {
    src: "/assets/img/buy-comics-merchandise.png",
    alt: "img",
    text: "DC MERCHANDISE"
  },
  {
    src: "/assets/img/buy-comics-shop-locator.png",
    alt: "img",
    text: "COMIC SHOP LOCATOR"
  },
  {
    src: "/assets/img/buy-comics-subscriptions.png",
    alt: "img",
    text: "SUBSCRIPTION"
  },
  {
    src: "/assets/img/buy-dc-power.png",
    alt: "img",
    text: "DC POWER VISA"
  },
];


const list1 = [
  { text: "Characters" },
  { text: "Comics" },
  { text: "Movies" },
  { text: "Tv" },
  { text: "Games" },
  { text: " Videos" },
  { text: "News" },
];

const list2 = [
  { text: "Terms of Use" },
  { text: "Privacy policy" },
  { text: "Ad choices" },
  { text: "Jobs" },
  { text: "Subscriptions" },
  { text: "Talent Workshops" },
  { text: "CPSC Certificates" },
  { text: "Ratings" },
  { text: "Shop Help" },
  { text: "Contact Us" }

];

const list3 = [
  { text: "DC" },
  { text: "MAD Magazine" },
  { text: "DC Kids" },
  { text: "DC Universe" },
  { text: "DC Power Visa" }
  
];

const list4 = [
  { text: "Shop DC" },
  { text: "Shop DC Collections" },
];


const socialIcons = [
  { src: "../assets/img/footer-facebook.png", alt: "Facebook" },
  { src: "../assets/img/footer-periscope.png", alt: "Periscope" },
  { src: "../assets/img/footer-pinterest.png", alt: "Pinterest" },
  { src: "../assets/img/footer-twitter.png", alt: "Twitter" },
];


const cardsData = [
  {
    "thumb": "https://www.coverbrowser.com/image/action-comics/1-1.jpg",
    "price": "$19.99",
    "series": "Action Comics",
    "type": "comic book"
  },
  {
    "thumb": "https://www.panini.it/media/catalog/product/cache/a5b5dd3adfe0d321084804c738f29601/M/1/M1BLLA015ISBN_0.jpg",
    "price": "$3.99",
    "series": "American Vampire 1976",
    "type": "comic book"
  },
  {
    "thumb": "https://media.wired.com/photos/593384dad80dd005b42b2817/master/w_2560%2Cc_limit/Aquaman-16.jpg",
    "price": "$16.99",
    "series": "Aquaman",
    "type": "graphic novel"
  },
  {
    "thumb": "https://d29xot63vimef3.cloudfront.net/image/batgirl/1-1.jpg",
    "price": "$2.99",
    "series": "Batgirl",
    "type": "comic book"
  },
  {
    "thumb": "https://static.posters.cz/image/750/locandine-film-in-plexiglass-batman-prowl-comic-cover-i69653.jpg",
    "price": "$3.99",
    "series": "Batman",
    "type": "comic book"
  },
  {
    "thumb": "https://static.wikia.nocookie.net/marvel_dc/images/5/50/Batman_Beyond_v.1_1.jpg/revision/latest?cb=20080809201655",
    "price": "$2.99",
    "series": "Batman Beyond",
    "type": "comic book"
  },
  {
    "thumb": "https://static.wikia.nocookie.net/marvel_dc/images/0/0d/Batman_Superman_Vol_1_1.jpg/revision/latest/scale-to-width-down/1200?cb=20130627211607",
    "price": "$3.99",
    "series": "Batman/Superman",
    "type": "comic book"
  },
  {
    "thumb": "https://static.wikia.nocookie.net/marvel_dc/images/c/cf/Batman_Superman_Annual_Vol_2_1.jpg/revision/latest?cb=20200929145132",
    "price": "$4.99",
    "series": "Batman/Superman Annual",
    "type": "comic book"
  },
  {
    "thumb": "https://static.wikia.nocookie.net/marvel_dc/images/5/54/Batman_The_Joker_War_Zone_Vol_1_1.jpg/revision/latest?cb=20200929124651",
    "price": "$5.99",
    "series": "Batman: The Joker War Zone",
    "type": "comic book"
  },
  {
    "thumb": "https://static.wikia.nocookie.net/marvel_dc/images/6/64/Batman_Three_Jokers_Collected.jpg/revision/latest?cb=20201123054610",
    "price": "$6.99",
    "series": "Batman: Three Jokers",
    "type": "comic book"
  },
  {
    "thumb": "https://static.wikia.nocookie.net/marvel_dc/images/f/f8/Batman_White_Knight_Presents_Harley_Quinn_Vol_1_1.jpg/revision/latest?cb=20201124094800",
    "price": "$4.99",
    "series": "Batman: White Knight Presents: Harley Quinn",
    "type": "comic book"
  },
  {
    "thumb": "https://static.wikia.nocookie.net/marvel_dc/images/c/c8/Catwoman_Vol_2_1.jpg/revision/latest?cb=20160303223223",
    "price": "$16.99",
    "series": "Catwoman",
    "type": "graphic novel"
  }
];


export { mainMenu, footerMenu, footerImages, list1, list2, list3, list4, socialIcons, cardsData };




