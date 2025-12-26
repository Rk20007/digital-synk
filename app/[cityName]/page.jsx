"use client";
import HomePage from "@/components/HomePage";
import { useParams } from "next/navigation";

export default function CityPage() {
  const params = useParams();
  console.log("paramsparams", params);
  
  const city = params?.cityName ? params.cityName.charAt(0).toUpperCase() + params.cityName.slice(1) : "";

  return <HomePage city={city} />;
}
