import { getSession } from "@src/lib";

interface ResponseData {
  data: any;
}

export async function getOverallStatusData() {
  const session = await getSession();
  const matricNumber = session?.user?.matric_number;
  const hourlyTimestamp = getHourlyTimestamp();
  try {
    const response = await fetch(
      `${process.env.SPPG_URL_API}?matric_number=${matricNumber}&func=graduation_status_func&_=${hourlyTimestamp}`,
      { cache: "force-cache" }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const overallStatusData = await response.json();
    const data = overallStatusData?.data;

    if (data) return [data[0], true];
    return [data, false];
  } catch (e) {
    return [[], false];
  }
}

export async function getFaqData() {
  try {
    const faqData: ResponseData = await fetchDataWithRetry(
     `${process.env.SPPG_URL_API}?func=faqs_func`,undefined ,undefined,false
    );

    const data = faqData?.data;
    if (data) return [data, true];
    return [data, false];
  } catch (e) {
    return [[], false];
  }
}

export async function getSchoolFeesData() {
  const session = await getSession();
  const matricNumber = session?.user?.matric_number;
  try {
    const schoolFeesData: ResponseData = await fetchDataWithRetry(
      `${process.env.SPPG_URL_API}?matric_number=${matricNumber}&func=get_school_fees_data_func`
    );

    const data = schoolFeesData?.data;
    if (data) return [data[0], true];
    return [data, false];
  } catch (e) {
    return [[], false];
  }
}

export async function getMakeupTaskData() {
  const session = await getSession();
  const matricNumber = session?.user?.matric_number;

  const makeupTaskData: ResponseData = await fetchDataWithRetry(
    `${process.env.SPPG_URL_API}?matric_number=${matricNumber}&func=get_makeup_task_data_func`
  );
  try {
    const data = makeupTaskData?.data;

    if (data) return [data, true];
    return [data, false];
  } catch (e) {
    return [[], false];
  }
}

export async function getMyManifestoData() {
  const session = await getSession();
  const matricNumber = session?.user?.matric_number;
  try {
    const myManifestoData: ResponseData = await fetchDataWithRetry(
      `${process.env.SPPG_URL_API}?matric_number=${matricNumber}&func=get_my_manifesto_data_func`
    );

    const data = myManifestoData?.data;
    
    if (data) return [data[0], true];
    return [data, false];
  } catch (e) {
    return [[], false];
  }
}

export async function getGroupManifestoData() {
  const session = await getSession();
  const matricNumber = session?.user?.matric_number;
  try {
    const groupManifestoData: ResponseData = await fetchDataWithRetry(
      `${process.env.SPPG_URL_API}?matric_number=${matricNumber}&func=get_group_manifesto_data_func`
    );

    const data = groupManifestoData?.data;
    if (data) return [data[0], true];
    return [data, false];
  } catch (e) {
    return [[], false];
  }
}

export async function getAttendanceData() {
  const session = await getSession();
  const matricNumber = session?.user?.matric_number;
  try {
    const attendanceData: ResponseData = await fetchDataWithRetry(
      `${process.env.SPPG_URL_API}?matric_number=${matricNumber}&func=get_attendance_data_func`
    );

    const data = attendanceData?.data;

    if (data) return [data[0], true];
    return [data, false];
  } catch (e) {
    return [[], false];
  }
}

function getHourlyTimestamp() {
  const now = new Date();
  // Reset the minutes and seconds to 0 to align with the start of the hour
  now.setMinutes(0, 0, 0);
  return now.getTime();
}

export async function getFullAttendanceData() {
  const session = await getSession();
  const matricNumber = session?.user?.matric_number;

  try {
    const attendanceData: ResponseData = await fetchDataWithRetry(
      `${process.env.SPPG_URL_API}?matric_number=${matricNumber}&func=get_full_attendance_data_func`
    );

    const data = attendanceData?.data;

    if (data) return [data[0], true];
    return [data, false];
  } catch (e) {
    return [[], false];
  }
}

export async function getProfileData() {
  const session = await getSession();
  const matricNumber = session?.user?.matric_number;
  try {
    const profileData: ResponseData = await fetchDataWithRetry(
      `${process.env.SPPG_URL_API}?matric_number=${matricNumber}&func=get_profile_data_func`
    );
    const data = profileData?.data;

    if (data) return [data[0], true];
    return [data, false];
  } catch (e) {
    console.error(e);
    return [[], false];
  }
}

export async function getCapstoneGroupData() {
  const session = await getSession();
  const matricNumber = session?.user?.matric_number;
  try {
    const capstoneGroupData: ResponseData = await fetchDataWithRetry(
      `${process.env.SPPG_URL_API}?matric_number=${matricNumber}&func=get_capstone_group_data_func`
    );
   
    const data = capstoneGroupData?.data;
    if (data) return [data[0], true];
    return [data, false];
  } catch (e) {
    return [[], false];
  }
}

export async function getAssignmentData() {
  const session = await getSession();
  const matricNumber = session?.user?.matric_number;
  try {
    const AssignmentData: ResponseData = await fetchDataWithRetry(
      `${process.env.SPPG_URL_API}?matric_number=${matricNumber}&func=get_assignment_data_func`
    );
    const data = AssignmentData?.data;

    if (data) return [data[0], true];
    return [data, false];
  } catch (e) {
    return [[], false];
  }
}

async function fetchDataWithRetry<T>(
  url: string,
  options: RequestInit = {},
  maxRetries: number = 10,
  cacheEnable: boolean = true,
): Promise<T> {
  let attempt = 0;
  let lastError: Error | null = null;
  const hourlyTimestamp = getHourlyTimestamp();
  url = `${url}&_=${hourlyTimestamp}`;


  if(cacheEnable){
    options = { ...options, cache: "force-cache" };
  }

  while (attempt < maxRetries) {
    try {
      // console.log(url);
      
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data: T = await response.json();
      return data;
    } catch (error) {
      lastError =
        error instanceof Error ? error : new Error("Unknown error occurred");
      attempt++;
      console.warn(`Attempt ${attempt} failed: ${lastError.message}`);
      if (attempt < maxRetries) {
        console.log("Retrying...");
      }
    }
  }

  console.error(`All ${maxRetries} attempts failed.`);
  throw lastError;
}
