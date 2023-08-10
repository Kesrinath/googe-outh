import Header from "./header";
import Newcomponent from "./Newcomponent";
function User(props) {
  // console.log(props);
  return (
    <div>
      {/* <h1>{props.user.name}</h1>
      <h1>{props.user.email}</h1>
    // these block of code is used for directly call data
       <img src={props.user.picture}></img> */}
      {/* <h1>{props.info.name}</h1>
      <h1>{props.info.email}</h1>
      <img src={props.info.picture} alt=""></img>
      <br />
      <br />
      <br />
      <br />
      <button
        style={{ width: "100px", height: "30px" }}
        onClick={() => {
          window.localStorage.clear();
          window.location.assign("http://localhost:3000/");
        }}
      >
        logOut
      </button> */}

      <Header data={props} />
      <Newcomponent />
    </div>
  );
}

export default User;
