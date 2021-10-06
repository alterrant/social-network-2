import AvatarStyle from './MyAvatar.module.css'
import * as React from "react";

export default class MyAvatar extends React.Component {

  state = {
    switchStatus: true
  }

  toggle() {
    this.setState({
      switchStatus: !this.state.switchStatus
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
                    <span onDoubleClick={() => this.toggle(this)}>{this.props.myStatus}</span>
                  </div>
                  :
                  <div>
                    <input autoFocus={true} value={'Describe your status'} onBlur={() => this.toggle(this)}></input>
                  </div>
              }
            </div>
          </div>
        </div>
    )
  }
}