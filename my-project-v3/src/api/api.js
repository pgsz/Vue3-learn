import service from './https'

export const getMenus = (data) => {
  return service({
    method: 'post',
    url: '/api/jump/urls',
    data
  })
}