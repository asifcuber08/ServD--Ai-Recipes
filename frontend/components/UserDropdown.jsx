"use client";

import { UserButton } from "@clerk/nextjs";
import { Cookie, Home, Refrigerator } from "lucide-react";
import React from "react";

const UserDropdown = () => {
  return (
    <UserButton>
      <UserButton.MenuItems>
        <UserButton.Link
          label="Home"
          labelIcon={<Home size={16} />}
          href="/"
        />
        <UserButton.Link
          label="My Recipes"
          labelIcon={<Cookie size={16} />}
          href="/recipes"
        />
        <UserButton.Link
          label="My Pantry"
          labelIcon={<Refrigerator size={16} />}
          href="/pantry"
        />
        <UserButton.Action label="manageAccount" />
      </UserButton.MenuItems>
    </UserButton>
  );
};

export default UserDropdown;
