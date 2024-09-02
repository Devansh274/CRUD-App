import React from "react"

class Additem extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
     
    render() { 
        return(
        <form onSubmit= {(e)=>{e.preventDefault();this.props.additem(this.state.productname,Number(this.state.productprice));}}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" onChange={(e)=>{this.setState({productname: e.currentTarget.value})}} value={this.state.value}/>
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input type="number" className="form-control" id="price" onChange={(e)=>{this.setState({productprice: Number(e.currentTarget.value)})}} value={this.state.value}/>
        </div>
        <button type="submit" className="btn btn-primary">Add</button>
        <h4 className='mt-3'>Your Cart :</h4>
      </form>)   
    }
}
 
export default Additem;  