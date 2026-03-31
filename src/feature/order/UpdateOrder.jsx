import { useFetcher, useParams } from 'react-router-dom'
import Button from '../../ui/Button'

import { updateOrder } from '../../service/apiRestaurant'

function UpdateOrder() {
  const fetcher = useFetcher()
  const { orderId } = useParams()

  return (
    <fetcher.Form method="PATCH" className="text-right text-xs sm:text-base">
      <Button type="primary">Make Priority</Button>
    </fetcher.Form>
  )
}

export default UpdateOrder

export async function action({ params, request }) {
  const data = {
    priority: true,
  }
  await updateOrder(params.orderId, data)

  return null
}
