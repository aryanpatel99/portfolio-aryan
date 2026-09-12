const BASE = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`;

export const cld = (publicId, transforms = "") =>
    `${BASE}/f_auto,q_auto${transforms ? `,${transforms}` : ""}/${publicId}`;
