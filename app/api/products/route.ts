import { NextResponse } from 'next/server';
import { getProducts } from '../../lib/prisma';

export async function GET() {
  try {
    const products = await getProducts();
    return NextResponse.json(products);
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return NextResponse.error();
  }
}