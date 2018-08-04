import React from "react"
import { Container,Menu,Button,Input,Icon} from 'semantic-ui-react'
import {CategoryDropDownMenu,BrandDropDownMenu} from "./DropDownMenu"

class Navbar extends React.Component{

    constructor(props) {
      super(props);
      this.items={Home:0,Categories:1,Brands:2,OnSale:3,MyCart:4}
      this.itemStyle={color:"teal"}
      this.activeItemStyle={backgroundColor:"#28abb4",color:"white"}
      this.dropdownStyle={position:"absolute",top:"100%",left:"4.6%",zIndex:"10000",width:"60vw",padding:"0"}
      this.state={activeItem:this.items.Home,showDropDown:false}
      this.toogleBrandDropdown=false;
      this.toogleCategoryDropDown=false;
      this.isOverDropDown=false;

    }

    onClick=(e,{code})=>{
      this.setState({activeItem:code})
    }
    
    onHoverOverCategory=()=>{
      this.toogleCategoryDropDown=true
      this.setState({showDropDown:true})
    }

    onHoverOverBrand=()=>{
      this.toogleBrandDropdown=true
      this.setState({showDropDown:true})
    }

    onHoverOutOfBrand=()=>{
      this.toogleBrandDropdown=false;
      this.checkDropDown();
    }

    onHoverOutOfCategory=()=>{
      this.toogleCategoryDropDown=false;
      this.checkDropDown();
    }

    checkDropDown=()=>{
      setTimeout(()=>{
        if(!this.isOverDropDown && (!this.toogleBrandDropdown && !this.toogleCategoryDropDown)){
          this.setState({showDropDown:false})
        }
      },100)
    }

    render(){
        let {activeItem}=this.state
        let itemStyle=this.itemStyle
        let activeItemStyle=this.activeItemStyle
        let activedropdown;

        if(this.toogleBrandDropdown){
          activedropdown=<BrandDropDownMenu onMouseEnter={this.onHoverOverDropDown} onMouseLeave={this.onHoverOutOfDropDown}/>
        }
        
        if(this.toogleCategoryDropDown){
          activedropdown=<CategoryDropDownMenu onMouseEnter={this.onHoverOverCategory} onMouseLeave={this.onHoverOutOfCategory}/>
        }


        return(
          <Menu  borderless style={{margin:"0",backgroundColor:"white",position:"relative"}}> 

            <Menu.Item 
              style={activeItem!=this.items.Home?itemStyle:activeItemStyle} 
              code={this.items.Home} 
              active={activeItem===this.items.Home}
              onClick={this.onClick}
            >
              Home
            </Menu.Item>

              <Menu.Item 
                style={activeItem!=this.items.Categories?itemStyle:activeItemStyle}
                code={this.items.Categories} 
                active={activeItem===this.items.Categories} 
                onMouseEnter={this.onHoverOverCategory}
                onMouseLeave={this.onHoverOutOfCategory}
                onClick
              >
              
                Categories
                <Icon name="angle down"/>
              </Menu.Item>

              <Menu.Item 
                style={activeItem!=this.items.Brands?itemStyle:activeItemStyle}
                code={this.items.Brands} 
                active={activeItem===this.items.Brands} 
                onMouseEnter={this.onHoverOverBrand}
                onMouseLeave={this.onHoverOutOfBrand}
                onClick
              >
                Brands
                <Icon name="angle down"/>
              </Menu.Item>

              <div 
                onMouseEnter={()=>{this.isOverDropDown=true}}
                onMouseLeave={()=>{this.isOverDropDown=false
                                  this.setState({showDropDown:false})
                              }}                
                style={this.dropdownStyle}
              >
                  {this.state.showDropDown &&
                    activedropdown
                  }
              </div>

            <Menu.Item 
              style={activeItem!=this.items.OnSale?itemStyle:activeItemStyle}
              code={this.items.OnSale} 
              active={activeItem===this.items.OnSale} 
              onClick={this.onClick}
            >
              On Sale
            </Menu.Item>

            <Menu.Item 
              style={activeItem!=this.items.MyCart?itemStyle:activeItemStyle}
              code={this.items.MyCart} 
              active={activeItem===this.items.MyCart} 
              onClick={this.onClick}
            >
              My Cart
            </Menu.Item>

            <Menu.Item position="right">
              <Input placeholder='Search...' />
              <Icon name="search"/>
            </Menu.Item>

          </Menu>
        )
}
}
export default Navbar