
function Paragraph(props){
    const{paragraphs=[]}=props 
    let allParagraph=[]  
      for(let i=0;i<paragraphs.length;i++){
allParagraph.push(paragraphs[i])
      }
  return(<div>
 <p>{allParagraph}</p>
 <br />
  </div>
 )
}
export default Paragraph