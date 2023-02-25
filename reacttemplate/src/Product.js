function Product({img, title, price}) {
  return (
    <div class="col-lg-4 col-12 col-md-6 col-sm-6 mb-5" >
      <div class="product">
        <div class="product-wrap">
          <a href="/product-single"><img class="img-fluid w-100 mb-3 img-first" src={"assets/images/" + img + ".jpg"} alt="product-img" /></a>
        </div>

        <div class="product-hover-overlay">
          <a href="#">Add to cart</a>
        </div>

        <div class="product-info">
          <h2 class="product-title h5 mb-0"><a href="/product-single">{title}</a></h2>
          <span class="price">
            ${price}
          </span>
        </div>
      </div>
    </div>
  )
}
export default Product;