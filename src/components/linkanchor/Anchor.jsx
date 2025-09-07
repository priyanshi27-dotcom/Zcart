import styled from "styled-components";
const Anchorstyle=styled.li`
background:${props=>(props.isRed?'#8C9187':
'linear-gradient(90deg,rgba(5, 13, 11, 0.93) 18%, rgba(60, 60, 87, 1) 67%, rgba(178, 207, 219, 1) 100%)')};
display:flex;
justify-content:center;
align-items:center;
color:white;
font-size:16px;
border-radius:5px;
font-weight:400;
`
function Anchor({name,size,height,isRed,onClick}) {
    const widthlist={
        sm:'72.17px',
        xsm:'42px',
        md:'97px',
        lg:'112px',
        xlg:'145px',
       
    }
    const heightlist={
         sm:'32px',
         md:'40px',
         lg:'54px',
    }
   
   
    const Appliedwidth=widthlist[size];
    const Appliedheight=heightlist[height];
 return(
    <Anchorstyle style={{width:Appliedwidth,height:Appliedheight}} onClick={onClick} isRed={isRed}>{name}</Anchorstyle>
 )
}
export default Anchor;