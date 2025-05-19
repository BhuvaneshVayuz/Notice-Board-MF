import client from "../client";

export const tryCatch = async (func) => {
  try {
    return await func();
  } catch (e) {
    console.log(e, "error from tryCatch");
  }
};

const getToken = () => localStorage.getItem("token") || "";

const getHeaders = (contentType = "application/json") => ({
  Accept: "application/json",
  "Content-Type": contentType,
  Authorization: `Bearer ${getToken()}`,
});

const buildConfig = (contentType, config = {}) => {
  const { signal, ...restConfig } = config;
  return {
    headers: getHeaders(contentType),
    signal,
    ...restConfig,
  };
};

export const apiGet = async (url, contentType, config = {}) => {
  const response = await client.get(url, buildConfig(contentType, config));
  const responseData = response.data;

  const result = responseData?.result;

  // If result is an array, iterate through and decrypt string values in each object
  if (Array.isArray(result)) {
    const decryptedArray = result.map((item) => {
      const decryptedItem = {};
      console.log(item, "item from api get data");
      Object.entries(item).forEach(([key, value]) => {
        if (typeof value === "string") {
          try {
            const decrypted = decryptPayload(value);
            decryptedItem[key] = decrypted || value;
          } catch (err) {
            decryptedItem[key] = value;
          }
        } else {
          decryptedItem[key] = value;
        }
      });

      return decryptedItem;
    });

    const finalData = {
      ...responseData,
      result: decryptedArray,
    };

    console.log(finalData, "decrypted array data from api");
    return finalData;
  }

  // Handle if result is an object (fallback for previous logic)
  if (result && typeof result === "object") {
    const decryptedResult = {};

    Object.entries(result).forEach(([key, value]) => {
      console.log(value, "value from api get data");
      if (typeof value === "string") {
        try {
          const decrypted = decryptPayload(value);
          decryptedResult[key] = decrypted || value;
        } catch (err) {
          decryptedResult[key] = value;
        }
      } else {
        decryptedResult[key] = value;
      }
    });

    const finalData = {
      ...responseData,
      result: decryptedResult,
    };

    console.log(finalData, "decrypted object result from api");
    return finalData;
  }

  // If no decryption needed
  console.log(responseData, "original response data");
  return responseData;
};

export const apiPost = async (url, data, contentType, config = {}) => {
  console.log(data, "data from api post");

  const response = await client.post(
    url,
    data,
    buildConfig(contentType, config)
  );
  return response.data;
};

export const apiPatch = async (url, data, contentType, config = {}) => {
  const response = await client.patch(
    url,
    data,
    buildConfig(contentType, config)
  );
  return response.data;
};

export const apiPut = async (url, data, contentType, config = {}) => {
  const encryptedData = encryptPayload(data);
  const response = await client.put(
    url,
    { encryptedText: encryptedData },
    // data,
    buildConfig(contentType, config)
  );
  return response.data;
};
