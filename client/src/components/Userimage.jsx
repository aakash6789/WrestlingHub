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

const UserImage = ({ image, size = "60px" }) => {
    return (
      <Box width={size} height={size}>
        <img
          style={{ objectFit: "cover", borderRadius: "50%" }}
          width={size}
          height={size}
          alt="user"
          src={`http://localhost:3000/uploads/${image}`}
        />
      </Box>
    );
  };
  
  export default UserImage;