let product = null;

export function createProduct(nombre,descripcion,precioVenta,precioCompra,categoria,marca){
    product = {
        nombre:nombre,
        descripcion:descripcion,
        precioVenta:precioVenta,
        precioCompra:precioCompra,
        categoria:categoria,
        marca:marca
    }
    return product;
}

export function updateProduct(nombre,descripcion,precioVenta,precioCompra,categoria,marca){
    if(product){
        return "No existe el producto";
    }
        product.nombre=nombre,
        product.descripcion=descripcion,
        product.precioVenta=precioVenta,
        product.precioCompra=precioCompra,
        product.categoria=categoria,
        product.marca=marca
    
    return product;
}

export function deleteProduct(){
    return product = null;
}

export function getProduct(){
    return product;
}