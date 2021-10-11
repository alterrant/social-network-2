import AvatarStyle from './MyAvatar.module.css'
import * as React from "react";

export default class MyAvatar extends React.Component {

  state = {
    switchStatus: false,
    myStatus: this.props.myStatus
  }

  toggle() {
    this.setState({
      switchStatus: !this.state.switchStatus
    })
    if (!this.state.switchStatus) {
      //Ниже вместо set должен быть put
      this.props.putMyStatus(this.state.myStatus)
    }
  }

  changeStatus = (e) => {
    this.setState({
      myStatus: e.currentTarget.value
    })
}

  render() {
    return (
        <div className={AvatarStyle.wrapper}>
          <img src={this.props.img} alt="myAvatar"/>
          <div>
            <p>{this.props.description}</p>
            <div>
              {(!this.state.switchStatus)
                  ?
                  <div>
                    <span onDoubleClick={() => this.toggle(this)}>{this.props.myStatus || 'Haven\'t status'}</span>
                  </div>
                  :
                  <div>
                    <input autoFocus={true} onChange={this.changeStatus} onBlur={() => this.toggle(this)} value={this.state.myStatus}/>
                  </div>
              }
            </div>
          </div>
        </div>
    )
  }
}