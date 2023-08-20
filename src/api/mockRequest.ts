import { createAxiosByinterceptors } from '@/api/request'

export const mockRequest = createAxiosByinterceptors({
  baseURL: '/mock'
})
