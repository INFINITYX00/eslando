const productData = [
  {
    product: {
      id: 1,
      imageUrl: "./fleece-lined-jacket.jpg",
      name: "Fleece Lined Jacket",
      brand: "Denimology",
      season: "FW24",
      highlights: [
        { svg: "./cotton.svg", title: "Organic Cotton" },
        { svg: "./recyclable.svg", title: "Recycled Fleece" },
      ],
      countryOfOrigin: "Vietnam",
      menu: {
        materials: [
          {
            name: "Outer",
            material: "100% Organic Cotton Denim",
            weight: "Midweight",
            weave: "Twill Weave",
            waterResistance: "Not Water Resistant",
          },
          {
            name: "Lining",
            material: "Recycled Fleece",
            weight: "Lightweight",
            breathability: "Moderately Breathable",
          },
          {
            name: "Hardware",
            material1: "Buttons: Metal",
            material2: "Zips: Metal",
          },
        ],
        careInstructions: [
          {
            image: "./hand-wash.svg",
            instruction: "Hand Wash",
          },
          {
            image: "./dry-flat.svg",
            instruction: "Dry Flat",
          },
          {
            image: "./iron.svg",
            instruction: "Iron Medium (Max 150°C)",
          },
        ],
        certifications: {
          BCI: false,
          BCorp: true,
          BLUESIGN: false,
          Fairtrade: true,
          FSC: false,
          GOTS: true,
          OEKOTEX: false,
          WRAP: false,
        },
      },
    },
  },
  {
    product: {
      id: 2,
      imageUrl: "./polyester_trousers.jpg",
      name: "Polyester Trousers",
      brand: "PolyWear",
      season: "SS23",
      highlights: [
        { svg: "./recyclable.svg", title: "Recycled Polyester" },
        { svg: "./drying.svg", title: "Quick-drying" },
      ],
      countryOfOrigin: "China",
      menu: {
        materials: [
          {
            name: "Composition",
            material: "Polyester",
            weight: "Lightweight",
            waterResistance: "Water Resistant",
          },
          {
            name: "Hardware",
            material1: "Buttons: Metal",
            material2: "Zips: Metal",
          },
        ],
        careInstructions: [
          {
            image: "./wash.svg",
            instruction: "Machine Wash",
          },
          {
            image: "./iron.svg",
            instruction: "Iron Cool (Max 110°C)",
          },
          {
            image: "./tumble.svg",
            instruction: "Tumble Dry on Low Heat",
          },
        ],
        certifications: {
          BCI: false,
          BCorp: false,
          BLUESIGN: false,
          Fairtrade: true,
          FSC: false,
          GOTS: true,
          OEKOTEX: false,
          WRAP: false,
        },
      },
    },
  },

  {
    product: {
      id: 3,
      imageUrl: "./winter-coat.jpg",
      name: "Oversized Wool Coat",
      brand: "Wildwood Threads",
      season: "FW24",
      highlights: [{ svg: "./sheep.svg", title: "Sustainable Wool" }],
      countryOfOrigin: "Egypt",
      menu: {
        materials: [
          {
            name: "Outer",
            material: "100% Sustainabilty Sourced Wool",
            weight: "Heavyweight",
            weave: "Plain Weave",
            waterResistance: "Water Resistant",
          },
          {
            name: "Lining",
            material: "Recycled Polyester",
            weight: "Heavyweight",
            breathability: "Moderately Breathable",
          },
          {
            name: "Hardware",
            material1: "Buttons: Plastic",
          },
        ],
        careInstructions: [
          {
            image: "./wash-hand.svg",
            instruction: "Spot Clean with Damp Cloth",
          },
          {
            image: "./dry-flat.svg",
            instruction: "Dry Flat",
          },
        ],
        certifications: {
          BCI: false,
          BCorp: false,
          BLUESIGN: false,
          Fairtrade: true,
          FSC: false,
          GOTS: true,
          OEKOTEX: false,
          WRAP: false,
        },
      },
    },
  },

  {
    product: {
      id: 4,
      imageUrl: "./handbag.jpg",
      name: "Luxury Leather Handbag",
      brand: "Elangance Couture",
      season: "FW24",
      highlights: [
        { svg: "./leather.svg", title: "Genuine Leather" },
        { svg: "./hand-made.svg", title: "Handmade Craftsmanship" },
      ],
      countryOfOrigin: "Italy",
      menu: {
        materials: [
          {
            name: "Outer",
            material: "100% Genuine Leather",
            weight: "Heavyweight",
            weave: "Smooth Finish",
            waterResistance: "Water Resistant",
          },
          {
            name: "Lining",
            material: "Recycled Polyester",
            weight: "Lightweight",
            breathability: "Highly Breathable",
          },
          {
            name: "Hardware",
            material1: "Buckles: Brass",
            material2: "Zips: Brass",
          },
        ],
        careInstructions: [
          {
            image: "./wash-hand.svg",
            instruction: "Wipe Clean with Damp Cloth",
          },
          {
            image: "./shampoo.svg",
            instruction: "Use Leather Conditioner",
          },
          {
            image: "./store-dry.svg",
            instruction: "Store in a Dry Place",
          },
        ],
        certifications: {
          BCI: false,
          BCorp: true,
          BLUESIGN: false,
          Fairtrade: false,
          FSC: false,
          GOTS: false,
          OEKOTEX: true,
          WRAP: false,
        },
      },
    },
  },

  {
    product: {
      id: 5,
      imageUrl: "./sneakers.jpg",
      name: "Sustainable Sneakers",
      brand: "EcoFootwear Co.",
      season: "FW24",
      highlights: [
        { svg: "./breathable.svg", title: "Breathable" },
        { svg: "./recyclable.svg", title: "Recycled PET" },
      ],
      countryOfOrigin: "Vietnam",
      menu: {
        materials: [
          {
            name: "Upper",
            material: "Recycled PET",
            weight: "Lightweight",
            weave: "Knit",
            waterResistance: "Not Water Resistant",
          },
          {
            name: "Lining",
            material: "Viscose",
            weight: "Medium weight",
            breathability: "High breathability",
          },
          {
            name: "Outsole",
            material1: "Natural Rubber",
            material2: "Recycled EVA Foam",
          },
        ],
        careInstructions: [
          {
            image: "./wash-hand.svg",
            instruction: "Wipe Clean with Damp Cloth",
          },
          {
            image: "./dry-flat.svg",
            instruction: "Dry Flat",
          },
        ],
        certifications: {
          BCI: false,
          BCorp: true,
          BLUESIGN: true,
          Fairtrade: false,
          FSC: false,
          GOTS: false,
          OEKOTEX: true,
          WRAP: true,
        },
      },
    },
  },

  {
    product: {
      id: 6,
      imageUrl: "./overalls.jpg",
      name: "Organic Denim Overalls",
      brand: "Sustainable Style Co.",
      season: "Spring/Summer 2024",
      highlights: [
        { svg: "./denim.svg", title: "Organic Denim" },
        { svg: "./recyclable.svg", title: "Recycled Metal Hardware" },
      ],
      countryOfOrigin: "United States",
      menu: {
        materials: [
          {
            name: "Main",
            material: "Organic Cotton Denim",
            weight: "Medium",
            weave: "Denim",
            waterResistance: "Not Water Resistant",
          },
          {
            name: "Hardware",
            material: "Recycled Metal",
          },
          {
            name: "Straps",
            material: "Organic Cotton",
            weight: "Lightweight",
          },
        ],
        careInstructions: [
          {
            image: "./30wash.svg",
            instruction: "Machine Wash Cold",
          },
          {
            image: "./air-dry.svg",
            instruction: "Line Dry",
          },
          {
            image: "./iron.svg",
            instruction: "Iron Medium (Max 150°C)",
          },
        ],
        certifications: {
          BCI: true,
          BCorp: true,
          BLUESIGN: false,
          Fairtrade: false,
          FSC: false,
          GOTS: true,
          OEKOTEX: false,
          WRAP: false,
        },
      },
    },
  },
];

export default productData;
