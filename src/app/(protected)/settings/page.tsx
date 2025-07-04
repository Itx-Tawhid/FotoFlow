import React from "react";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

const Settings = async () => {
  const session = await auth();
  if (!session) redirect("/login");
  return <div>Settings</div>;
};

export default Settings;
