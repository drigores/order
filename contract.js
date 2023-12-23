const Customer = {
    customerId: String,
    customerName:String,
    address: String,
    phoneNumber: String,
    AddCustumer: ()=>{},
    EditCustomer: ()=>{},
    DeleteCustomer: ()=>{},
}

const Order = {
    orderID: Int,
    customerId: String,
    productOrder: [],
    orderDate: Date,
    createOrder: Function,
    editOrder: (orderId) =>{}
}


const ProductOrder = {
    orderId: String,
    productId: String,
    amount: Float,
    productPrice: Int
}


const Product = {
    productId: Int,
    productPrice: Float,
    productType: String,
    addProduct: Function,
    modifyProduct: Function,
    selectProduct: (productId)=>{}
}

const Stock = {
    productId:Int,
    quantity:Int,
    ShopNo: Int,
    addStock: Function,
    modifyStock: (productId) =>{},
}
