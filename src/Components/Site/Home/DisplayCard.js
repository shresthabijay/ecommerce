import React, { Component } from 'react'
import {Segment,Icon,Card,Grid,Header,Image,Label,Divider} from "semantic-ui-react"

export default class DisplayCard extends Component {
  constructor(props) {
    super(props)
    this.state={isRaised:false}
    this.imageLink=this.props.data.imageLink
    this.labelDivStyle={margin:"5px 5px",display:"flex",alignItems: 'center',justifyContent:"center",flexWrap:"wrap"}
    this.labelStyle={margin:"10px"}    
  }

  onHover=()=>{this.setState({isRaised:true})}

  onHoverOut=()=>{this.setState({isRaised:false})}
  
  render() {

      let ribbonColor;
      let ribbonText;
      let showRibbon,showPriceContent;
      let priceContent;
      let data;

      if(this.props.data){
        data=this.props.data
      }
      else{
        data={}
      }
      
      if(this.props.type){
        showRibbon=true;
        if(this.props.type==="discount"){
            ribbonColor="green"
            ribbonText="Discount"
            showPriceContent=true;
            priceContent=(
              <div>
              <div style={this.labelDivStyle}>
              <Label color="red" size="small" style={this.labelStyle} as="a" tag><strike>{data.previousPrice?data.previousPrice:"$ old"}</strike></Label>
              <Label color="teal" size="small" style={this.labelStyle} as="a" tag>{data.price?data.price:"$ new "}</Label>
              </div>
              {!this.props.hideCategory &&
              <div>
                <Label>
                  {data.category}
                </Label>
              </div>
              }
              </div>
              
            )
        }

        else if(this.props.type==="sale"){
            ribbonColor="blue"
            ribbonText="On Sale"
            showPriceContent=true;
            priceContent=(
              <div style={this.labelDivStyle}>
              <Label color="teal" style={this.labelStyle} as="a" tag>{data.price?data.price:"$ new "}</Label> 
              </div>
        )

        }
        else if(this.props.type==="new-arrival"){
           ribbonColor="pink"
           ribbonText="New Arrival"
           showPriceContent=true;
           priceContent=(
            <div style={this.labelDivStyle}>
            <Label color="teal" style={this.labelStyle} as="a" tag>{data.price?data.price:"$ new "}</Label>
            {!this.props.hideCategory &&
              <Label>
                    {data.category}
              </Label>
            }
            </div>
          )
           
        }
        
        else if(this.props.type==="normal"){
          showRibbon=false;
          showPriceContent=true;
          priceContent=(
            <div style={this.labelDivStyle}>
            <Label color="teal" style={this.labelStyle} as="a" tag>{data.price?data.price:"$ new "}</Label>
            {!this.props.hideCategory &&
              <Label>
                    {data.category}
              </Label>
            }
            </div>
        )}
      }
      
    return (
       <div onMouseEnter={this.onHover} onMouseLeave={this.onHoverOut} >
       <a href={this.imageLink}>
       <Card link raised={this.state.isRaised}>
            {showRibbon && 
                  <Label as='a' color={ribbonColor} floating style={{left:"4px",top:"3%"}} ribbon>
                    {this.props.data.labelText?this.props.data.labelText:ribbonText}
                  </Label>
            }            
            <Image 
            style={{height:"220px"}}
            src={this.imageLink}
            />
          <Card.Content textAlign="center" style={{display:"flex",justifyContent:"center",alignItems: 'center',flexDirection: 'column'}}>
            <Card.Header>{data.productName?data.productName:"Product Name"}</Card.Header>
            <Card.Meta>{data.productDetail?data.productDetail:"Product Detail"}</Card.Meta>
              {!this.props.hideTag && showPriceContent &&
                priceContent
              }
          </Card.Content>
        </Card>
        </a>
     </div>
    )
  }
}