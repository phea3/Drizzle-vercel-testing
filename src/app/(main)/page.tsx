"use client";
import { addUser, getUser } from "@/actions/userAction";
import { userType } from "@/types/todoType";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useState } from "react";

export default async function Home() {
  const createUser = () => {
    addUser(2, "Paul", "paul@gmail.com");
  };

  return (
    <>
      <h1>Home Page</h1>

      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <Input type="name" label="Name" />
        <Input type="email" label="Email" placeholder="Enter your email" />
        <Button color="primary" onClick={createUser}>
          Add User
        </Button>
      </div>
    </>
  );
}
