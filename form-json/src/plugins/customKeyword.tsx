import { CustomKeyword } from '../../lib'

 const keyword: CustomKeyword = {
  name: 'test',
  definition: {
    keyword: 'test',
    macro: () => {
      return {
        minLength: 10
      }
    }
  },
  transformSchema(schema) {
    return {
      ...schema,
      minLength: 10
    }
  }
}

export default keyword
