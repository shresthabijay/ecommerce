import React, { Component } from 'react'
import {Container,Segment,Grid,Card,Header,Divider,List} from "semantic-ui-react"

class CategorsyListItems extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        
        let {data}=this.props
        return(
            <div>
                <Header size="medium" style={{fontWeight:'500'}}>{data.header}</Header>
                <Divider fitted/>
                <List verticalAlign="middle">
                {
                    data.items.map((item)=>{
                        return (<List.Item content={item}/>)
                    })
                }
                </List>
            </div>
        )
    }
}


export class CategoryDropDownMenu extends Component {
    constructor(props) {
        super(props);
        this.ClothingsData={header:"Clothings",items:["T-shirts","Pants","Shoes","Shorts"]}
        this.ElectronicsData={header:"Electronics",items:["Laptop","Phone","Gaming Console","Smart Watch"]}
        this.CosmeticsData={header:"Cosmetics",items:["Brushes","Foundation","Cleanser"]}
        this.AcessoriesData={header:"Accesories",items:["Sunglasses","Watch","Necklase"]}
    }
    
  render() {
    return (
        <Segment style={{height:"inherit"}}>
        <Grid columns={4}>
            <Grid.Column>
                <CategorsyListItems data={this.ClothingsData}/>
            </Grid.Column>
            <Grid.Column>
                <CategorsyListItems data={this.ElectronicsData}/>
            </Grid.Column>
            <Grid.Column>
                <CategorsyListItems data={this.CosmeticsData}/>
            </Grid.Column>
            <Grid.Column>
                <CategorsyListItems data={this.AcessoriesData}/>
            </Grid.Column>
        </Grid>
        </Segment> 
    )
  }
}

export class BrandDropDownMenu extends Component {
    constructor(props) {
        super(props);
        this.NepaliBrandData={header:"Nepali Brands",items:["Phalano","Goldstar","Sonam","Lugaz"]}
        this.InternationalBrandData={header:"International Brands",items:["Rado","Rayban","Nike","Adidas"]}
        this.ClothingBrandsData={header:"Clothing Brands",items:["Spring Woods","Phalano","North Face"]}
        this.AcessoriesBrandsData={header:"Accesories Brands",items:["Rayban","Twintils","Fortrise"]}
    }
    
  render() {
    return (
        <Segment style={{height:"inherit"}}>
        <Grid columns={4}>
            <Grid.Column>
                <CategorsyListItems data={this.NepaliBrandData}/>
            </Grid.Column>
            <Grid.Column>
                <CategorsyListItems data={this.InternationalBrandData}/>
            </Grid.Column>
            <Grid.Column>
                <CategorsyListItems data={this.ClothingBrandsData}/>
            </Grid.Column>
            <Grid.Column>
                <CategorsyListItems data={this.AcessoriesBrandsData}/>
            </Grid.Column>
        </Grid>
        </Segment> 
    )
  }
}
