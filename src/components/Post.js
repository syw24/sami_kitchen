import "./Post.css";
// import Card from "./Card";
import photo from "../photo/beefNoodle.jpg"

function Post(props) {
  // const today = new Date();
  // let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(); 
  // let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  return (
    // <div className="expense-item">
    //.toISOString() object to string

    <div className="card">
      <img src={photo} alt="noodle" width="100%"></img>
      <div className='container'>
        <h4>{props.title}</h4>
        {/* <h>{date}   {time}</h> */}
      </div>
    </div>
  );
}  

export default Post;
