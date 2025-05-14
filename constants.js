import {
  BsFacebook,
  BsLinkedin,
  BsInstagram,
  BsTwitterX,
} from "react-icons/bs";

export const websiteInformation = [
  {
    name: "website",
    copywright: "Blah blah blah, copyright blah blah.",
    year: 2024,
    developer: "Junaid Adams",
    socials: [
      { key: 1, name: "Linked In", link: "/", logo: BsLinkedin },
      { key: 2, name: "Facebook", link: "/", logo: BsFacebook },
      { key: 3, name: "Instagram", link: "/", logo: BsInstagram },
      { key: 4, name: "Twitter", link: "/", logo: BsTwitterX },
    ],
  },
];

export const snackItems = [
  {
    key: "mini_pizzas",
    img: "/pizzapi.jpg",
    name: "Mini Pizzas",
    pricing: 120, // R120 per dozen
    quantities: [12, 24, 36],
    flavours: [
      {
        name: "Leafy",
        ingredients: ["Fresh tomato", "Mushroom", "Herbs"],
      },
      {
        name: "Chicken",
        ingredients: ["Peri-peri chicken", "Pineapple"],
      },
      {
        name: "Smoky BBQ Peperoni",
        ingredients: ["BBQ Peperoni"],
      },
    ],
    leadTimeDays: 2,
  },
  {
    key: "mini_pies",
    img: "/pie.jpg",
    name: "Mini Pies",
    pricing: 150, // R150 per dozen
    quantities: [12, 24, 36],
    flavours: [
      {
        name: "Steak & Kidney",
        ingredients: ["Beef Steak", "Kidney", "Gravy", "Pastry"],
      },
      {
        name: "Chicken",
        ingredients: ["Chicken", "Herbs", "Creamy Sauce", "Pastry"],
      },
      {
        name: "Spinach & Feta",
        ingredients: ["Spinach", "Feta Cheese", "Herbs", "Pastry"],
      },
    ],
    leadTimeDays: 3,
  },
  {
    key: "sausage_rolls",
    img: "/pizza2.jpg",
    name: "Sausage Rolls",
    pricing: 100, // R100 per dozen
    quantities: [12, 24, 36],
    flavours: null,
    leadTimeDays: 1,
  },
];

export const navigationLinks = [
  {
    key: 1,
    name: "home",
    link: "/",
  },
  {
    key: 2,
    name: "about",
    link: "/about",
  },

  {
    key: 3,
    name: "products",
    link: "/products",
  },

  {
    key: 4,
    name: "contact",
    link: "/contact",
  },
];
