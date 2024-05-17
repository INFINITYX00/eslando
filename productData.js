const productData = [
  {
    product: {
      id: 1,
      imageUrl: "./fleece-lined-jacket.jpg",
      name: "Fleece Denim Jacket",
      brand: "Denimology",
      season: "FW24",
      highlights: [
        { svg: "./cotton.svg", title: "Organic Cotton" },
        { svg: "./recyclable.svg", title: "Recycled Fleece" },
      ],
      countryOfOrigin: "Vietnam",
      menu: {
        materials: [
          [
            {
              name: "Outer Fabric",
            },
            {
              material: "100% Organic Cotton Denim",
            },
            {
              weight: "Midweight",
            },
            {
              weave: "Twill Weave",
            },
            {
              waterResistance: "Not Water Resistant",
            },
          ],
          [
            {
              name: "Lining Fabric",
            },
            {
              material: "Recycled Fleece",
            },
            {
              weight: "Midweight",
            },
            {
              breathability: "Moderately Breathable",
            },
          ],
          [
            {
              name: "Buttons",
            },
            {
              material: "Metal",
            },
          ],
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
        recycle: [
          {
            name: "Recycle Shop 1",
            address: "123 Fake Street",
            phone: "0756116675",
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
          [
            {
              name: "Composition",
            },
            {
              material: "Polyester",
            },
            {
              weight: "Lightweight",
            },
            {
              waterResistance: "Water Resistant",
            },
          ],
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
        recycle: [
          {
            name: "Recycle Shop 1",
            address: "123 Fake Street",
            phone: "0756116675",
          },
        ],
        certifications: {
          BCI: true,
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
      name: "Insultated Winter Coat",
      brand: "FrostWear",
      season: "FW24",
      highlights: [
        { svg: "./cotton.svg", title: "Organic Cotton" },
        { svg: "./recyclable.svg", title: "Recycled Insulation" },
      ],
      countryOfOrigin: "Vietnam",
      menu: {
        materials: [
          {
            name: "Outer fabric",
            material: "100% Organic Cotton Canvas",
            weight: "Heavyweight",
            weave: "Plain Weave",
            waterResistance: "Water Resistant",
          },
          {
            name: "Lining Fabric",
            material: "Recycled Polyester",
            weight: "Heavyweight",
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
            instruction: "Iron Cool (Max 110°C)",
          },
        ],
        recycle: [
          {
            name: "Recycle Shop 1",
            address: "123 Fake Street",
            phone: "0756116675",
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
      id: 4,
      imageUrl: "./handbag.jpg",
      name: "Luxury Leather Handbag",
      brand: "Elangance Couture",
      season: "FW24",
      highlights: [
        { svg: "./leather.svg", title: "Genuine Leather" },
        { svg: "./handmade.svg", title: "Handmade Craftsmanship" },
      ],
      countryOfOrigin: "Italy",
      menu: {
        materials: [
          {
            name: "Outer Material",
            material: "100% Genuine Leather",
            weight: "Heavyweight",
            weave: "Smooth Finish",
            waterResistance: "Water Resistant",
          },
          {
            name: "Lining Material",
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
            image: "./wipe-clean.svg",
            instruction: "Wipe Clean with Damp Cloth",
          },
          {
            image: "./leather-conditioner.svg",
            instruction: "Use Leather Conditioner",
          },
          {
            image: "./store-dry.svg",
            instruction: "Store in a Dry Place",
          },
        ],
        recycle: [
          {
            name: "Recycle Shop 1",
            address: "123 Fake Street",
            phone: "0756116675",
          },
        ],
        certifications: {
          BCI: false,
          BCorp: true,
          BLUESIGN: false,
          Fairtrade: true,
          FSC: true,
          GOTS: false,
          OEKOTEX: true,
          WRAP: true,
        },
      },
    },
  },

  {
    product: {
      id: 5,
      imageUrl: "./fleece-lined-jacket.jpg",
      name: "Fleece Denim Jacket",
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
            name: "Outer Fabric",
            material: "100% Organic Cotton Denim",
            weight: "Midweight",
            weave: "Twill Weave",
            waterResistance: "Not Water Resistant",
          },
          {
            name: "Lining Fabric",
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
        recycle: [
          {
            name: "Recycle Shop 1",
            address: "123 Fake Street",
            phone: "0756116675",
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
      id: 6,
      imageUrl: "./fleece-lined-jacket.jpg",
      name: "Fleece Denim Jacket",
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
            name: "Outer Fabric",
            material: "100% Organic Cotton Denim",
            weight: "Midweight",
            weave: "Twill Weave",
            waterResistance: "Not Water Resistant",
          },
          {
            name: "Lining Fabric",
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
        recycle: [
          {
            name: "Recycle Shop 1",
            address: "123 Fake Street",
            phone: "0756116675",
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
];

export default productData;
