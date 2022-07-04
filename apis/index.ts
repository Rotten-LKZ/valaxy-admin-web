import user from './server/user'
import article from './server/article'
import image from './server/image'

const config: ApiConfig = {
  apiEnv: 'SERVER',
}

window.API = { user, article, image, config }
