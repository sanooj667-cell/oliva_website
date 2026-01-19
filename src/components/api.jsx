import React from 'react'

export default function Api() {
  return (
    async function product_api(){
      const result = await axion.get(
        "https://api.escuelajs.co/api/v1/products"
      );

    }
  )
}
