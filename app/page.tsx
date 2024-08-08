// app/page.tsx

'use client'

import { useEffect, useState } from 'react'
import MainLayout from './mainLayout'
import Hero from '@/app/ui/hero'
import Image from 'next/image'
import Link from 'next/link'

type Product = {
	id: number
	title: string
	price: number
	image: string
	category: string
}

export default function Home() {
	const [products, setProducts] = useState<Product[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		async function fetchProducts() {
			try {
				const response = await fetch('/api/products')
				if (!response.ok) {
					throw new Error('Network response was not ok')
				}
				const data: Product[] = await response.json()
				setProducts(data)
			} catch (error) {
				setError('Failed to load products')
				console.error('Fetch error:', error)
			} finally {
				setLoading(false)
			}
		}

		fetchProducts()
	}, [])

	if (loading) return <div>Loading...</div>
	if (error) return <div>{error}</div>

	return (
		<>
			<MainLayout>
				<Hero />
				<div className='pt-28 bg-[#f8f9fb]'>
					<h1 className='text-3xl font-light text-center mb-10'>Shop All</h1>
					<div className='px-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
						{products.map((product) => (
							<div
								className='card rounded-none bg-[#f8f9fb] w-full shadow-md transition-transform duration-300 transform hover:scale-105 mb-4'
								key={product.id}
							>
								<figure>
									<Image
										src={product.image}
										alt={product.title}
										width={500}
										height={500}
										className='w-full h-48 object-cover'
									/>
								</figure>
								<div className='card-body p-2'>
									<h2 className='card-title font-light border-b border-gray-300 text-md'>
										{product.title}
									</h2>
									<h3 className='text-md mb-4'>${product.price}</h3>
									<div className='card-actions justify-end'>
										<div className='badge badge-outline'>
											{product.category}
										</div>
										<button className='btn btn-primary mt-2'>
											Add to Cart
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</MainLayout>
		</>
	)
}
