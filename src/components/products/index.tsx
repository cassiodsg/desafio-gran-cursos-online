import React, { useEffect, useState } from "react";
import { Card, Image, Row, Col, Button, Stack } from "react-bootstrap";
import { IProducts } from "../../model/products";
import { useWindowSize, useFetch } from "@hooks";
import NoImage from "@assets/images/no-image.png";
import LeftChevronIcon from "@assets/icons/chevron-left.svg";
import RightChevronIcon from "@assets/icons/chevron-right.svg";
import HeartIcon from "@assets/icons/heart.svg";
import StarWhiteIcon from "@assets/icons/star-white.svg";
import ShoopingCartIcon from "@assets/icons/shopping-cart.svg";
import ShoopingBagIcon from "@assets/icons/shopping-bag.svg";
import "./products.style.scss";

const Products = (): JSX.Element => {
  const { width } = useWindowSize();
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [listProducts, setListProducts] = useState<any>([]);

  const handlePage = (index: any) => {
    setPage(index);
  };

  const nextPage = () => {
    if (page === data!.length - 1) {
      setPage(0);
    } else {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page === 0) {
      setPage(data!.length - 1);
    } else {
      setPage(page - 1);
    }
  };

  useEffect(() => {
    if (loading) return;
    setListProducts(data[page]);
  }, [loading, page]);

  return (
    <>
      {listProducts.map((products: IProducts) => {
        return (
          <Card
            key={products._id}
            className={`shadow-sm bg-body border-0 ${
              width >= 992 ? "products-wrapper" : "mb-3"
            }`}
          >
            <Card.Body className="d-flex justify-content-between align-items-center p-2">
              <Row>
                <Col
                  xs={12}
                  md={12}
                  lg={12}
                  xl={2}
                  className="d-flex align-items-center"
                >
                  <Image
                    src={NoImage}
                    alt="sem imagem"
                    className="img-fluid mx-auto "
                  />
                </Col>
                <Col xs={12} md={7} lg={7} xl={7}>
                  <div className="product-content">
                    <p className="product-title">{products.name}</p>
                    <p className="product-category">
                      By <b>{products.category}</b>
                    </p>
                    <p className="product-description">
                      {products.description}
                    </p>
                  </div>
                </Col>
                <Col xs={12} md={5} lg={5} xl={3} className={width >= 992 ? 'products-divider': ''}>
                  <div className="d-flex flex-column">
                    <div className="products-rating-position"><span className="products-rating">{products.ranting} <Image src={StarWhiteIcon} /></span></div>
                    <p className="products-value">{products.productValue}</p>
                    <p className="products-shipping"><Image src={ShoopingCartIcon} /> Free Shipping</p>
                    <Button className="products-wishlist"><Image src={HeartIcon} /> Wishlist</Button>
                    <Button className="products-shopping"><Image src={ShoopingBagIcon} />  Add to cart</Button>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        );
      })}
      <div className="products-paginate">
        <button
          className="product-btn-paginate product-next-btn"
          onClick={() => prevPage()}
        >
          {!loading ? (
            <Image src={LeftChevronIcon} alt="icone de seta" />
          ) : null}
        </button>
        <div className="product-btn-container">
          {loading
            ? null
            : data!.map((item, index) => {
                return (
                  <button
                    key={index}
                    className={`product-page-btn ${
                      index === page ? "product-active-btn" : null
                    }`}
                    onClick={() => {
                      handlePage(index);
                    }}
                  >
                    {index + 1}
                  </button>
                );
              })}
        </div>
        <button
          className="product-btn-paginate product-next-btn"
          onClick={() => nextPage()}
        >
          {!loading ? (
            <Image src={RightChevronIcon} alt="icone de seta" />
          ) : null}
        </button>
      </div>
    </>
  );
};

export { Products };
