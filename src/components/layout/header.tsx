"use client";

import { UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";
import ModeToggle from "../ModeToggle";

export function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-gray-100 dark:bg-gray-900 px-6">
      {/* 左側 - 検索バー */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="検索..."
            className="h-10 w-64 rounded-md border border-gray-300 bg-white pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* 右側 - 通知とユーザー */}
      <div className="flex items-center space-x-4">
        {/* <Button variant="ghost" size="sm" className="relative">
                    <Bell className="h-5 w-5" />
                    <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500"></span>
                </Button> */}
        <ModeToggle />
        <UserButton
          appearance={{
            elements: {
              avatarBox: "h-8 w-8",
            },
          }}
        />
      </div>
    </header>
  );
}
