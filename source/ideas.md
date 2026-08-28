# Định hướng thiết kế — PNE Marketing Hub 2026

## Ba hướng tiếp cận ban đầu

### Phương án 1 — Biên tập chiến lược hiện đại
**Giới thiệu ngắn:** Một không gian tài liệu chiến lược sáng, có trật tự biên tập, điểm nhấn đỏ PNE và các mô-đun dữ liệu rõ ràng. Cảm giác đáng tin cậy, tập trung vào khả năng tra cứu nhanh.

**Xác suất:** 0.07

### Phương án 2 — Sổ tay vận hành tối giản
**Giới thiệu ngắn:** Giao diện như một cẩm nang nội bộ, ưu tiên các dải nhãn, đường kẻ tinh tế và nhịp điệu đọc tuyến tính. Hình thức gọn, chậm rãi và giàu khoảng thở.

**Xác suất:** 0.03

### Phương án 3 — Bản đồ nội dung thân thiện
**Giới thiệu ngắn:** Các nội dung được định vị như điểm dừng trong hành trình, với điều hướng theo chương và những dải chỉ mục có tính hướng dẫn. Không khí cởi mở, trực quan và gần gũi.

**Xác suất:** 0.09

## Phương án được chọn — Biên tập chiến lược hiện đại

**Design Movement:** Modern Editorial Information Design kết hợp tinh thần dashboard tài liệu chiến lược.

**Core Principles:** Thứ bậc thông tin phải rõ ngay từ cái nhìn đầu tiên; nội dung dài được gom theo đúng đơn vị logic; các nhãn đỏ chỉ được dùng để điều hướng và nhấn ý quan trọng; khoảng trắng có chủ đích để người dùng đọc một tài liệu lớn mà không bị quá tải.

**Color Philosophy:** Nền trắng và xám rất nhạt tạo cảm giác minh bạch, chuyên nghiệp, giúp số lượng dữ liệu lớn dễ đọc. Đỏ chuẩn PNE `#D12026` được giữ độc quyền cho thương hiệu, tab đang hoạt động, nhãn thứ tự, progress và thông điệp cần nhấn; tuyệt đối không dùng dark mode.

**Layout Paradigm:** Một tuyến điều hướng ngang cố định phía trên chuyển thành thanh cuộn ngang trên di động. Mỗi tab là một chương tài liệu có Hero Banner đồng nhất, sau đó là các “dải biên tập” so le gồm nhãn chương, heading, cards, bảng và accordions—không dùng một lưới trung tâm đơn điệu cho toàn bộ trang.

**Signature Elements:** Dải số thứ tự nền đỏ bo tròn; nhãn chương chữ in hoa trên nền đỏ nhạt; cạnh card có đường viền mảnh và trạng thái hover chỉ đổi viền đỏ. Hero Banner đỏ kích thước chuẩn được lặp lại cho mọi chương.

**Interaction Philosophy:** Tương tác phục vụ tra cứu: tab chuyển chương tức thì; accordion mở/đóng theo từng khối nội dung hoàn chỉnh; hover và focus tạo phản hồi bằng viền và chuyển động nhẹ, không biến giao diện thành màn hình khuyến mại.

**Animation:** Card dịch lên 2px và tăng bóng đổ trong 180ms với `cubic-bezier(0.23, 1, 0.32, 1)`; icon accordion xoay trong 180ms; nội dung mở có chuyển động opacity/translate 160ms và luôn tôn trọng `prefers-reduced-motion`.

**Typography System:** Be Vietnam Pro cho toàn bộ giao diện. H1 dùng 700–800, H2 dùng 400 theo yêu cầu tại Hero, H2 chương dùng 700, H3 dùng 700, nội dung đọc ở 400–500 với line-height rộng; chỉ dùng in hoa ở nhãn điều hướng và phân loại để tránh gây mệt mỏi.

**Brand Essence:** Marketing Hub của Phuong Nam Education dành cho đội ngũ cần biến chiến lược Du học Đức 2026 thành các quyết định truyền thông nhất quán, có thể tra cứu và triển khai. **Chính xác, tin cậy, chủ động.**

**Brand Voice:** Tiêu đề mang tính chỉ dẫn và xác quyết; CTA ngắn, định hướng thao tác; không dùng lời chào hay khẩu hiệu chung chung. Ví dụ: “Xem chi tiết” và “Mở nội dung”.

**Wordmark & Logo:** Ưu tiên logo PNE do người dùng cung cấp. Khi dùng trên thanh điều hướng, logo được đặt trong vùng đệm sáng rõ, cạnh đó là tên “Phuong Nam Education” theo chữ đậm có tracking hẹp, không thay bằng font mặc định.

**Signature Brand Color:** Đỏ PNE `#D12026`.

## Style Decisions

- Header brand rule: Logo nguồn PNE và wordmark “Phuong Nam Education” phải đọc rõ như một lockup thương hiệu trong thanh điều hướng; biểu tượng không được bị thu nhỏ thành chi tiết trang trí.
- Editorial rhythm rule: Trong một chương dài, luân phiên thesis callout, dải chỉ mục, vùng đối sánh, bảng, accordion và cụm card; không lặp một mô-típ card/bảng duy nhất cho hai phần lớn liên tiếp.
- Module hierarchy rule: Mỗi khối cần biểu thị trước vai trò của mình bằng hệ nhãn đỏ, số thứ tự, title, callout hoặc band đã xác lập; phần nội dung chỉ diễn giải sau khi người đọc nhận biết được mục đích của khối.

## Ghi nhận nguồn dữ liệu

- Tài liệu gốc: Google Docs “pne-marketing-hub-draft”, có các tab 0 đến 4 và cấu trúc bao gồm Overview, Nghiên cứu & Định vị, Review Fanpage & Content Plan, Quy chuẩn truyền thông, Visual Guideline.
- Website tham chiếu: dùng hero đỏ, thanh tab ngang, card mục lục và bố cục chương rõ ràng; giao diện mới giữ hệ thống điều hướng/card/accordion nhưng tuân thủ tuyệt đối tên và trình tự trong tài liệu gốc.
- Các yêu cầu trực tiếp: toàn bộ Hero Banner nội dung đồng nhất với Overview; đỏ duy nhất là `#D12026`; font Be Vietnam Pro; không có dark mode; card/nút bo góc 16px; nội dung dài sử dụng accordion; dữ liệu phải được lấy đủ từ tài liệu gốc.
- Logo nguồn đã xác nhận là biểu tượng hoa/lá đỏ của Phuong Nam Education đi cùng wordmark đen; được lưu tại `/home/ubuntu/webdev-static-assets/pne-logo.webp` để tải lên kho tài sản web, dùng trong header. Biểu tượng đồ hoạ PNE được tạo riêng sẽ đảm nhiệm favicon theo yêu cầu kỹ thuật, không thay thế logo nguồn.
- Thư mục Visual Guideline chứa 4 ảnh overview theo thứ tự: `0. Quy tắc chung`, `01. Color Palette`, `02. Gradient System`, `03. Visual Elements`; tiếp theo là 12 ảnh `Mẫu post minh họa (1)` đến `(12)`. Tab 04 sẽ thể hiện đủ 16 ảnh này theo đúng thứ tự trên.
- Định danh 4 ảnh overview: `1EwG9HxpUz1bWuLNZVrFxKirfcdld-Wss`, `1NFKrNDZ6KQQRvjSm7lm8L7-arJ5rg4-2`, `1P3g2Xql1Deu08kKcs3F8S-ab49wJHB4d`, `1QPOkvmFgZEFhgf3HUh6viJ2UNzGUmg-m`. Định danh 12 ảnh mẫu (1–12): `1emCSPB8pGYjZZfDQ1INu1fJNoXyWQr7D`, `1Y_rQUFJU8-1PSCWekFyW9hOcVLFxWLUl`, `1fFnRdyyvgFGLf7t9qkSgdVwYGf8DlrSo`, `13nXD9OPYj7MIJ2AqUSoFrTFsRQWtGkwP`, `1dozoIUXCTuHEPTV9igSrol3DhZS3Yrdz`, `1lS_aeydDfKONRpuDsoC_sSO1vWLpYxSh`, `1n1IxVCuY6eRNX6SctwQadhWQz90qLmDI`, `1PFFdsfwr7pmtig8SZbL0Hg4m71oRaku8`, `1ep-5hDwWwv2mAQ2q9fGXYscO-O2nnIZP`, `1dBqeYR4qTXsVw9QVgwQhj6tL6rtulogq`, `1a0tcNo66So9-fwWL8Tc2n7KrFOo4grCR`, `1YAK0W-GUJge867NlV22VPFC7MPdURlJV`.
