import React, { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  styled,
  Button,
  CircularProgress,
} from "@mui/material";
import { delUser, getUsers } from "../service/api";
import { Link } from "react-router-dom";
import Empty from "./empty";

const THead = styled(TableRow)`
  background: #000000;
  & > th {
    color: #fff;
  }
`;

const StyledTable = styled(Table)`
  width: 80%;
  margin: 50px auto 0 auto;
`;

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // Initialize loading state

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    try {
      let response = await getUsers();
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false); // Update loading state when data is received or error occurs
    }
  };

  const deleteUser = async (id) => {
    await delUser(id);
    getAllUsers();
  };

  return (
    <>
      {loading ? ( // Render loading indicator if loading state is true
        <div style={{ textAlign: "center", marginTop: 50 }}>
          <CircularProgress />
        </div>
      ) : users.length > 0 ? (
        <StyledTable>
          <TableHead>
            <THead>
              <TableCell>Name</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Functionalities</TableCell>
            </THead>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user._id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    style={{ marginRight: 10 }}
                    component={Link}
                    to={`/edit/${user._id}`}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => deleteUser(user._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      ) : (
        <Empty />
      )}
    </>
  );
};

export default AllUsers;
