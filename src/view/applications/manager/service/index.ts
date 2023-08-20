import { mockRequest } from '@/api/mockRequest'

class Server {
  /**
   * 获取应用列表
   */
  static getAppList() {
    return mockRequest.get('/applications/appList')
  }
}

export default Server
