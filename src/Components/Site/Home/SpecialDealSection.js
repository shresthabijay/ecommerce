import React, { Component } from 'react'
import {Segment,Icon,Card,Grid,Header,Image,Label,Divider} from "semantic-ui-react"
import DisplayCard from "./DisplayCard"

export default class SpecialDealSection extends Component {
  constructor(props) {
    super(props)  
    this.data=[
      {productName:"Asus Zen",productDetail:"Gaming Laptop",imageLink:"https://laptoping.com/specs/wp-content/uploads/2015/09/Asus-G752-G752VL-G752VT-G752VY-Gaming-Laptop.jpg",previousPrice:"$1200",price:"$999"},
      {productName:"Rick and Morty Tshirt",productDetail:"Wabalabaaadubdub!!!",imageLink:"https://rockatee.com/wp-content/uploads/2018/01/image-95.jpeg",previousPrice:"$120",price:"$99"},
      {productName:"RayBan",productDetail:"Stylish Sunglass",imageLink:"https://static.highsnobiety.com/wp-content/uploads/2017/02/16170849/ray-ban-double-bridge-sunglasses-1-480x320.jpg",previousPrice:"$210",price:"$150"},
      {productName:"Jersey",productDetail:"Argentina's Jesrey",imageLink:"https://www.minejerseys.vip/html/upload/item_img/201803/71273/11522035410216ebd13.jpg",previousPrice:"$300",price:"$198"}
     ] 
    this.cards=[] 
    this.state={showCards:false}
}

componentDidMount(){
  this.updateCards()
}

updateCards(){
  this.data.map((d)=>{
      let card=(
      <Grid.Column>
          <DisplayCard hideCategory type="discount" data={{...d,labelText:"50% off"}} />
      </Grid.Column>
      )
      this.cards.push(card);
  })
  this.setState({showCards:true})
}

  render() {
    return (
      <Grid stackable padded>
        <Grid.Row  columns={4} style={{margin:"0"}}>
                {this.state.showCards && this.cards.map((card)=>{
                    return card
                })}
        </Grid.Row>
      </Grid>
    )
  }
}
