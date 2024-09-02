import React from "react";
class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    let i=0
    this.props.product.map((product)=>{i++})
    return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand">
          Shopify
        </a>
        <div className="info">
          <h5 className="navbar-brand">Total Items added: </h5> 
          <span className="badge bg-secondary">{i}</span>
        </div>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e)=>{this.setState({productname: e.currentTarget.value})}} value={this.state.value}
            />
            <button className="btn btn-outline-success" type="submit" onClick={(e)=>{e.preventDefault();this.props.finditem(this.state.productname);}}>
              Search
            </button>
          </form> 
        
      </div>
    </nav>);
  }
}
 
export default Navbar;
