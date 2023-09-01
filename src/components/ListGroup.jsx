function ListGroup({ drink, addCart }) {
    return(
        <a href="#" className="list-group-item list-group-item-action" onClick={(e) => {
            e.preventDefault(); //<a>連結取消跳轉網頁
            addCart(drink)
        }}>
            <div className="d-flex w-100 justify-content-between" key={drink.id}>
                <h5 class="mb-1">{drink.name}</h5>
                <small>${ drink.price }</small>
            </div>
            <p className="mb-1">{ drink.description }</p>
        </a>
    )
}

export default ListGroup