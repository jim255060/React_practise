function Tr({ item, data, setData }) {
    return (
        <tr key={item.id}>
            <td>{ item.name }</td>
            <td>{item.price}</td>
            <td>
                <button type="button" onClick={() => {
                    setData(data.filter((newItem) => item.id !== newItem.id))
                }}>刪除</button>
            </td>
        </tr>
    )
}

export default Tr