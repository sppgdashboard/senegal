import React from 'react'
import { Icon } from "@iconify/react/dist/iconify.js";


type StatusProps = {
    status: boolean | null;
  };
  
export function Status({ status }: StatusProps) {
    const icon = {};
  
    if (status === null) {
      return (
        <Icon
          icon="ph:warning-thin"
          width={24}
          className="bg-[#F5A62380] rounded-full p-1"
        />
      );
    }
  
    if (status) {
      return (
        <Icon
          icon="material-symbols-light:check"
          width={24}
          className="bg-[#13B04B80] rounded-full p-1"
        />
      );
    }
  
    return (
      <Icon
        icon="material-symbols-light:close"
        width={24}
        className="bg-[#DA121A80] rounded-full p-1"
      />
    );
  }
  
