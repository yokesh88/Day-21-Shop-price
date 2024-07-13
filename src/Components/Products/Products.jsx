import Card from "../Card/Card";

function Products({ products, setCartNo }) {
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {products.map((item, index) => {
            return (
              <>
                <Card cardData={item} key={index} updateCartNo={setCartNo} />
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Products;