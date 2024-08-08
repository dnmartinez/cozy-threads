// 
// app/accessories/[id]/page.tsx

import React from 'react';
import { getProductById } from '../../lib/prisma';
import { kumbhSans } from '../../ui/fonts';
import { notFound } from 'next/navigation';
import Link from 'next/link';

type Props = {
  params: {
    id: string;
  };
};

const AccessoryPage = async ({ params }: Props) => {
  // Parse the ID from the URL params
  const productId = parseInt(params.id, 10);

  // Ensure ID is a valid number
  if (isNaN(productId)) {
    notFound();
    return null; // Return null or an empty fragment
  }

  // Fetch product by ID
  const product = await getProductById(productId);

  // Handle case where product is not found
  if (!product) {
    notFound();
    return null; // Return null or an empty fragment
  }

  return (
		<div className='pt-28 bg-[#f8f9fb]'>
			<div className='px-8 md:flex'>
				{/* Image Section */}
				<div className='md:w-2/3'>
					<img
						src={product.image}
						alt={product.title}
						className='w-full h-full object-cover'
					/>
				</div>
				{/* Text Section */}
				<div className='md:w-1/3 md:pl-8 flex flex-col justify-center items-center md:items-start mt-4 md:mt-0'>
					<h1 className={`text-3xl ${kumbhSans.className} font-light mb-4`}>
						{product.title}
					</h1>
					<p className={`text-lg ${kumbhSans.className} mb-4`}>
						{product.description}
					</p>
					<h2 className={`text-xl ${kumbhSans.className} font-semibold mb-4`}>
						${product.price}
					</h2>
					<button className='btn btn-primary'>Add to Cart</button>
				</div>
			</div>
		</div>
	)
};

export default AccessoryPage;
