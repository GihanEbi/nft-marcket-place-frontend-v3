// src/app/api/upload/route.ts

import { NextRequest, NextResponse } from 'next/server';
import pinataSDK from '@pinata/sdk';
import { Readable } from 'stream';

// Initialize Pinata
// These keys are read from your .env.local file (server-side only)
const pinata = new pinataSDK({
  pinataApiKey: process.env.PINATA_API_KEY,
  pinataSecretApiKey: process.env.PINATA_SECRET_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const file = formData.get('file') as File | null;
    const name = formData.get('name') as string | null;
    const description = formData.get('description') as string | null;

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded.' }, { status: 400 });
    }
    if (!name || !description) {
      return NextResponse.json({ error: 'Name and description are required.' }, { status: 400 });
    }

    // Convert file to buffer and then to a readable stream
    const buffer = Buffer.from(await file.arrayBuffer());
    const stream = Readable.from(buffer);

    console.log('Uploading image to IPFS via Next.js API Route...');
    const imageResult = await pinata.pinFileToIPFS(stream, {
      pinataMetadata: { name: file.name },
    });
    
    const imageUrl = `ipfs://${imageResult.IpfsHash}`;
    console.log('Image uploaded:', imageUrl);
    
    // Create and upload the metadata JSON
    const metadata = {
      name,
      description,
      image: imageUrl,
    };
    
    console.log('Uploading metadata to IPFS...');
    const metadataResult = await pinata.pinJSONToIPFS(metadata);
    const metadataUrl = `ipfs://${metadataResult.IpfsHash}`;
    console.log('Metadata uploaded:', metadataUrl);

    // Send the metadata URL back to the client
    return NextResponse.json({ metadataUrl }, { status: 200 });

  } catch (error) {
    console.error('Upload error in Next.js API Route:', error);
    return NextResponse.json({ error: 'Failed to upload to IPFS' }, { status: 500 });
  }
}