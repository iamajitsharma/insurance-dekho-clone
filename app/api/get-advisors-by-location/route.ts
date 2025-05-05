import { NextResponse } from "next/server";
import insuranceAdvisors from "@/data/insuranace-advisors.json"; // Adjust path as needed

export default async function POST(request: Request) {
  const body = await request.json();

  console.log(body, "From Internal Server");

  try {
    // const advisors = insuranceAdvisors.filter(
    //   (advisor) => advisor.location.toLowerCase() === location.toLowerCase()
    // );

    // if (advisors.length === 0) {
    //   return NextResponse.json({
    //     message: "No advisors found",
    //     status_code: 404,
    //     advisors: [],
    //   });
    // }

    return NextResponse.json({
      message: "Advisors found",
      status_code: 200,
      advisors: [],
    });
  } catch (error) {
    return NextResponse.json({
      message: "Something went wrong",
      status_code: 500,
      advisors: [],
    });
  }
}
