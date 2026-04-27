const BASE = `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`;

export const cld = (publicId, transforms = "") =>
    `${BASE}/f_auto,q_auto${transforms ? `,${transforms}` : ""}/${publicId}`;
