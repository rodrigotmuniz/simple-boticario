import { MongoClient, ObjectId } from 'mongodb'
import { createErrorResponse, createFindByTag, createResponse, getCollection } from './helper.js'
const client = new MongoClient(process.env.MONGODB_URI)

export async function createProduct(event) {
  try {
    const productData = JSON.parse(event.body)
    const collection = await getCollection('products', client)

    const result = await collection.insertOne(productData)

    return createResponse({
      body: {
        message: 'Product created successfully!',
        productId: result.insertedId,
      },
      statusCode: 201,
    })
  } catch (err) {
    return createErrorResponse({ message: err.message })
  }
}

export async function getProducts(event) {
  try {
    const collection = await getCollection('products', client)

    const tagFilter = createFindByTag(event.queryStringParameters?.tag)
    const result = await collection.find(tagFilter).toArray()

    return createResponse({
      body: result,
      statusCode: 200,
    })
  } catch (err) {
    return createErrorResponse({ message: err.message })
  }
}

export async function getProductById(event) {
  try {
    const { id } = event.pathParameters
    const collection = await getCollection('products', client)

    const product = await collection.findOne({ _id: new ObjectId(id) })

    if (!product) {
      return createResponse({
        body: { message: 'Product not found' },
        statusCode: 404,
      })
    }
    return createResponse({
      body: product,
      statusCode: 200,
    })
  } catch (err) {
    return createErrorResponse({ message: err.message })
  }
}

export async function updateProduct(event) {
  try {
    const { id } = event.pathParameters
    const {curr, description, title} = JSON.parse(event.body)
    const collection = await getCollection('products', client)

    const product = await collection.findOne({ _id: new ObjectId(id) })
    product.title = title
    product.description = description
    product.price.curr = +curr

    const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: product })

    if (result.matchedCount === 0) {
      return createResponse({
        statusCode: 404,
        body: { message: 'Product not found' },
      })
    }

    return createResponse({
      statusCode: 200,
      body: { message: 'Product updated successfully!' },
    })
  } catch (err) {
    return createErrorResponse({ message: err.message })
  }
}

export async function deleteProduct(event) {
  try {
    const { id } = event.pathParameters
    const collection = await getCollection('products', client)

    const result = await collection.deleteOne({ _id: new ObjectId(id) })

    if (result.deletedCount === 0) {
      return createResponse({
        body: { message: 'Product not found' },
        statusCode: 404,
      })
    }
    return createResponse({
      body: { message: 'Product deleted successfully!' },
      statusCode: 200,
    })
  } catch (err) {
    return createErrorResponse({ message: err.message })
  }
}
