import React from "react"

class box extends React.Component {
    render() {
      return (
        <div className="box col-sm-3 col-6">
            <span className="material-symbols-outlined" style={{color: this.props.color, fontSize: 100}} >
            {this.props.icon}
            </span>
            <p>{this.props.value} {this.props.unit}</p>
        </div>
          )
    }
  }
  
  export default box