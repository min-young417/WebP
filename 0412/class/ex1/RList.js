import React, { Component } from 'react'
export default class RList extends Component {
  render() {
    // items 속성에지정한items 배열을사용합니다.
    const items = this.props.items.split(",")
    // 아이템목록을기반으로li 요소를생성합니다.
    const itemsObj= items.map(
      (e) => {
        return <li>{e}</li>
    })
    // 타이틀
    let title = this.props.title
    if (!title) title = "LIST"
    // 렌더링할내용을반환합니다.
    return (
      <div>
        <h3>{title}</h3>
          <ul>{itemsObj}</ul>
      </div>
    )
  }
}