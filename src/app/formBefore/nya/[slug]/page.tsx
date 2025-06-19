"use client";

import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const params = useParams();
  console.log(params);
  const { slug } = params;

  return <div>{slug}</div>;
};

export default page;
