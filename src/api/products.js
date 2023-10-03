import axios from "axios";


export const products = () => {
    return axios.get('https://fakestoreapi.com/products')
        .then(res=>{
            res.json()
        })
        .catch(err=>err)
}



export const product = (id) => {
    return axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(res=>{
            res.json()
        })
        .catch(err=>err)
}


export const filterPro = (st = 'desc') => {
    return axios.get(`https://fakestoreapi.com/products?sort=${st}`)
        .then(res=>{
            res.json()
        })
        .catch(err=>err)
}


export const categoryPros = (category) =>{
    return axios.get(`https://fakestoreapi.com/products/category/${category}`)
    .then(res=>{
        res.json()
    })
    .catch(err=>err)
}


export const addPro = (pro) =>{
    return axios.post(`https://fakestoreapi.com/products`, JSON.stringify(pro))
    .then(res=>{
        res.json()
    })
    .catch(err=>err)
}