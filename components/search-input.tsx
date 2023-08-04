"use client";

import qs from "query-string";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "./ui/input";
import { ChangeEvent, useState, useEffect, ChangeEventHandler } from "react";
import { useDebounce } from "@/hooks/use-debounce";

export const SearchInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryId = searchParams.get("categoryId");
  const name = searchParams.get("name");

  const [value, setValue] = useState(name || "");

  //검색시 0.5s delay
  const deboundValue = useDebounce<string>(value, 500);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const query = {
      name: deboundValue,
      categoryId,
    };

    const url = qs.stringifyUrl(
      { url: window.location.href, query },
      { skipNull: true, skipEmptyString: true }
    );
  }, [deboundValue, categoryId, router]);

  return (
    <div className="relative">
      <search className="absolute h-4 w-4 top-3 left-4 text-muted">
        <Input placeholder="search..." className=" pl-10 bg-primary/10" />
      </search>
      serch input
    </div>
  );
};
