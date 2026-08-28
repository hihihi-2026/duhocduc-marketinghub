# Ghi nhận hình tham chiếu — Zero Moment of Truth

## Lát 1 — ZMOT 1

Thẻ nền trắng, viền xám rất mảnh, bo góc lớn khoảng 18–20px và có chiều cao đồng nhất. Kicker “ZMOT 1” viết hoa, tracking rộng, màu xám đậm. Tiêu đề có trọng lượng vừa, cỡ lớn hơn body. Nhóm nội dung phụ là một dòng chữ xám, các đơn vị phân tách bằng dấu chấm giữa. Dòng “Content cần:” màu đỏ PNE, đặt cuối thẻ và không có icon hoặc bullet.

## Lát 2 — ZMOT 2

Thẻ dùng cùng thông số style với ZMOT 1. Nội dung phụ có thể xuống dòng tự nhiên nhưng vẫn hiển thị như một chuỗi câu, không tách thành danh sách bullet. Dòng đích màu đỏ của ZMOT 2 là: “Content cần: PNE cần đưa ra bằng chứng tương ứng.”

## Lát 3 — ZMOT 3

ZMOT 3 tiếp tục dùng bốn tầng thông tin giống hai thẻ trước. Nội dung phụ hiển thị bằng văn bản xám liền mạch với dấu chấm phẩy giữa các persona, sau đó là dòng đỏ: “Content cần: Đưa khách hàng về bước tiếp theo phù hợp với mức độ sẵn sàng.”

## Quy tắc triển khai

Giữ ba thẻ nằm ngang ở desktop với gap hẹp, body có nhịp cách theo 4 tầng: kicker, tiêu đề, nội dung phụ xám và câu “Content cần” màu đỏ. Trên di động, xếp một cột nhưng không thay đổi logic và phân cấp nội dung.

## Kết quả đối chiếu triển khai

Khối đã được kiểm tra trực tiếp trên trang Nghiên cứu & Định vị. Ba card hiển thị ngang, cùng chiều cao, nền trắng, viền xám mảnh và bo góc lớn. Mỗi card giữ đúng kicker ZMOT, tiêu đề, dòng nội dung phụ màu xám và câu “Content cần” màu đỏ; nội dung ZMOT 2 và ZMOT 3 đã được trình bày thành đoạn liền mạch như hình tham chiếu.
