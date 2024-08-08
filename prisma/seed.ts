const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
	// Products
	const product1 = await prisma.product.create({
		data: {
			title: 'Pink T-Shirt',
			description: 'Fine cotton pink t-shirt',
			category: 'TOPS',
			price: 19.99,
			image: '/pink-top.jpeg',
		},
	})

	const product2 = await prisma.product.create({
		data: {
			title: 'Purple Jacket',
			description: 'Stylish and comfortable jacket',
			category: 'TOPS',
			price: 90.99,
			image: '/purple-jacket.jpg',
		},
	})

	const product3 = await prisma.product.create({
		data: {
			title: 'Orange Pants',
			description: 'Colorful and comfortable pants',
			category: 'BOTTOMS',
			price: 54.59,
			image: '/orange-pants.jpeg',
		},
	})

	const product4 = await prisma.product.create({
		data: {
			title: 'Ethereal Short',
			description: 'Edgy and comfortable shorts',
			category: 'BOTTOMS',
			price: 78.34,
			image: '/cream-shorts.jpg',
		},
	})

	const product5 = await prisma.product.create({
		data: {
			title: 'Cool Glasses',
			description: 'Recycled Material',
			category: 'ACCESSORIES',
			price: 78.99,
			image: '/white-glasses.jpeg',
		},
	})

	const product6 = await prisma.product.create({
		data: {
			title: 'Handy Totebag',
			description: 'Recycled Material',
			category: 'ACCESSORIES',
			price: 78.99,
			image: '/yellow-totebag.jpg',
		},
	})

	console.log('Seed data worked')
}

main()
	.then(() => {
		console.log('Seed data worked')
	})
	.catch((e) => {
		console.log('Seed data did not work')
		console.error(e)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
