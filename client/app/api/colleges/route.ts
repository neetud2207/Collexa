import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import College from "../../../models/College";

export async function GET() {
  await dbConnect();

  const colleges = await College.find();

  return NextResponse.json(colleges);
}
