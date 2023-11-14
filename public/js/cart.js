const $ = id => document.getElementById(id)
const addItemToCart = async(quantity, product) => {
    try{
        const response = await fetch(/api/cart,{
            method: 'POST',
            body: JSON.stringify({
                quantity, 
                product
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const result = await response.json()
        console.log(result)
        if(!result.ok){
            throw new Error(result.msg)
        }
    }catch(error){
        Swal.fire({
            title: "Upss",
            icon: "error",
            text: error.message
        })
    }
}
const showProductsInCart = (products) => {
    products.forEach(({id,image, title, price, quantity}) => {
        if($('cart-table')){
            $('cart-table').innerHTML = null
        }
        $('cart-table').innerHTML = null;
        $('cart-table').innerHTML +=  `<tr>
        <th scope="row"><img src="/img/products/${image}" width="100" alt=""></th>
        <td>${title}</td>
        <td>${price * quantity}</td>
        <td>
        <div class="d-flex gap-2">
        <button class="btn btn-sm btn-danger"><i class="fa-solid fa-minus"></i></button>
        <input type="text" value=" ${quantity}" style="width:30px"/>
        <button class="btn btn-sm btn-success" onclick="addItemToCart(1,${id})"><i class="fa-solid fa-plus"></i></button>
        </div>
        </td>
      </tr>`
    });
}
window.onload = function(){
    $('btn-cart') && $('btn-cart').addEventListener('click',async function(e){
        try {
            const response = await fetch('/api/cart')
            const {ok,data} = await response.json()
            if(ok){
                if(data.products.length){
                    $('cart-body').innerHTML = 
                    `<table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Imagen</th>
                        <th scope="col">Producto</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                      </tr>
                    </thead>
                    <tbody id="cart-table">

                    </tbody>
                    <caption>
                        <div class="d-flex justify-content-end">
                               <h5>Total: ${data.total}</h5>
                        </div>
                    </caption>
                  </table>` 
                  showProductsInCart(data.products)
                }else{
                    $('cart-body').innerHTML = <div class="alert alert-warning" role="alert">No hay productos de los carritos</div>
                }
            }
        } catch (error) {
            console.log(error)
            alert(error.msg)
        }
    })
}