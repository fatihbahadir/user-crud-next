"use client";
import React, { useEffect } from "react";
import DataGrid from "@/components/organisms/DataGrid";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserRequest, fetchAllUsersRequest } from "@/store/actionCreators/userActions";
import { selectUserLoading, selectUsers } from "@/store/selectors/userSelector";
import Loading from "@/components/atoms/Loading";
import Text from "@/components/atoms/Text";

const Users: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const loading = useSelector(selectUserLoading);

  const handleEdit = (selectedRow: string) => {
    router.push(`/users/${selectedRow}`);
  };

  const handleDelete = (selectedRow: string) => {
    dispatch(deleteUserRequest({ id: selectedRow }));
  };

  useEffect(() => { 
    dispatch(fetchAllUsersRequest());
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="py-4 mt-[90px] w-full">
          {
            users.length > 0 ?
            <DataGrid
            columns={
                ["Name", "Surname", "Email", "Phone Number"]
            }
            data={users}
            onEdit={handleEdit}
            onDelete={handleDelete}
          /> : 
          <div className="flex justify-center">
            <Text className="text-3xl" variant="h2"> No users found please add users first</Text>
          </div>
          }

        </div>
      )}
    </>
  );
};

export default Users;
