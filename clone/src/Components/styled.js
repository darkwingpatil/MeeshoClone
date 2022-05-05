import styled from "styled-components";


export const Cartnav=styled.div`
display:flex;
justify-content:space-betweem;
position:relative;
width:100%;
`
export const Wrapper=styled.div`
width:40%;
margin:auto;
padding:10px;
`
export const Tag=styled.h1`
color:#f43397;
font-size:40px;
font-weight:light;
position:absolute;
padding-left:20px;
top:-20%;`

export const Grid=styled.div`
display:grid;
grid-template-columns: repeat(4,1fr);
gap:10px;

div>img{
    width:300px;
    height:300px;
}
`
export const SmallBox=styled.div`
width:10%;
margin-left:20%;
`

export const CartData=styled.div`
display:flex;
justify-content:space-between;
width:450px;
height:100px;
margin-left:55%;
border:1px solid lightgray;

div:nth-of-type(2){
    flex-grow:1;
    line-height:10px;
    margin-right:30%;
}

div:nth-of-type(1),div:nth-of-type(3){
    padding:10px;
}

button{
    border:none;
    background:none;
    color:#f43397;
    font-size:18px;
}

div>img{
    width:80px;
    height:80px;
}

`

export const CartData1=styled.div`
display:flex;
justify-content:space-between;
width:450px;
height:100px;
border:1px solid lightgray;

div:nth-of-type(2){
    flex-grow:1;
    line-height:10px;
    margin-right:5%;
}

div:nth-of-type(1),div:nth-of-type(3){
    padding:10px;
}

button{
    border:none;
    background:none;
    color:#f43397;
    font-size:18px;
}

div>img{
    width:80px;
    height:80px;
}
`
export const InsideSmall=styled.div`
display:flex;
justify-content:space-between;
button{
    background:#f9f9f9;
    height:30px;
    width:40px;
}
`
export const Hidden=styled.div`

width:400px;
height:200px;
position:absolute;
background:white;
top:113%;
${(props)=>props.val?`display:block;`:`display:none;`}
`
export const Updateddetails=styled.div`
width:452px;
height:673px;
border:1px solid red;
background:white;
position:absolute;
top:0%;
right:0%;
${(props)=>props.val?`
display:none`:`dispaly:block`}
`
export const Savechanges=styled.button`
width:100%;
height:50px;
background:#f43397;
color:white;
text-align:center;
border:none;
border-radius:5px;
position:absolute;
right:0%;
bottom:0%;

`
export const Close=styled.button`
border:none;
background:none;
color:black;
font-size:18px;
margin-top:10px;

`

export const Address=styled.div`
height:40px;
width:300px;
background:#f43397;
color:white;
text-align:center;
border:none;
border-radius:5px;
position:absolute;
right:20%;
bottom:26%;
`
export const AddressBox=styled.div`
height:530px;
width:400px;
border:1px solid lightgray;
margin:auto;

`
export const AddressBoxButton=styled.button`
background:#f43397;
color:white;
text-align:center;
border:none;
border-radius:5px;
height:40px;
width:90%;

`

export const AddressAll=styled.div`
.Bucket{
    position:absolute;
    right:0%;
}
`
export const Paymentdiv=styled.div`
height:200px;
width:500px;
border:1px solid lightgray;
position:absolute;
left:17%;
top:18%;
`
export const Cod=styled.div`
width:100%;
height:50px;
background:#e7eeff;
align-items:center;
display:flex;
justify-content:space-between;
`
export const Reselling=styled.div`
width:100%;
height:100px;
align-items:center;
display:flex;
justify-content:space-between;
`
export const ResellingButton=styled.button`
border:none;
border-radius:20px;
font-size:20px;
margin-right:5px;
`

export const Marginaldata=styled.h3`
position:absolute;
left:-2%;
bottom:-100%;
${(props)=>props.show?`display:block`:`display:none`};
${(props)=>(props.val>=0)?`
color:green`:`color:red`}
`
export const HiddMargin=styled.div`
${(prop)=>prop.val?`display:block`:`
display:none`};
`

export const AddressBoxButton1=styled.button`
background:#f43397;
color:white;
text-align:center;
border:none;
border-radius:5px;
height:40px;
position:absolute;
width:22%;
right:20%;
bottom:35%;

`