import user from './server/user'
import article from './server/article'
import image from './server/image'

const config: ApiConfig = {
  apiEnv: 'SERVER',
  set: async (key, value) => {
    localStorage.setItem(key, value)
  },
  get: async (key) => {
    const res = localStorage.getItem(key)
    return res || undefined
  },
}

window.API = { user, article, image, config }
