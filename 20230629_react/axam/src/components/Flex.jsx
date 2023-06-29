export default function Flex(props){
  return(
    <div style={{display:"flex", 
    flexDirection: "column"}}>
      {props.children}
    </div>
  )
}