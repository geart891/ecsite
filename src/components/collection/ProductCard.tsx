import * as React from "react";
import { Link } from "react-router-dom";
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

interface IProductCard {
  initialProduct: any;
}
const styles: React.CSSProperties = {

};
class ProductCard extends React.Component<IProductCard, {}> {
  state = {};
  render() {
    const { props: { initialProduct } } = this;
    console.log(initialProduct.albums.portrait[0]);
    const styleThumbnail = {
      background: `url(${initialProduct.albums.portrait[0]}) no-repeat`,
      backgroundPosition: "center right",
      width: "100%",
      backgroundSize: "cover",
      height: "280px",
    }
    return (
      <Link to={`/products/${initialProduct.permalink}`}>
        <Card className="col-xs-4 product-card">
          {/* <CardHeader title="URL Avatar" subtitle="Subtitle" avatar="images/jsa-128.jpg" />
          <CardMedia overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}>
            <img src="images/nature-600-337.jpg" alt="" />
          </CardMedia>
          <CardTitle title="Card title" subtitle="Card subtitle" />
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla
            facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis
            quis lacus id, pellentesque lobortis odio.
          </CardText>
          <CardActions>
            <FlatButton label="Action1" />
            <FlatButton label="Action2" />
          </CardActions> */}
          <div className="thumbnail" style={styleThumbnail}></div>
          <div className="detail">
            <div className="col-xs-7 product-title">
              {initialProduct.title}
            </div>
            <div className="col-xs-5 product-price">
              {initialProduct.price}$
            </div>
          </div>
        </Card>
      </Link>
    );
  }
}

export default ProductCard;
