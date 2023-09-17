import { mockRequest } from '@/api/mockRequest'

class Service {
  /**
   * 获取菜单
   */
  static getMenuApi = (): Promise<any> => mockRequest.get('/menu')
}

export default Service
