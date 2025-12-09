"use client";
import HomePage from "@/components/HomePage";

export default function CityPage({ params }) {
  const city = params.cityName.charAt(0).toUpperCase() + params.cityName.slice(1);

  return <HomePage city={city} />;
}
