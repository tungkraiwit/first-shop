import React from 'react';
import image from './image/file01.gif'
class ProductForm extends React.Component {
  state = { product: [{}] }

  componentDidMount() {
    fetch('/product')
      .then(req => req.json())
      .then(product => this.setState({ product }));
  }

  render() {
    return (
      <div>
        <div>
          {this.state.product.map(e =>
            <table align="left" width="300px" height="320px">
              <tr>
                <table className="columns" height="100%" border="1px" width="94%">
                  <table align="center" border="1px">
                    <img src={image} width="150px" height="60%" />
                  </table>
                  <table align="center" width="90%" height="90px" border="1px">
                    <h4 align="center"> {e.productName} </h4>                   

                  </table>
                </table>
              </tr>
              <br/>
            </table>
          )}
        </div>
      </div>
    )
  }
}

export default ProductForm