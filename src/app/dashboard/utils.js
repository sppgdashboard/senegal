export function formatToNumber(number, decimals = 0) {
  if (isNaN(number)) {
    number = 0;
  }

  return new Intl.NumberFormat(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(number);
}

export function formatText(text = "", fallback = "") {
  return text.length !== 0 ? text : fallback;
}

// export function formatDate(isoDate) {
//   console.log(isoDate);
  
//   const date = new Date(isoDate);
//   const year = date.getFullYear();
//   const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
//   const day = String(date.getDate()).padStart(2, "0");

//   return `${year}-${month}-${day}`;
// }

// export function formatDate(isoDate) {
//   // Create date object and convert to target timezone (UTC in this case)
//   console.log(isoDate);
  
//   const date = new Date(isoDate);
  
//   // Get the ISO string and extract just the date part
//   return date.toISOString().split('T')[0];
// }

export function formatDate(isoDate, timezone='Africa/Lagos') {
  // Create a date object from the ISO string
  const date = new Date(isoDate);
  
  // Format options for date and time
  const options = {
    timeZone: timezone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  };

  try {
    // Create formatter with the specified timezone
    const formatter = new Intl.DateTimeFormat('en-US', options);
    
    // Format the date
    const formattedDate = formatter.format(date);
    
    // Parse the formatted components
    const [dateOnly, time] = formattedDate.split(', ');
    const [month, day, year] = dateOnly.split('/');
    
    // Return both date-only and full datetime formats
    return {
      dateOnly: `${year}-${month}-${day}`,
      dateTime: `${year}-${month}-${day} ${time}`
    };
  } catch (error) {
    throw new Error(`Invalid timezone: ${timezone}. Please use valid IANA timezone format (e.g., 'America/New_York')`);
  }
}

export function convertToJsonString(str = "") {
  const jsonString = str
    .replace(/(\w+)=/g, '"$1":') // Add quotes around keys
    .replace(/=/g, ":") // Replace '=' with ':'
    .replace(/:([^,"{}]+)/g, ':"$1"') // Add quotes around values
    .replace(/,([^ ])/g, ",$1") // Add space after comma
    .replace(/,,/g, ",") // Remove extra commas
    .replace(/"\s+"/g, '"') // Remove extra spaces inside quotes
    .replace(/"\s+:/g, '":') // Remove extra spaces before colon
    .replace(/:\s+"/g, ':"') // Remove extra spaces after colon
    .replace(/""/g, '"'); // Remove empty quotes

  return jsonString;
}

export function getManifestoUrl(metaData = "") {
  metaData = convertToJsonString(metaData);

  try {
    const data = JSON.parse(metaData);
    // console.log(data);
    return data?.url;
  } catch (error) {
    console.error("Invalid JSON string:", error);
    return undefined;
  }
}

export function getProfileUrl(metaData = "") {
  metaData = convertToJsonString(metaData);

  try {
    const data = JSON.parse(metaData);
    return data?.thumbnails?.large;
  } catch (error) {
    console.error("Invalid JSON string:", error);
    return undefined;
  }
}
