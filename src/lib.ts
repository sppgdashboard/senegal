import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
// Define the type for the data to be sent and the expected response data
interface PostData {
  matric_number: string;
  func: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
}

const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(payload.expires)
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

async function generateOTP(matric_number: string) {
  const apiUrl: string =
    "https://script.google.com/macros/s/AKfycbzvOQVpn2_rnp9bH4aDsvUxF306zWE0u_cwHIcrGg6M3QhyxfbZbUllzGX9_cf6PN2g/exec";
  const data: PostData = { matric_number: matric_number, func: "get_user" };

  fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json() as Promise<ApiResponse>;
    })
    .then((data) => {
      // Handle the data from the response
      // console.log(data);
    })
    .catch((error) => {
      // Handle any errors that occurred during the fetch
      // console.error("There was a problem with the fetch operation:", error);
    });
}

export async function login(formData: FormData) {
  // Verify credentials && get the user
  const matricNumber = formData.get("matric_number");

  if (!matricNumber || typeof matricNumber !== "string") {
    throw new Error("Matric number is missing or not a string");
  }

  const user = {
    matric_number: matricNumber,
  };

  //  const otp = await generateOTP(user.matric_number);
  //  console.log(otp);

  // Create the session
  const expires = new Date(Date.now() + 100 * 1000000);
  const session = await encrypt({ user, expires });

  // Save the session in a cookie
  cookies().set("user_session", session, { expires, httpOnly: true });
}

export async function logout() {
  // Destroy the session
  cookies().set("user_session", "", { expires: new Date(0) });
}

export async function getSession() {
  const session = cookies().get("user_session")?.value;
  if (!session) return null;
  return await decrypt(session);
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get("user_session")?.value;
  if (!session) return;

  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + 100 * 10000);
  const res = NextResponse.next();
  res.cookies.set({
    name: "user_session",
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
}

export async function fetchGraduationStatus() {
  let session = await getSession();
  const matricNumber = session?.user?.matric_number;

  const url =
    "https://script.google.com/macros/s/AKfycbycBbja1q0_27l4GWTr9ENFnsz5OMVpESj8bsue3Cpr8lCp09gdhoojObZwFaH-CX49rA/exec";

  const response = await fetch(
    `${url}?matric_number=${matricNumber}&func=graduation_status_func`,
    { cache: "force-cache" }
  );
  
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  const [user] = data.data;

  //  const otp = await generateOTP(user.matric_number);
  //  console.log(otp);

  // Create the session
  const expires = new Date(Date.now() + 100 * 10000);
  session = await encrypt({ user, expires });

  // Save the session in a cookie
  cookies().set("user_session", session, { expires, httpOnly: true });
}
