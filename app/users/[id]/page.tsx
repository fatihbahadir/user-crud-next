"use client"
import React, { use, useEffect } from "react";
import UserForm from "@/components/organisms/UserForm";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { selectSelectedUser, selectUserLoading } from "@/store/selectors/userSelector";
import { createUserRequest, fetchUserRequest, setLoading, updateUserRequest } from "@/store/actionCreators/userActions";
import { CreateUserRequestPayload, UserType } from "@/types/userTypes";
import Loading from "@/components/atoms/Loading";

const UserDetailPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = use(params);
  const user = useSelector(selectSelectedUser);
  const loading = useSelector(selectUserLoading);

  const handleFormSubmit = (formData: CreateUserRequestPayload | null) => {
    if (id === "new" && formData) {
      dispatch(createUserRequest(formData)); 
    } else if (formData) {
      dispatch(updateUserRequest({ user: formData }));
    }
    router.push("/users");
  };

  const handleCancel = () => {
    router.push("/users");
  };

  useEffect(() => {
    if (id !== "new") {
      dispatch(fetchUserRequest({ id }));
    } else {
      dispatch(setLoading(false));
    }
  }, [dispatch, id]);

  return (
    <div className="py-4 w-full flex justify-center items-center h-screen">
      {
        loading ? <Loading /> :
          <UserForm
            initialData={id !== "new" ? user : undefined}
            onSubmit={handleFormSubmit}
            onCancel={handleCancel}
            actionText={id !== "new" ? "Save" : "Create"}
          />
      }
    </div>
  );
};

export default UserDetailPage;