import { useEffect, useState } from "react";
import Tr from "./components/Tr";

function App() {
    const menuList = [
        {
            id: 1,
            name: '珍珠奶茶',
            describe: '香濃奶茶搭配QQ珍珠',
            price: 50,
            stock: 20,
        },
        {
            id: 2,
            name: '冬瓜檸檬',
            describe: '清新冬瓜配上新鮮檸檬',
            price: 45,
            stock: 18,
        },
        {
            id: 3,
            name: '翡翠檸檬',
            describe: '綠茶與檸檬的完美結合',
            price: 55,
            stock: 20,
        },
        {
            id: 4,
            name: '四季春茶',
            describe: '香醇四季春茶，回甘無比',
            price: 45,
            stock: 10,
        },
        {
            id: 5,
            name: '阿薩姆奶茶',
            describe: '阿薩姆紅茶搭配香醇鮮奶',
            price: 50,
            stock: 25,
        },
        {
            id: 6,
            name: '檸檬冰茶',
            describe: '檸檬與冰茶的清新組合',
            price: 45,
            stock: 20,
        },
        {
            id: 7,
            name: '芒果綠茶',
            describe: '芒果與綠茶的獨特風味',
            price: 55,
            stock: 18,
        },
        {
            id: 8,
            name: '抹茶拿鐵',
            describe: '抹茶與鮮奶的絕配',
            price: 60,
            stock: 20,
        }
    ];

    const [data, setData] = useState(menuList)
    const [newName, setNewName] = useState('')
    const [price, setPrice] = useState('')
    const [total, setTotal] = useState(0)

    useEffect(() => {
        setTotal(data.reduce((pre, curr) =>
            pre + curr.price, 0
        ))
    }, [data])

    return (
        <>
            <input type="text" value={newName} onChange={(e) => { setNewName(e.target.value) } }/>
            <input type="number" value={price} onChange={(e) => { setPrice(Number(e.target.value)) }} />
            <button type="button" onClick={() => {
                setData([
                    ...data,
                    {
                        id: new Date().getTime(),
                        name: newName,
                        price: price,
                    }
                ])
                setNewName('')
                setPrice('')
            }}>新增</button>
            <table>
                <thead>
                    <tr>
                        <th>品項</th>
                        <th>價錢</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>{
                    data.map((item) => {
                        return (
                            <Tr item={item} data={data} setData={ setData } />
                        )
                    })}
                </tbody>
            </table>
            總計：{ total }
        </>
    )
}

export default App