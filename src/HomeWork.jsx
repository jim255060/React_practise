import 'bootstrap/scss/bootstrap.scss'
import { useState, useEffect } from 'react'
import ListGroup from './components/ListGroup'
import OrderList from './components/OrderList'
import CartList from './components/CartList'

function HomeWork() {
    const data = [
        {
            "id": 1,
            "name": "珍珠奶茶",
            "description": "香濃奶茶搭配QQ珍珠",
            "price": 50
        },
        {
            "id": 2,
            "name": "冬瓜檸檬",
            "description": "清新冬瓜配上新鮮檸檬",
            "price": 45
        },
        {
            "id": 3,
            "name": "翡翠檸檬",
            "description": "綠茶與檸檬的完美結合",
            "price": 55
        },
        {
            "id": 4,
            "name": "四季春茶",
            "description": "香醇四季春茶，回甘無比",
            "price": 45
        },
        {
            "id": 5,
            "name": "阿薩姆奶茶",
            "description": "阿薩姆紅茶搭配香醇鮮奶",
            "price": 50
        },
        {
            "id": 6,
            "name": "檸檬冰茶",
            "description": "檸檬與冰茶的清新組合",
            "price": 45
        },
        {
            "id": 7,
            "name": "芒果綠茶",
            "description": "芒果與綠茶的獨特風味",
            "price": 55
        },
        {
            "id": 8,
            "name": "抹茶拿鐵",
            "description": "抹茶與鮮奶的絕配",
            "price": 60
        }
        ]
    const [drinks] = useState(data)
    const [cart, setCart] = useState([])
    const [sum, setSum] = useState(0)
    const [description, setDescription] = useState('')
    const [orders, setOrders]=useState([])

    const addCart = (drink) => {
        //先尋找購物車是否有該元素
        const existingItem = cart.find((item) => item.name === drink.name)
        console.log(existingItem)
        // 如果元素已存在，增加其数量
        if(existingItem){
            const newDrink = cart.map((item) => {
                return(
                    item.name === drink.name ? {
                        ...drink,
                        quantity: item.quantity < 10 ? item.quantity + 1 : item.quantity,
                    } : item
                )
            })
            console.log(drink)
            setCart(newDrink)
        }
        // 如果项不存在，将其添加到数组中
        else{
            setCart([
                ...cart,{
                    ...drink,
                    quantity: 1, //數量
                }
            ])
        }
    }
    
    const updateCart = (item, value) => {
        const newCart = cart.map((cartItem) => {
            if (cartItem.id === item.id) {
                return ({
                    ...cartItem,
                    quantity: parseInt(value),
                    subtotal: cartItem.price * parseInt(value),
                })
            }
            return(cartItem)
        })
        setCart(newCart)
    }

    const createOrder = () => {
        setOrders({
            cart,
            description,
            sum,
        })
        setDescription()
        setCart([])
    }

    // 購物車$總計
    useEffect(() => {
        setSum(cart.reduce((pre, curr) =>
            pre + curr.quantity*curr.price, 0
        ))
    }, [cart])

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <div className="list-group">
                        {
                            drinks.map((drink) => {
                                return (
                                    <ListGroup drink={ drink } addCart={ addCart } />
                                    )
                            })
                        }
                    </div>
                </div>
                <div className="col-md-8">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" width="50">操作</th>
                                <th scope="col">品項</th>
                                <th scope="col">描述</th>
                                <th scope="col" width="90">數量</th>
                                <th scope="col">單價</th>
                                <th scope="col">小計</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item) => {
                                    return (
                                        <CartList cart={cart} item={item} setCart={setCart} updateCart={ updateCart } />
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    {
                        cart.length ===0 ? <div className="alert alert-primary text-center" role="alert">
                        購物車內尚無商品</div> : (
                        <>
                            <div className="text-end mb-3">
                                <h5>總計: <span>${ sum }</span></h5>
                            </div>
                            <textarea
                                className="form-control mb-3"
                                rows="3"
                                placeholder="備註"
                                onChange={(e) => {
                                    setDescription(e.target.value)
                                }}
                            ></textarea>
                            <div className="text-end">
                                <button className="btn btn-primary" onClick={(e) => {
                                    e.preventDefault()
                                    createOrder()
                                }}>送出</button>
                            </div>
                        </>
                        )
                    }
                </div>
            </div>
            <hr />
            <div className="row justify-content-center">
                <div className="col-8">
                    {
                        orders.length === 0 ? <div className="alert alert-secondary text-center" role="alert">尚未建立訂單</div> : (
                            <OrderList orders={ orders } />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default HomeWork
