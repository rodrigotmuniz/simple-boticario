export const getCollection = async (collectionName, client) => {
  const db = client.db(process.env.ENV) // Connect to the "products" database
  return db.collection(collectionName) // Access the "products" collection
}

export const createResponse = ({ body = {}, statusCode = 200 }) => {
  return {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Origin': '*',
    },
    statusCode,
    body: JSON.stringify(body),
  }
}
export const createErrorResponse = ({ message = 'Something wrong happened!', statusCode = 500 }) => {
  return createResponse({
    body: { message },
    statusCode,
  })
}

export const createFindByTag = (tag) => {
  return tag ? { tags: tag } : {}
}
