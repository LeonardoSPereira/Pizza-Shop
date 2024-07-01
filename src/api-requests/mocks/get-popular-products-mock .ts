import { http, HttpResponse } from 'msw'

import { GetPopularProducts } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProducts
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Pizza 01', amount: 5 },
    { product: 'Pizza 02', amount: 6 },
    { product: 'Pizza 03', amount: 7 },
    { product: 'Pizza 04', amount: 8 },
    { product: 'Pizza 05', amount: 9 },
  ])
})
