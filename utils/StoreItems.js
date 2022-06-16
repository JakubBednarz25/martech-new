const storeItems = [
  {
    id: 1,
    name: "PEUGEOT BOXER AIR SUSPENSION KIT GAUGE UPGRADE / TWIN GAUGE DASH PANEL 2006-2022",
    slug: "peugot-boxer-air-suspension-1",
    price: 160,
    category: "pneumatic-system",
    status: "featured",
    image: "https://i.ebayimg.com/thumbs/images/g/w24AAOSwc~Jii5tw/s-l225.jpg",
    make: "Peugot",
    model: "Boxer 2006-2022",
  },
  {
    id: 2,
    name: "CITROEN RELAY AIR SUSPENSION KIT GAUGE UPGRADE / TWIN GAUGE DASH PANEL 2006-2022",
    slug: "citreon-relay-air-suspension-1",
    price: 160,
    category: "pneumatic-system",
    status: "featured",
    image: "https://i.ebayimg.com/thumbs/images/g/MTcAAOSwnTpihWeD/s-l225.jpg",
    make: "Citroen",
    model: "Relay 2006-2022",
  },
  {
    id: 3,
    name: "AIR SUSPENSION KIT PEUGEOT BOXER 1994 - 2022 RECOVERY TRUCK MOTORHOME CAMPERVAN",
    slug: "peugot-boxer-air-suspension-2",
    price: 225,
    category: "pneumatic-system",
    status: "featured",
    image: "https://i.ebayimg.com/thumbs/images/g/cyoAAOSwx2liN6s4/s-l225.jpg",
    make: "Peugot",
    model: "Boxer 1994-2022",
  },
  {
    id: 4,
    name: "AIR SUSPENSION KIT PEUGEOT BOXER 1994 -2021 RECOVERY MOTORHOME PANEL VAN LUTON",
    slug: "peugot-boxer-air-suspension-3",
    price: 209,
    category: "pneumatic-system",
    status: "featured",
    image: "https://i.ebayimg.com/thumbs/images/g/u~YAAOSwh4ZfMC0z/s-l225.jpg",
    make: "Peugot",
    model: "Boxer 1994-2021",
  },
  {
    id: 5,
    name: "AIR SUSPENSION KIT PEUGEOT BOXER 2006 -2021 DROPSIDE FLATBED RECOVERY LUTON VAN",
    slug: "peugot-boxer-air-suspension-4",
    price: 339,
    category: "pneumatic-system",
    status: "featured",
    image: "https://i.ebayimg.com/thumbs/images/g/AiQAAOSwZohgt~cF/s-l225.jpg",
    make: "Peugot",
    model: "Boxer 2006-2021",
  },
  {
    id: 6,
    name: "AIR SUSPENSION KIT PEUGEOT BOXER 2006 - 2022 RECOVERY MOTORHOME LUTON VAN CAMPER",
    slug: "peugot-boxer-air-suspension-5",
    price: 425,
    category: "pneumatic-system",
    status: "featured",
    image: "https://i.ebayimg.com/thumbs/images/g/FyUAAOSwIUJihVro/s-l225.jpg",
    make: "Peugot",
    model: "2006-2022",
  },
  {
    id: 7,
    name: "AIR SUSPENSION KIT CITROEN RELAY 1994 - 2022 RECOVERY TRUCK MOTORHOME CAMPERVAN",
    slug: "citreon-relay-air-suspension-2",
    price: 225,
    category: "pneumatic-system",
    status: "recent",
    image: "https://i.ebayimg.com/thumbs/images/g/oQgAAOSwDApiN6yZ/s-l225.jpg",
    make: "Citroen",
    model: "Relay 1994-2022",
  },
  {
    id: 8,
    name: "AIR SUSPENSION KIT FOR IVECO DAILY 35S 2015 - 2022 RECOVERY LUTON DROPSIDE",
    slug: "iveco-daily-air-suspension-1",
    price: 339,
    category: "pneumatic-system",
    status: "recent",
    image: "https://i.ebayimg.com/thumbs/images/g/p-wAAOSwEglgt~Lg/s-l225.jpg",
    make: "Iveco",
    model: "Daily 35S 2015-2022",
  },
  {
    id: 9,
    name: "AIR SUSPENSION KIT FORD TRANSIT TWIN REAR WHEEL RWD 2001 - 2021 RECOVERY TRUCK",
    slug: "ford-transit-air-suspension-1",
    price: 265,
    category: "pneumatic-system",
    status: "recent",
    image: "https://i.ebayimg.com/thumbs/images/g/h7IAAOSwf9xiJhOP/s-l225.jpg",
    make: "Ford Transit",
    model: "Twin Rear Wheel 2001-2021",
  },
  {
    id: 10,
    name: "AIR SUSPENSION KIT FORD TRANSIT SINGLE REAR WHEEL 2014-2022 CAMPERVAN MOTORHOME ",
    slug: "ford-transit-air-suspension-2",
    price: 349,
    category: "pneumatic-system",
    status: "recent",
    image: "https://i.ebayimg.com/thumbs/images/g/rkwAAOSwjdliQNup/s-l225.jpg",
    make: "Ford Transit",
    model: "Single Rear Wheel 2014-2022",
  },
  {
    id: 11,
    name: "AIR SUSPENSION KIT VAUXHALL MOVANO FWD 1997 - 2010 RECOVERY PANEL VAN HORSEBOX",
    slug: "vauxhall-movano-air-suspension-2",
    price: 255,
    category: "pneumatic-system",
    status: "recent",
    image: "https://i.ebayimg.com/thumbs/images/g/sSIAAOSwYNpenE83/s-l225.jpg",
    make: "Vauxhall",
    model: "Movano FWD 1997-2010",
  },
  {
    id: 12,
    name: "AIR SUSPENSION KIT FORD TRANSIT TWIN REAR WHEEL RWD 2001 - 2021 TIPPER LUTON ",
    slug: "ford-transit-air-suspension-3",
    price: 249,
    category: "pneumatic-system",
    status: "sale",
    image: "https://i.ebayimg.com/thumbs/images/g/BucAAOSwHkdhbB3K/s-l225.jpg",
    make: "Ford Transit",
    model: "Twin Rear Wheel RWD 2001-2021",
  },
  {
    id: 13,
    name: "AIR SUSPENSION KIT FOR IVECO DAILY 35S FROM 2015 - 2022 RECOVERY LUTON DROPSIDE",
    slug: "iveco-daily-air-suspension-3",
    price: 369,
    category: "pneumatic-system",
    status: "sale",
    image: "https://i.ebayimg.com/thumbs/images/g/nGIAAOSwed5iJksO/s-l225.jpg",
    make: "Iveco",
    model: "Daily 35S 2015-2022",
  },
  {
    id: 14,
    name: "AIR SUSPENSION KIT RENAULT MASTER FWD 1997 - 2010 RECOVERY LUTON FLATBED VAN",
    slug: "renault-master-air-suspension-1",
    price: 255,
    category: "pneumatic-system",
    status: "sale",
    image: "https://i.ebayimg.com/thumbs/images/g/ugsAAOSwSpthiDmA/s-l225.jpg",
    make: "Renault",
    model: "Master FWD 1997-2010",
  },
  {
    id: 15,
    name: "AIR SUSPENSION KIT FORD TRANSIT TWIN REAR WHEEL RWD 2001-2021 DROPSIDE TIPPER",
    slug: "ford-transit-air-suspension-4",
    price: 289,
    category: "pneumatic-system",
    status: "sale",
    image: "https://i.ebayimg.com/thumbs/images/g/rxkAAOSwpixgC-pH/s-l225.jpg",
    make: "Ford Transit",
    model: "Twin Rear Wheel RWD 2001-2021",
  },
  {
    id: 16,
    name: "AIR SUSPENSION KIT VAUXHALL MOVANO FWD 10-2021 4000KG +AIR COMPRESSOR RECOVERY",
    slug: "vauxhall-movano-air-suspension-3",
    price: 229,
    category: "pneumatic-system",
    status: "sale",
    image: "https://i.ebayimg.com/thumbs/images/g/p8sAAOSwKBBhsIkC/s-l225.jpg",
    make: "Vauxhall",
    model: "Movano FWD 2010-2021",
  },
  // {
  //   id: 1,
  //   name: "Air Suspension Kit 1",
  //   slug: "air-suspension-kit-1",
  //   price: 190,
  //   category: "air-suspension",
  //   status: "featured",
  //   image: "https://i.ebayimg.com/images/g/aH4AAOSwqEVfMCye/s-l1600.jpg",
  // },
  // {
  //   id: 2,
  //   name: "Air Suspension Kit 2",
  //   slug: "air-suspension-kit-2",
  //   price: 229,
  //   category: "air-suspension",
  //   status: "featured",
  //   image: "https://i.ebayimg.com/images/g/BucAAOSwHkdhbB3K/s-l1600.jpg",
  // },
  // {
  //   id: 3,
  //   name: "Air Suspension Kit 3",
  //   slug: "air-suspension-kit-3",
  //   price: 225,
  //   category: "air-suspension",
  //   status: "sale",
  //   image: "https://i.ebayimg.com/images/g/cyoAAOSwx2liN6s4/s-l500.png",
  // },
  // {
  //   id: 4,
  //   name: "Air Suspension Kit 4",
  //   slug: "air-suspension-kit-4",
  //   price: 200,
  //   category: "air-suspension",
  //   status: "sale",
  //   image: "https://i.ebayimg.com/images/g/5-YAAOSw1SxhrdjH/s-l1600.jpg",
  // },
  // {
  //   id: 5,
  //   name: "Air Suspension Kit 5",
  //   slug: "air-suspension-kit-5",
  //   price: 189,
  //   category: "air-suspension",
  //   status: "recent",
  //   image: "https://i.ebayimg.com/images/g/lLgAAOSwWyNh7ddl/s-l500.jpg",
  // },
  // {
  //   id: 6,
  //   name: "Air Suspension Citroen Jumper 96",
  //   slug: "air-suspension-citroen-jumper-96",
  //   price: 270,
  //   category: "pneumatic-system",
  //   status: "recent",
  //   customizations: [
  //     {
  //       name: "Year of manufacture",
  //       options: [
  //         {
  //           name: "1994+",
  //           price: 50,
  //         },
  //       ],
  //     },
  //     {
  //       name: "Air system type",
  //       options: [
  //         {
  //           name: "Universal single circuit",
  //           price: 20,
  //         },
  //         {
  //           name: "Universal dual circuit",
  //           price: 30,
  //         },
  //         {
  //           name: "specific single circuit",
  //           price: 40,
  //         },
  //         {
  //           name: "specific dual circuit",
  //           price: 50,
  //         },
  //       ],
  //     },
  //     {
  //       name: "Compressor",
  //       options: [
  //         {
  //           name: "yes",
  //           price: 100,
  //         },
  //         {
  //           name: "no",
  //           price: 0,
  //         },
  //       ],
  //     },
  //   ],
  //   image:
  //     "https://i0.wp.com/carramba.co.uk/wp-content/uploads/1-56.jpg?fit=900%2C490&ssl=1",
  // },
  // {
  //   id: 7,
  //   name: "Air Suspension Fiat Ducato 96",
  //   slug: "air-suspension-fiat-ducato-96",
  //   price: 270,
  //   category: "pneumatic-system",
  //   status: "recent",
  //   customizations: [
  //     {
  //       name: "Year of manufacture",
  //       options: [
  //         {
  //           name: "1994+",
  //           price: 50,
  //         },
  //       ],
  //     },
  //     {
  //       name: "Air system type",
  //       options: [
  //         {
  //           name: "Universal single circuit",
  //           price: 20,
  //         },
  //         {
  //           name: "Universal dual circuit",
  //           price: 30,
  //         },
  //         {
  //           name: "specific single circuit",
  //           price: 40,
  //         },
  //         {
  //           name: "specific dual circuit",
  //           price: 50,
  //         },
  //       ],
  //     },
  //     {
  //       name: "Compressor",
  //       options: [
  //         {
  //           name: "yes",
  //           price: 100,
  //         },
  //         {
  //           name: "no",
  //           price: 0,
  //         },
  //       ],
  //     },
  //   ],
  //   image:
  //     "https://i0.wp.com/carramba.co.uk/wp-content/uploads/ducato.png?fit=600%2C341&ssl=1",
  // },
  // {
  //   id: 8,
  //   name: "Air Suspension Ford F150",
  //   slug: "air-suspension-ford-f150",
  //   price: 430,
  //   category: "pneumatic-system",
  //   status: "recent",
  //   customizations: [
  //     {
  //       name: "Year of manufacture",
  //       options: [
  //         {
  //           name: "1994+",
  //           price: 50,
  //         },
  //       ],
  //     },
  //     {
  //       name: "Air system type",
  //       options: [
  //         {
  //           name: "Universal single circuit",
  //           price: 20,
  //         },
  //         {
  //           name: "Universal dual circuit",
  //           price: 30,
  //         },
  //         {
  //           name: "specific single circuit",
  //           price: 40,
  //         },
  //         {
  //           name: "specific dual circuit",
  //           price: 50,
  //         },
  //       ],
  //     },
  //     {
  //       name: "Compressor",
  //       options: [
  //         {
  //           name: "yes",
  //           price: 100,
  //         },
  //         {
  //           name: "no",
  //           price: 0,
  //         },
  //       ],
  //     },
  //   ],
  //   image:
  //     "https://i0.wp.com/carramba.co.uk/wp-content/uploads/f150.jpg?fit=600%2C337&ssl=1",
  // },
  // {
  //   id: 9,
  //   name: "Air Suspension Ford Transit 01",
  //   slug: "air-suspension-ford-transit-01",
  //   price: 500,
  //   category: "pneumatic-system",
  //   status: "recent",
  //   customizations: [
  //     {
  //       name: "Year of manufacture",
  //       options: [
  //         {
  //           name: "1994+",
  //           price: 50,
  //         },
  //       ],
  //     },
  //     {
  //       name: "Air system type",
  //       options: [
  //         {
  //           name: "Universal single circuit",
  //           price: 20,
  //         },
  //         {
  //           name: "Universal dual circuit",
  //           price: 30,
  //         },
  //         {
  //           name: "specific single circuit",
  //           price: 40,
  //         },
  //         {
  //           name: "specific dual circuit",
  //           price: 50,
  //         },
  //       ],
  //     },
  //     {
  //       name: "Compressor",
  //       options: [
  //         {
  //           name: "yes",
  //           price: 100,
  //         },
  //         {
  //           name: "no",
  //           price: 0,
  //         },
  //       ],
  //     },
  //   ],
  //   image:
  //     "https://i0.wp.com/carramba.co.uk/wp-content/uploads/TRANSIT-2017-POJEDYNCZE.jpg?fit=600%2C450&ssl=1",
  // },
  // {
  //   id: 10,
  //   name: "Air Suspension Ford Transit Custom 12",
  //   slug: "air-suspension-ford-transit-custom-12",
  //   price: 400,
  //   category: "pneumatic-system",
  //   status: "recent",
  //   customizations: [
  //     {
  //       name: "Year of manufacture",
  //       options: [
  //         {
  //           name: "1994+",
  //           price: 50,
  //         },
  //       ],
  //     },
  //     {
  //       name: "Air system type",
  //       options: [
  //         {
  //           name: "Universal single circuit",
  //           price: 20,
  //         },
  //         {
  //           name: "Universal dual circuit",
  //           price: 30,
  //         },
  //         {
  //           name: "specific single circuit",
  //           price: 40,
  //         },
  //         {
  //           name: "specific dual circuit",
  //           price: 50,
  //         },
  //       ],
  //     },
  //     {
  //       name: "Compressor",
  //       options: [
  //         {
  //           name: "yes",
  //           price: 100,
  //         },
  //         {
  //           name: "no",
  //           price: 0,
  //         },
  //       ],
  //     },
  //   ],
  //   image:
  //     "https://i0.wp.com/carramba.co.uk/wp-content/uploads/Transit.jpg?fit=600%2C450&ssl=1",
  // },
];

export default storeItems;
