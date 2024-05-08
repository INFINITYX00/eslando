const productData = [
  {
    product1: {
      id: 1,
      imageUrl: "Image url",
      name: "Fleece Denim Jacket",
      brand: "Denimology",
      highlights: ["Organic Cotton", "Recycled Fleece"],
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
            image: "machinewash.png",
            instruction: "Machine Wash",
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
          BCorp: true,
          GOTS: true,
        },
      },
    },
  },
];

export default productData;
