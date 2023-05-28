"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@components/Form";

const page = () => {
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    propmpt: "",
    tag: "",
  });

  const createPrompt = async (e) => {};

  return (
    <div>
      <Form
        type="Create"
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSumbit={createPrompt}
      />
    </div>
  );
};

export default page;
