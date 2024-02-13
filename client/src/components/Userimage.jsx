// import  {Box} from "@mui/material";

// const UserImage = ({ image, size = "60px" }) => {
//     const imageUrl = `http://localhost:3000/uploads/${image}`;

//     return (
//       <div>
//         <img src={imageUrl} alt="Uploaded" />
//       </div>
//     );
//   };
  
//   export default UserImage;
import  {Box} from "@mui/material";

const UserImage = ({ image, size = "50px" }) => {
    return (
      <Box width={"40px"} height={"80px"} className='ml-[50px]'>
        <img
          style={{ objectFit: "cover", borderRadius: "100%" }}
          width={"40px"}
          height={"80px"}
          alt="user"
          src={`http://localhost:3000/uploads/${image}`}
        />
      </Box>
    );
  };
  
  export default UserImage;