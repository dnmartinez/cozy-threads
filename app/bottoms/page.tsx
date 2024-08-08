import React from 'react'
import MainLayout from '../mainLayout'
import { getProducts } from '../lib/prisma'
import { kumbhSans } from '../ui/fonts'

export default async function Page() {
	const products = await getProducts()
	const bottoms = products.filter(
		(product) => product.category === 'BOTTOMS'
	)

	return (
		<>
			<MainLayout>
				<div></div>
				<div className='pt-28 bg-[#f8f9fb]'>
					<h1
						className={`text-3xl ${kumbhSans.className} font-light text-center mb-10`}
					>
						Shop All
					</h1>

					<div className='px-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
						{bottoms.map((bottom) => (
							<div
								className='card rounded-none bg-[#f8f9fb] w-full shadow-md transition-transform duration-300 transform hover:scale-105 mb-4'
								key={bottom.id}
							>
								<figure>
									<img
										src={`${bottom.image}`}
										alt='Shoes'
										className='w-full h-48 object-cover'
									/>
								</figure>
								<div className='card-body p-2'>
									<h2
										className={`card-title font-light border-b border-gray-300 ${kumbhSans.className} text-md`}
									>
										{`${bottom.title}`}
									</h2>
									<h3 className={`text-md mb-4 ${kumbhSans.className}`}>
										$ {`${bottom.price}`}
									</h3>
									<div className='card-actions justify-end'>
										<div className='badge badge-outline'>{`${bottom.category}`}</div>
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
