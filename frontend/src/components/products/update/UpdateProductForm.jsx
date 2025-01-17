import { Form, redirect, useNavigate, useNavigation } from 'react-router-dom'

export default function UpdateProductForm({ product, method = 'PATCH' }) {
  const navigate = useNavigate()
  const navigation = useNavigation()

  const isSubmitting = navigation.state === 'submitting'

  function cancelHandler() {
    navigate('/')
  }

  return (
    <Form method={method} className="bg-white p-6 rounded-lg shadow-md space-y-6">

      {/* Title Input */}
      <div className="flex flex-col">
        <label htmlFor="title" className="text-sm font-medium text-gray-700">
          Título
        </label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={product ? product.title : ''}
          className="mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
        />
      </div>

      {/* Current Price Input */}
      <div className="flex flex-col">
        <label htmlFor="curr" className="text-sm font-medium text-gray-700">
          Preço Atual
        </label>
        <input
          id="curr"
          type="number" 
          step="0.01"
          name="curr"
          required

          defaultValue={product ? product.price.curr : ''}
          className="mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
        />
      </div>

      {/* Description Input */}
      <div className="flex flex-col">
        <label htmlFor="description" className="text-sm font-medium text-gray-700">
          Descrição
        </label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={product ? product.description : ''}
          className="mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
        />
      </div>

      {/* Actions */}
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={cancelHandler}
          disabled={isSubmitting}
          className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100 disabled:opacity-50"
        >
          Cancelar
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-2 bg-teal-700 text-white rounded-md hover:bg-teal-800 focus:ring focus:ring-blue-300 disabled:opacity-50"
        >
          {isSubmitting ? 'Atualizando...' : 'Salvar'}
        </button>
      </div>
    </Form>
  )
}

export async function productUpsertAction({ request, params }) {
  const method = request.method

  const formData = await request.formData()
  const updateProduct = Object.fromEntries(formData)

  let URL = process.env.BASE_URL

  if (method === 'PATCH') {
    const eventId = params
    URL += params.productId
  }

  const response = await fetch(URL, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updateProduct),
  })

  if (response.status === 422) {
    return response
  }

  if (!response.ok) {
    throw new Response({ message: 'Could not save event.' }, { status: 500 })
  }

  return redirect('/')
}
