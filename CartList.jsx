function CartList({cart, item, setCart, updateCart }) {
    return (
    <>
        <tr>
            <td><button type="button" className="btn btn-sm" onClick={() => {
                // 刪除操作 利用filter()來做篩選
                setCart(cart.filter((newItem) => {
                    return newItem.id !== item.id
                }))
            }}>x</button></td>
            <td>{item.name}</td>
            <td><small>{item.description}</small></td>
            <td>
                <select className="form-select" value={item.quantity} onChange={(e) => {
                    const value = e.target.value
                    updateCart(item, value)
                }}>
                    {[...Array(10).keys()].map((item) => {
                        return (
                            <option value={item+1} key={item}>{ item +1}</option>
                        )
                    })}
                </select>
            </td>
            <td>{ item.price }</td>
            <td>{ item.quantity*item.price }</td>
        </tr>
    </>
    )
}

export default CartList