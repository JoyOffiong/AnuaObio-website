"use client"

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

const BackButton = () => {
  const router = useRouter();

  return (
    <Button onClick={() => router.back()} variant="outlined" startIcon={<FaArrowLeft />} className="border-black text-black  p-2" >
      Back
    </Button>
  );
};

export default BackButton;
