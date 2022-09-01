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
position:relative;

p{
    text-align:center;
}
div>img{
    width:300px;
    height:300px;
}


@media (min-width:400px) and (max-width:1000px){
    grid-template-columns: repeat(2,1fr);
}

@media (min-width:100px) and (max-width:399px){
    grid-template-columns: repeat(1,1fr);
}
`

export const Alldone=styled.div`
position:relative;
.hogya{
    position:absolute;
    background:white;
    right:5%;
}`


export const SmallBox=styled.div`
width:10%;
margin-left:20%;
@media (min-width:100px) and (max-width:1280px){
    display:none;
}
`

export const CartData=styled.div`
display:flex;
justify-content:space-between;
width:450px;
height:auto;
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

@media (min-width:100px) and (max-width:1280px){
    display:none;
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
top:120%;
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

${(props)=>props.length==1?`
bottom:-170%;`:`bottom:-28%;`}

`
export const AddressBox=styled.div`
height:auto;
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
export const Aftersub=styled.h1`
font-weight: 900;
text-decoration: underline;
margin-bottom: 2%;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`
export const AfterCont=styled.div`
border: 1px solid rgb(226, 224, 224);
cursor: pointer;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
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
right:17.5%;
bottom:35%;

`
export const Carthr=styled.hr`
height:500px;
position:absolute;
right:45%;
top:-18%;
`

export const CartData2=styled.div`
display:flex;
justify-content:space-between;
width:450px;
height:180px;
border:1px solid lightgray;
position:absolute;
top:70%;
left:15%;
line-height:10px;
align-items:center;
h3{
    margin-bottom:20px;
}

div:nth-of-type(1),div:nth-of-type(2){
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
export const Summarypay=styled.div`
display:flex;
border:1px solid lightgray;
height:50px;
width:450px;
position:absolute;
left:15%;
top:105%;
`

export const Mobile=styled.div`
width:470px;
height:600px;
background:white;
border:1px solid red;
border-radius:10px;
margin:auto; 
img{
    border-top-left-radius:10px;
    border-top-right-radius:10px;
    width:100%;
}
h3{
    font-size:20px;
    margin:30px;
    font-weight:bold;
}`

export const InputsSign=styled.div`
display:flex;
gap:10px;`

export const AddressBoxButton3=styled.button`
background:#f43397;
color:white;
text-align:center;
border:none;
border-radius:5px;
height:40px;
position:absolute;
width:25%;
bottom:20%;
left:37.5%;


`

export const Profile=styled.div`
height:200px;
width:300px;
// margin-left:80%;
z-index:2;
${(props)=>props.see?`
display:block;`:`
display:none;`}
`

export const Profilebutton=styled.button`
background:#f43397;
color:white;
text-align:center;
border:none;
border-radius:5px;
height:40px;
width:90%;
`

export const Childdel=styled.div`
height:25px;
width:100px;
font-size:12px;
background:lightgray;
border-radius:20px;
margin:auto;
margin-top:2%;
`

export const Chilrating=styled.div`
height:35px;
width:100px;
font-size:20px;
color:white;
background:#038d63;
border-radius:20px;

`

export const Mynavbar=styled.div`
position:"relative";
width:auto;
@media (min-width:400px) and (max-width:1000px)
{
    #input11{
        display:none;
    }
    #tag11{
        display:none;
    }
    #oneu{
        display:none;
    }
    #oneu11{
        margin-right:200px;
    }

}

@media (min-width:100px) and (max-width:399px)
{
    #input11{
        display:none;
    }
    #tag11{
        display:none;
    }
    #oneu{
        display:none;
    }
    #oneu11{
        display:none;
    }
    #butt1{
        display:none;
    }
}
`

