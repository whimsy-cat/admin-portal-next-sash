import react, { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  let navigate = useRouter();
  useEffect(() => {
    let path = `/auth/login`;
    navigate.push(path);
  });

  return <></>;
}
