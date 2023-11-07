"use client"
export async function convertFileToBuffer(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        // reader.result is the file content as an ArrayBuffer
        resolve(Buffer.from(reader.result));
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
  }