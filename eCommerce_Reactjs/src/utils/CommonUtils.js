import * as XLSX from "xlsx/xlsx.mjs";
import { PREFIX_CURRENCY } from "../utils/constant";
class CommonUtils {
  // Chức năng: Chuyển đổi một tệp (file) thành chuỗi Base64.
  // Thực hiện: Sử dụng FileReader để đọc tệp và chuyển đổi thành chuỗi Base64.
  // Trả về: Một Promise mà khi thành công sẽ trả về chuỗi Base64 của tệp.
  static getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }
  // Tạo một workbook mới (wb).
  // Chuyển đổi dữ liệu JSON thành một sheet (ws).
  // Thêm sheet vào workbook.
  // Ghi workbook ra tệp với tên nameFile.
  static exportExcel(data, nameSheet, nameFile) {
    return new Promise((resolve, reject) => {
      var wb = XLSX.utils.book_new();
      var ws = XLSX.utils.json_to_sheet(data);
      XLSX.utils.book_append_sheet(wb, ws, nameSheet);
      XLSX.writeFile(wb, `${nameFile}.xlsx`);
      resolve("oke");
    });
  }
  // Định dạng số tiền theo kiểu tiền tệ Việt Nam Đồng (VND).
  static formatter = new Intl.NumberFormat("en-VN", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: PREFIX_CURRENCY.minimumFractionDigits,
  });
}

export default CommonUtils;
