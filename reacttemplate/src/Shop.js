import Product from './Product';
import products_json from './products.json';

function Shop() {

  return (
    <div className="shop-container">
      <section class="page-header">
        <div class="overly"></div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="content text-center">
                <h1 class="mb-3">Shop</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="products-shop section">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="row align-items-center">
                <div class="col-lg-12 mb-4 mb-lg-0">
                  <div class="section-title">
                    <h2 class="d-block text-left-sm">Shop</h2>

                    <div class="heading d-flex justify-content-between mb-5">
                      <p class="result-count mb-0"> Showing 1–6 of 17 results</p>
                      <form class="ordering " method="get">
                        <select name="orderby" class="orderby form-control" aria-label="Shop order" >
                          <option value="" selected="selected">Default sorting</option>
                          <option value="">Sort by popularity</option>
                          <option value="">Sort by average rating</option>
                          <option value="">Sort by latest</option>
                          <option value="">Sort by price: low to high</option>
                          <option value="">Sort by price: high to low</option>
                        </select>
                        <input type="hidden" name="paged" value="1" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">

                {products_json.map((product) => (
                  <Product
                    key={product.id} // add a unique key for each product
                    img={product.img}
                    title={product.title}
                    price={product.price}
                  />
                ))}

                <div class="col-12">
                  <nav aria-label="Page navigation">
                    <ul class="pagination">
                      <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">&laquo;</span>
                        </a>
                      </li>
                      <li class="page-item active"><a class="page-link" href="#">1</a></li>
                      <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">&raquo;</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Shop;