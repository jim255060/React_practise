function OrderList({ orders }) {
    return (
        <div className="card">
            <div className="card-body">
                <div className="card-title">
                    <h5>訂單</h5>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">品項</th>
                                <th scope="col">數量</th>
                                <th scope="col">小計</th>
                            </tr>
                        </thead>
                        <tbody>{
                            orders.cart.map((order) => {
                                return (
                                    <tr key={ order.id }>
                                        <td>{ order.name }</td>
                                        <td>{ order.quantity }</td>
                                        <td>{ order.subtotal }</td>
                                    </tr>
                                )
                            })
                        }</tbody>
                    </table>
                    <div className="text-end">備註: <span>{ orders.description }</span></div>
                    <div className="text-end">
                        <h5>總計: <span>${ orders.sum }</span></h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderList