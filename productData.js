const productData = [
	{
		product: {
			id: 1,
			imageUrl: 'https://i.ebayimg.com/images/g/tTMAAOSwkClcdKBR/s-l1200.jpg',
			name: 'Fleece Denim Jacket',
			brand: 'Denimology',
			season: 'FW24',
			highlights: [
				{ svg: './cotton.svg', title: 'Organic Cotton' },
				{ svg: './recyclable.svg', title: 'Recycled Fleece' },
			],
			countryOfOrigin: 'Vietnam',
			menu: {
				materials: [
					[
						{
							name: 'Outer Fabric',
						},
						{
							material: '100% Organic Cotton Denim',
						},
						{
							weight: 'Midweight',
						},
						{
							weave: 'Twill Weave',
						},
						{
							waterResistance: 'Not Water Resistant',
						},
					],
					[
						{
							name: 'Lining Fabric',
						},
						{
							material: 'Recycled Fleece',
						},
						{
							weight: 'Midweight',
						},
						{
							breathability: 'Moderately Breathable',
						},
					],
					[
						{
							name: 'Buttons',
						},
						{
							material: 'Metal',
						},
					],
				],
				careInstructions: [
					{
						image: 'machinewash.png',
						instruction: 'Machine Wash',
					},
				],
				recycle: [
					{
						name: 'Recycle Shop 1',
						address: '123 Fake Street',
						phone: '0756116675',
					},
				],
				certifications: {
					BCorp: true,
					GOTS: true,
				},
			},
		},
	},
	{
		product: {
			id: 2,
			imageUrl:
				'data:image/jpeg;base64,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',
			name: 'Polyester Trousers',
			brand: 'PolyWear',
			season: 'SS23',
			highlights: ['Recycled Polyester', 'Quick-drying'],
			countryOfOrigin: 'China',
			menu: {
				materials: [
					[
						{
							name: 'Composition',
						},
						{
							material: 'Polyester',
						},
						{
							weight: 'Lightweight',
						},
						{
							waterResistance: 'Water Resistant',
						},
					],
				],
				careInstructions: [
					{
						image: 'machinewash.png',
						instruction: 'Machine Wash',
					},
				],
				recycle: [
					{
						name: 'Recycle Shop 1',
						address: '123 Fake Street',
						phone: '0756116675',
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
