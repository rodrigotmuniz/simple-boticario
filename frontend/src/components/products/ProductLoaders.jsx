
export async function findProductLoader({ params }) {
  return { unresolvedData: loadProductById(params.productId) }
}

async function loadProductById(id) {
  const response = await fetch(process.env.BASE_URL + id);

  if (!response.ok) {
    throw new Response(
      { message: 'Could not fetch details for selected event.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData;
  }
}


