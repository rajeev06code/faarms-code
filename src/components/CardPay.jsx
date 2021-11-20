import React from 'react'
import styled from 'styled-components'
import mcard from '../assets/card/mc.png'
import visa from '../assets/card/vi.png'
import paypal from '../assets/card/pp.png'
const CardCon=styled.div`
border: 2px solid grey;
margin-top: 10px;
width: 400px;
height: 370px;
display: flex;
flex-direction: column;
padding: 10px;
justify-content:space-around;
/* justify-content: center; */
`
const FirstRow=styled.div`
display: flex;
`
const Owner=styled.div`
width: 100%;

`
const SecondRow=styled.div`
display: flex;
`
const ThirdRow=styled.div`

`
const SelectionDiv=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

`
const DateDiv=styled.div``
const SelectTag=styled.select`
padding: 2px 5px;
margin-right: 5px;
`
const CardNo=styled.div`
width: 100%;
margin: 20px 0px;
`
const Card=styled.div``
const ImgCard=styled.img`
width: 50px;
height: 30px;

`
const InputPay=styled.div`
display: flex;
justify-content: space-between;
`
const InputEle=styled.input`
  /* width: 100%; */
    /* border:none; */
    outline: none;
    padding: 5px;
`
const Cvv=styled.div``
const Anchor=styled.a`
background-color:#087f5b;
    color: white;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    padding: 7px;
    font-size: 15px;
    transition: 0.5s;
    margin-top: 20px;

`
function CardPay() {
    return (
        <CardCon>
            <h6 style={{textAlign:"center"}}>Confirm Your Payment</h6>
            <FirstRow>
                <Owner>
                    <h6>Owner</h6>
                    <InputPay>
                        <InputEle type="text" />
                    </InputPay>
                </Owner>
                <Cvv>
                    <h6>CVV</h6>
                    <InputPay>
                        <InputEle type="password"/>
                    </InputPay>
                </Cvv>
            </FirstRow>
            <SecondRow>
                <CardNo>
                    <h6>Card Number</h6>
                    <InputPay>
                        <InputEle style={{width:"100%"}}  type="text" />
                    </InputPay>
                </CardNo>
                
            </SecondRow>
            <ThirdRow>
                
                    <h6>Card Expires On</h6>
                    <SelectionDiv>
                    <DateDiv>
                     <SelectTag>
                         <option value="Jan" >Jan</option>
                         <option value="Jan" >Feb</option>
                         <option value="Jan" >Mar</option>
                         <option value="Jan" >Apr</option>
                         <option value="Jan" >May</option>
                         <option value="Jan" >Jun</option>
                         <option value="Jan" >Jul</option>
                         <option value="Jan" >Aug</option>
                         <option value="Jan" >Sep</option>
                         <option value="Jan" >Oct</option>
                         <option value="Jan" >Nov</option>
                         <option value="Jan" >Dec</option>
                     </SelectTag>
                     <SelectTag>
                         <option value="Jan" >2021</option>
                         <option value="Jan" >2020</option>
                         <option value="Jan" >2019</option>
                         <option value="Jan" >2018</option>
                         <option value="Jan" >2017</option>
                         <option value="Jan" >2016</option>
                         <option value="Jan" >2015</option>
                        
                     </SelectTag>
                        </DateDiv>
                        <Card >
                  <ImgCard src={mcard}  />
                  <ImgCard src={visa} style={{margin:"0px 5px"}} />
                  <ImgCard src={paypal}  />
                </Card>
                    </SelectionDiv>
            
                  
            </ThirdRow>
            <Anchor href="">Pay Now</Anchor>
        </CardCon>
    )
}

export default CardPay
