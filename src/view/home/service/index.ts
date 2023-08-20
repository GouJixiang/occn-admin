import { mockRequest } from '@/api/mockRequest'

class Service {
  /**
   * 获取菜单
   */
  static getMenuApi = (): Promise<never> => mockRequest.get('/menu')
}

export default Service
