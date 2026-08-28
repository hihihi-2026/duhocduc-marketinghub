/**
 * Design reminder — Biên tập chiến lược hiện đại: dữ liệu được giữ nguyên văn,
 * gom theo đúng đơn vị logic để giao diện trở thành công cụ tra cứu đáng tin cậy.
 */

export const overviewCards = [
  {
    number: "01",
    title: "Nghiên cứu & Định vị",
    description:
      "Xác lập nền tảng chiến lược: chương trình đang có cơ hội ở đâu, PNE sở hữu lợi thế cạnh tranh nào và nên định vị theo hướng nào?",
    highlights: ["4 xu hướng ngành", "3 Persona", "8 Insight ẩn", "5 phân khúc", "USP chính"],
  },
  {
    number: "02",
    title: "Review Fanpage",
    description:
      "Đánh giá hiệu quả kênh organic, điểm mạnh hiện tại, khoảng trống cần cải thiện và định hướng Content để nuôi dưỡng tệp quan tâm.",
    highlights: ["6 Content Pillar", "23 Content Angle", "5 Đề xuất tối ưu"],
  },
  {
    number: "03",
    title: "Quy chuẩn truyền thông",
    description:
      "Bộ nguyên tắc Nên/Không nên về nội dung và cách diễn đạt để mỗi bài đăng đúng định vị, đúng đối tượng và an toàn khi triển khai.",
    highlights: ["4 nhóm Do/Don't", "Brand Lexicon", "Hook & CTA Library", "Checklist Content"],
  },
  {
    number: "04",
    title: "Visual Guideline",
    description:
      "Bảng màu, typography, tỷ lệ layout, hiệu ứng và nguyên tắc Do/Don't để Visual Fanpage nhất quán, dễ đọc và đúng nhận diện PNE.",
    highlights: ["Brand Core", "Gradient System", "Typography", "Design Principles"],
  },
] as const;

export const marketTrends = [
  {
    title: "Quốc tế hóa chương trình",
    behavior: "Gần 2.400 chương trình dạy bằng tiếng Anh trong năm 2025; bậc Master có tỷ trọng đáng kể",
    opportunity: "Tạo nội dung riêng cho nhóm có IELTS, nhấn mạnh Master Matching và điều kiện học thuật",
  },
  {
    title: "Tiếng Đức giao tiếp thực chiến",
    behavior: "Khả năng phản xạ trực tiếp ngày càng quan trọng; chứng chỉ giấy không thay thế năng lực sử dụng ngôn ngữ",
    opportunity: "Đưa App PNE, lớp học, speaking practice và tình huống đời thực vào Content Plan",
  },
  {
    title: "Siết chặt thẩm tra hồ sơ",
    behavior: "APS và cơ quan liên quan tăng đối chiếu ngành học, chuyển trường và lộ trình dự bị",
    opportunity: "Xây dựng series “Giải mã APS”, checklist hồ sơ và nội dung minh bạch về điều kiện",
  },
  {
    title: "Từ “lấy bằng” sang phát triển sự nghiệp",
    behavior: "Người học quan tâm hơn đến năng lực, việc làm và khả năng phát triển sau tốt nghiệp",
    opportunity: "Truyền thông bằng dữ liệu thị trường và lộ trình năng lực; tránh lời hứa tuyệt đối",
  },
] as const;

export const marketContext = {
  opportunities: [
    "Tư vấn ngách cho học sinh có IELTS hoặc hồ sơ khó",
    "Cá nhân hóa lộ trình & xử lý hồ sơ chuyên nghiệp",
    "Du học Đức là quyết định có mức cân nhắc cao, phù hợp với content chuyên sâu",
    "Có dịch vụ trọn gói: Đào tạo – Thi chứng chỉ – Xử lý hồ sơ trong cùng một hệ thống",
  ],
  challenges: [
    "Sperrkonto tăng lên 11.904 EUR/năm, tạo áp lực tài chính lớn",
    "APS khắt khe, rủi ro trượt Aufnahmetest/FSP",
    "Khách hàng có khả năng tự tìm hiểu và tự chuẩn bị hồ sơ cao",
    "Khủng hoảng niềm tin sau các vụ việc du học sinh biến mất",
  ],
  successFactors: [
    "Năng lực chuyên môn: giải thích được vấn đề trước khi cung cấp dịch vụ.",
    "Năng lực đánh giá hồ sơ: đọc profile trước khi định hướng",
    "Bằng chứng rõ ràng: biến năng lực nội bộ thành Proof người dùng nhìn thấy được.",
    "Khả năng kết nối hành trình: Học – Thi – Hồ sơ không tồn tại như ba dịch vụ độc lập.",
  ],
  pneOpportunities: [
    "Lợi thế Hội đồng thi ÖSD: giảm phụ thuộc vào lịch thi bên ngoài và hỗ trợ học viên chủ động kế hoạch chứng chỉ.",
    "Mô hình khép kín: Trung tâm đào tạo + thi lấy chứng chỉ + tư vấn du học, giảm khoảng trống trách nhiệm giữa các đơn vị.",
    "100+ đối tác quốc tế: mở rộng lựa chọn trường, học bổng và lộ trình.",
    "Thương hiệu 15 năm: tạo nền tảng cho nội dung Trust, minh bạch và Proof-based.",
  ],
} as const;

export const competitorGroups = [
  {
    group: "1. Nhóm mạnh chuyên môn học thuật & nội dung chuyên sâu",
    competitors: "IECS, BLA Education, AMEC",
    strength:
      "Có hệ thống bài viết khá sâu về Du học Đức, APS, TestAS, Dự bị, Đại học, Master; khả năng SEO và xây Authority tương đối rõ. IECS hiện có riêng chuyên mục Du học Đức với nội dung Dự bị, APS và nhiều tuyến hướng dẫn chuyên sâu; BLA cũng phát triển nội dung APS và hồ sơ khá mạnh. (iecs.vn)",
    gap: "Nội dung có thể nặng thông tin; người đọc vẫn phải tự ghép nhiều mảnh kiến thức để hiểu route nào phù hợp với chính hồ sơ của mình.",
    pne: "PNE nên đi theo hướng chuyên sâu nhưng phải dẫn đến quyết định cụ thể: từ kiến thức → tự đánh giá → review profile → đề xuất route.",
  },
  {
    group: "2. Nhóm mạnh Social / tuyển sinh / độ phủ thị trường",
    competitors: "EduGo và các hệ thống tư vấn Du học Đức có mạng lưới tuyển sinh lớn",
    strength:
      "Mạnh về hoạt động tuyển sinh, tiếp cận trường THPT, sự kiện, social và khả năng tạo volume lead. EduGo có hoạt động tuyển sinh Du học Đức tại nhiều địa phương và từng được cơ quan giáo dục địa phương chấp thuận phối hợp giới thiệu chương trình tại trường THPT. (thptchuvanan.longan.edu.vn)",
    gap: "Thông điệp dễ tập trung vào chương trình, offer và thời điểm tuyển sinh; chiều sâu xử lý academic case có thể không phải hình ảnh nổi bật nhất.",
    pne: "PNE không cần cạnh tranh bằng volume đơn thuần; nên nhấn vào giá trị tư vấn trước conversion + Proof chuyên môn + lộ trình theo từng case.",
  },
  {
    group: "3. Nhóm mạnh đào tạo tiếng Đức / khảo thí",
    competitors: "Goethe-Institut, Trung tâm Việt–Đức – ĐH Bách khoa Hà Nội và các trung tâm tiếng Đức chuyên biệt",
    strength:
      "Có uy tín rõ về ngôn ngữ, môi trường học và/hoặc khảo thí. Trung tâm Việt–Đức tại ĐH Bách khoa Hà Nội hiện là một trong các điểm liên quan đến TestAS và đào tạo tiếng Đức được DAAD Việt Nam dẫn chiếu. (daad-vietnam.org)",
    gap: "Sau giai đoạn học tiếng, khách hàng có thể vẫn phải tìm thêm đơn vị khác để nối sang định hướng ngành/trường, hồ sơ, tài chính và application.",
    pne: "PNE không nên cạnh tranh theo hướng “dạy tiếng tốt hơn”, mà nên sở hữu lợi thế đặt tiếng Đức vào toàn bộ roadmap Du học Đức, sau đó nối tiếp bằng ÖSD và hồ sơ.",
  },
  {
    group: "4. Nhóm tư vấn du học tổng hợp / đa quốc gia",
    competitors: "AMEC và các công ty tư vấn du học đa thị trường có Đức trong danh mục",
    strength:
      "Có danh mục quốc gia/trường rộng, kinh nghiệm xử lý nhiều dạng hồ sơ và khả năng phục vụ nhiều điểm đến. AMEC hiện có nội dung và dịch vụ liên quan cả hệ Đại học và Thạc sĩ Đức. (amec.com.vn)",
    gap: "Năng lực chuyên sâu về Đức phải chia sẻ nguồn lực với nhiều thị trường khác, nên khó tạo hình ảnh chuyên biệt sâu về toàn bộ hệ thống Đức.",
    pne: "PNE nên đóng khung mình là đơn vị chuyên sâu về lộ trình Đức, nơi APS, TestAS, tiếng Đức, ÖSD, academic matching và application được xử lý trong cùng một logic.",
  },
] as const;

export const opponentDetails = [
  {
    name: "ALT Scholarships",
    keyword: "Chuyên gia học bổng, du học tiết kiệm và luyện thi đầu vào",
    positioning: "Hệ học thuật; College Foundation; Dự bị/đầu vào Đức, Ý, Phần Lan; có Thạc sĩ",
    channel: "Website + Facebook; nội dung scholarship/entrance exam là lead hook",
    standout: "Chuyên môn academic preparation; weekly tracking; teaching assistant; monthly report; extra tutoring",
    fanpage: "Germany/scholarship posts; framing chi phí thấp; CTA Đăng ký ngay, Messenger/phone",
    gap: "Public promise nghiêng về scholarship/entrance exam; chưa sở hữu rõ một hệ sinh thái Đức khép kín gồm đào tạo tiếng + hội đồng thi + hồ sơ",
  },
  {
    name: "Amec Group",
    keyword: "Tổ chức tư vấn du học đa quốc gia, lâu năm, có quy trình trọn gói",
    positioning: "Nhiều quốc gia; Đức là một destination; có cả học thuật và nghề",
    channel: "Website + hệ social đa kênh; scale và trust signals",
    standout: "Established 2004; 20+ years; 80+ teachers/specialists; 8 offices; 500+ institutional links; 500+ students/year; 12,000+ successful applications (site claims); 7-step journey",
    fanpage: "Social links đa kênh; content service/định hướng/du học; page-level engagement chưa xác minh",
    gap: "Độ chuyên biệt cho Germany Academic có thể bị loãng bởi portfolio đa quốc gia; lợi thế quy mô khó chuyển thành lời hứa học thuật riêng cho từng persona",
  },
  {
    name: "VIC / Du học VIC",
    keyword: "Cổng thông tin/tư vấn du học đa quốc gia; dùng educational content để tạo nhu cầu",
    positioning: "Multi-country; Germany là một content category, không chứng minh được chuyên biệt học thuật",
    channel: "SEO Website + YouTube/content theo tín hiệu từ public pages",
    standout: "Dễ tiếp cận qua SEO/content; bài Germany quan sát tập trung vào văn hóa học thuật, Mensa, punctuality, semester ticket; có phone/online-chat paths",
    fanpage: "Bài giải thích đời sống và văn hóa; search/article navigation; engagement public chưa xác minh",
    gap: "Niche Germany Academic chưa được sở hữu rõ; trải nghiệm văn hóa hữu ích nhưng chưa đủ thành một hệ thống Preparatory–Bachelor–Master",
  },
  {
    name: "EuroCentre / EduGo",
    keyword: "Hệ sinh thái tiếng Đức và du học nghề Đức quy mô lớn, gắn việc học với việc làm/thu nhập",
    positioning: "Du học nghề; B1/B2; nhiều ngành nghề; không phải direct substitute của academic pathway",
    channel: "Facebook + TikTok/lead ads + language ecosystem",
    standout: "Nearly 50 branches; 1,000+ learners; >90% annual B1 pass rate; dormitory; 10–15 learner classes; native-speaker teaching; 1-to-1 support (brand/site/social claims); CTA mạnh",
    fanpage: "A1 class opening, German learning, learner journey/departure, visa/success content; landing page urgency, promotion và free consultation",
    gap: "Message ưu tiên nghề, miễn phí, lương và incentive; không chiếm lĩnh nhu cầu Dự bị–Cử nhân–Thạc sĩ học thuật",
  },
  {
    name: "CHD Education",
    keyword: "Đơn vị tư vấn đa tuyến, dùng content/SEO để bao phủ hành trình Đức",
    positioning: "University, postgraduate và vocational; scholarship, visa, language",
    channel: "SEO Website, hỗ trợ bằng Facebook/Instagram/TikTok",
    standout: "Germany hub sâu về ngành học, admissions, APS, scholarship, cost, financial proof, student work; hotline/Zalo/form; social Facebook, Instagram, TikTok",
    fanpage: "SEO-style headlines, guide/how-to, recent topics về Master, APS, public universities, cities/costs, DAAD; public engagement chưa xác minh",
    gap: "Breadth lớn nhưng dễ tạo cảm nhận “information hub” hơn là một academic specialist có hệ thống năng lực riêng; không suy diễn thành lỗi vận hành",
  },
] as const;

export const opponentSummaryCards = [
  { number: "01", name: "ALT Scholarships", category: "Đối thủ học thuật", summary: "Du học tiết kiệm, học bổng, luyện thi đầu vào và College Foundation; bám vào cảm giác được chuẩn bị để vượt qua cửa vào đại học." },
  { number: "02", name: "Amec Group", category: "Đối thủ trust", summary: "Tuổi đời, đội ngũ, văn phòng, đối tác, hồ sơ và quy trình bảy bước tạo cảm giác có người đồng hành end-to-end." },
  { number: "03", name: "VIC / Du học VIC", category: "Đối thủ cultural orientation", summary: "Bài viết dễ đọc giúp giảm mơ hồ về đời sống học thuật Đức: độc lập, punctuality, Mensa, semester ticket và văn hóa campus." },
  { number: "04", name: "EuroCentre / EduGo", category: "Đối thủ vocational shortcut", summary: "Miễn học phí, lương khi học, việc làm, cư trú/quốc tịch và lộ trình nghề tạo một mental shortcut mạnh." },
] as const;

export const opponentAnalyses = [
  {
    name: "A. ALT Scholarships",
    lines: [
      "Quan sát: Website đặt “du học tiết kiệm”, “học bổng”, luyện thi đầu vào và College Foundation ở vị trí nổi bật. Hệ thống hỗ trợ được mô tả khá cụ thể: teaching assistant, theo dõi tiến độ hàng tuần, học bù miễn phí và báo cáo tháng cho học viên/phụ huynh.",
      "Tác động định vị: ALT không chỉ bán hồ sơ; họ bán cảm giác được chuẩn bị để vượt qua cửa vào đại học. Đây là đối thủ gần PNE nhất ở mặt học thuật.",
      "Lead mechanism: Học bổng/chi phí thấp và promise luyện thi là các “high-intent hooks”; CTA trực tiếp “Đăng ký ngay”, Messenger và phone làm ngắn funnel.",
      "Khoảng trống có thể khai thác: PNE không nên đấu giá với claim “tiết kiệm” đơn thuần. PNE nên sở hữu lớp giá trị rộng hơn: đào tạo tiếng Đức có chuẩn đầu ra + thi ÖSD chính thức + lộ trình học thuật + hồ sơ.",
      "Cảnh báo: “100% đỗ” là tuyên bố của ALT; chưa có audit độc lập trong phạm vi nghiên cứu.",
    ],
  },
  {
    name: "B. Amec Group",
    lines: [
      "Quan sát: AMEC dùng tuổi đời, đội ngũ, số văn phòng, số đối tác và số hồ sơ như trust architecture. Quy trình bảy bước tạo cảm giác có người đồng hành từ orientation tới support sau khi sang Đức.",
      "Tác động định vị: AMEC thắng ở câu hỏi “đơn vị này có đủ lớn và đủ kinh nghiệm không?”. Đây là một trust competitor, không nhất thiết là academic-specialist competitor.",
      "Lead mechanism: Multi-channel contact, brand proof và journey end-to-end phù hợp với phụ huynh muốn giảm rủi ro vận hành.",
      "Khoảng trống có thể khai thác: PNE không cần bắt chước quy mô đa quốc gia. Cần chứng minh độ sâu chuyên biệt Đức hệ học thuật và biến hội đồng thi ÖSD thành proof point mà một portfolio đa quốc gia khó sở hữu ở mức rõ ràng.",
      "Cảnh báo: Các con số quy mô là self-reported claims trên website.",
    ],
  },
  {
    name: "C. VIC / Du học VIC",
    lines: [
      "Quan sát: Tên “VIC” có nhiều entity trên kết quả công khai. Báo cáo sử dụng Du học VIC (duhocvic.com) vì đây là entity có Germany content trực tiếp; không gộp với Vic Vina, vốn chủ yếu hiển thị Japan/Taiwan/Korea.",
      "Tác động định vị: Du học VIC dùng bài viết dễ đọc để giảm mơ hồ về đời sống học thuật Đức: độc lập, punctuality, Mensa, semester ticket và văn hóa campus.",
      "Lead mechanism: SEO/article navigation, search, phone và online chat; nội dung cultural orientation tạo top-of-funnel.",
      "Khoảng trống có thể khai thác: Educational content của VIC có thể giúp người dùng hiểu “sống và học ở Đức”, nhưng public evidence chưa cho thấy một lộ trình học thuật có chuẩn đầu ra tiếng Đức và assessment credential.",
      "Cảnh báo: Không có dữ liệu đủ để kết luận yếu về chất lượng dịch vụ, engagement hay conversion.",
    ],
  },
  {
    name: "D. EuroCentre / EduGo",
    lines: [
      "Quan sát: EduGo nói trực tiếp về miễn học phí, lương khi học, việc làm, cư trú/quốc tịch và số lượng chi nhánh/học viên. EuroCentre bổ trợ bằng A1/B1/B2, lớp nhỏ, native teacher và learner journey.",
      "Tác động định vị: EduGo chiếm một mental shortcut mạnh: sang Đức để học nghề, có thu nhập, có đường việc làm.",
      "Lead mechanism: Urgency, “đăng ký hôm nay”, free consultation và gói khuyến mãi 65 triệu đồng theo landing page đã mở.",
      "Khoảng trống có thể khai thác: Đây là cơ hội để PNE nói rõ sự khác nhau giữa academic pathway và vocational pathway, thay vì để khách hàng đồng nhất mọi lựa chọn “du học Đức”.",
      "Cảnh báo: Các tỷ lệ đỗ, số chi nhánh, thu nhập và incentive là brand/site claims; không xem là dữ liệu kiểm chứng độc lập.",
    ],
  },
  {
    name: "E. CHD Education",
    lines: [
      "Quan sát: Germany hub của CHD bao phủ ngành học, hệ thống giáo dục, admissions, scholarships, visa, language, costs, documents, APS, financial proof và student work. Nội dung giống một thư viện tra cứu có CTA form/hotline.",
      "Tác động định vị: CHD thắng ở share of search và khả năng xuất hiện khi người dùng đã có câu hỏi cụ thể.",
      "Lead mechanism: SEO long-tail + bài hướng dẫn + form tư vấn miễn phí + hotline/Zalo.",
      "Khoảng trống có thể khai thác: PNE nên tránh trở thành bản sao của CHD về số lượng bài. Cần tập trung vào decision framework: ai phù hợp với Dự bị/Cử nhân/Thạc sĩ, cần chuẩn tiếng nào, thi ở đâu, từng mốc hồ sơ ra sao, và học thuật khác nghề như thế nào.",
      "Cảnh báo: “Breadth” là quan sát về kiến trúc nội dung, không phải kết luận về chất lượng tư vấn hay tỷ lệ chuyển đổi.",
    ],
  },
] as const;

export const marketGaps = [
  {
    number: "01",
    title: "Lộ trình bắt đầu từ chương trình thay vì hồ sơ",
    bridge: "Từ “Tôi muốn học chương trình nào?” → “Hồ sơ của tôi phù hợp hướng nào?”",
    gap: "Nhiều lựa chọn nhưng dễ chọn trước trường/chương trình/hướng đi khi chưa đánh giá đầy đủ nền tảng, mục tiêu và khả năng của hồ sơ.",
    advantage: "Bắt đầu từ hồ sơ – năng lực – mục tiêu – thời điểm, sau đó định hướng & cá nhân hóa lộ trình",
    message: "Hiểu hồ sơ trước, định hướng lộ trình sau.",
  },
  {
    number: "02",
    title: "Việc học tiếng dừng ở mục tiêu chứng chỉ",
    bridge: "Từ “đủ hồ sơ để đi” → “đủ năng lực để học”",
    gap: "Tiếng Đức thường được nhìn như điều kiện cần đạt, trong khi năng lực sử dụng cho học tập và thích nghi tại Đức cần được chuẩn bị kỹ càng hơn.",
    advantage: "Sở hữu chuỗi năng lực “Đào tạo tiếng Đức → hệ sinh thái học tập → chuẩn hóa đầu ra → thi ÖSD”, đặt việc chuẩn hóa năng lực ngôn ngữ vào mục tiêu dài hạn",
    message: "Không chỉ đủ điều kiện để đi. Chuẩn bị vững năng lực cho hành trình tại Đức.",
  },
  {
    number: "03",
    title: "Kế hoạch tài chính thiếu góc nhìn toàn hành trình",
    bridge: "Từ “báo giá minh bạch” → “kế hoạch tài chính minh bạch”",
    gap: "Gia đình dễ tập trung vào một vài khoản lớn nhưng chưa hình dung đầy đủ khoản nào cần chuẩn bị, vào thời điểm nào và thay đổi ra sao theo lộ trình.",
    advantage: "Biến minh bạch tài chính thành năng lực hoạch định: cho khách hàng biết cần khoản gì – ở giai đoạn nào – khoản nào bắt buộc – khoản nào phụ thuộc lựa chọn, đồng thời gắn tài chính với quyết định trường, thành phố và lộ trình.",
    message: "Biết rõ cần chuẩn bị gì, trước khi quyết định đi thế nào.",
  },
  {
    number: "04",
    title: "Hành trình bị chia cắt giữa nhiều đơn vị",
    bridge: "Từ “hành trình phân mảnh” → “một lộ trình kết nối xuyên suốt”",
    gap: "Không thiếu dịch vụ nhưng Học tiếng – thi chứng chỉ – xử lý hồ sơ thường nằm ở các đơn vị khác nhau, khiến tiến độ và mục tiêu giữa các giai đoạn dễ bị đứt quãng",
    advantage: "Kết nối định hướng – đào tạo tiếng Đức – thi ÖSD – hồ sơ trong cùng một lộ trình và một hệ thống đồng hành",
    message: "Một lộ trình xuyên suốt, từ chuẩn bị năng lực đến hoàn thiện hồ sơ.",
  },
] as const;

export const positioningWin = [
  "“Dịch vụ toàn diện”: Khẳng định sự khép kín (Học - Thi - Hồ sơ - Hỗ trợ tại Đức).",
  "“Kiêm Hội đồng thi ÖSD”: Đây là “vũ khí” độc quyền, tạo sự tin tưởng tuyệt đối về bằng cấp.",
  "“Bảo chứng từ Việt Nam sang Đức”: Cam kết không bỏ rơi khách hàng, giải quyết nỗi sợ “cô đơn” và “đứt gãy lộ trình”.",
] as const;

export const personas = [
  {
    name: "PERSONA A — KẺ CHINH PHỤC SỚM",
    representative: "Minh Anh · 17 tuổi",
    segment: "THPT → Dự bị / Cử nhân",
    share: "30%",
    needs: "Cần lộ trình rõ từ THPT đến Đức, biết mỗi giai đoạn cần chuẩn bị gì và đạt đến đâu.",
    goal: ["Dự bị / Cử nhân tại Đức.", "Ưu tiên STEM / Kinh tế.", "Chuẩn bị sớm để không chậm kỳ nhập học."],
    lifestyle: ["TikTok, Reels, Threads để khám phá.", "Facebook Group để tham khảo kinh nghiệm.", "YouTube, website khi cần tìm hiểu sâu."],
    fears: ["Tiếng Đức B2 khó và mất nhiều thời gian.", "Không đạt Aufnahmetest / TestAS.", "Chậm hơn bạn bè cùng lứa.", "Sang Đức nhưng không theo kịp việc học."],
    close: ["Lộ trình chia rõ theo từng mốc.", "Chuẩn đầu ra tiếng Đức đo lường được.", "Yêu cầu TestAS / đầu vào được chuẩn bị sớm.", "Học – Thi – Hồ sơ có kế hoạch liên kết."],
    insight: "“Em không ngại lộ trình dài nếu biết từng tháng mình đang tiến gần mục tiêu như thế nào.”",
  },
  {
    name: "PERSONA B — NGƯỜI TÌM HƯỚNG ĐI MỚI",
    representative: "Hoàng Nam · 23–26 tuổi",
    segment: "Thạc sĩ 35% · Chuyển hướng 15%",
    share: "50%",
    needs: "Cần xác định hướng đi phù hợp với hồ sơ hiện tại và mục tiêu nghề nghiệp, trước khi đầu tư thêm thời gian và tài chính.",
    goal: ["Học Thạc sĩ hoặc chuyển hướng ngành.", "Nâng giá trị nghề nghiệp dài hạn.", "Tìm cơ hội phát triển tại Đức."],
    lifestyle: ["Facebook để cập nhật thông tin du học.", "LinkedIn để nghiên cứu ngành và cơ hội việc làm.", "YouTube, Google để tìm hiểu APS, trường và chương trình."],
    fears: ["GPA hoặc ngành nền hạn chế lựa chọn.", "APS / chuyển ngành khó giải trình.", "Đánh đổi thu nhập nhưng chọn sai hướng.", "Áp lực tài chính và thời gian chuẩn bị."],
    close: ["Hồ sơ được đánh giá trước khi chọn lộ trình.", "Phân tích hướng học phù hợp với ngành nền.", "Có năng lực xử lý hồ sơ phức tạp.", "Làm rõ logic nghề nghiệp – ngành học – chương trình."],
    insight: "“Tôi có thể đầu tư thêm hai năm, nhưng không muốn đầu tư thêm hai năm vào một hướng sai.”",
  },
  {
    name: "PERSONA C — NHÀ ĐẦU TƯ AN TÂM",
    representative: "Chú Hùng · 45–55 tuổi",
    segment: "Phụ huynh / Người ra quyết định tài chính",
    share: "20%",
    needs: "Cần nhìn thấy một kế hoạch minh bạch, có người chịu trách nhiệm và kiểm soát được các rủi ro chính.",
    goal: ["Con có lộ trình học tập rõ ràng.", "Chi phí nằm trong khả năng chuẩn bị.", "Có đầu mối hỗ trợ xuyên suốt hành trình."],
    lifestyle: ["Facebook để đọc bài phân tích và cập nhật.", "Website để kiểm tra dịch vụ, pháp lý và thông tin đơn vị.", "Review / giới thiệu để đối chiếu mức độ uy tín."],
    fears: ["Chi phí phát sinh hoặc thiếu minh bạch.", "Đơn vị tư vấn thiếu uy tín.", "Chính sách và yêu cầu hồ sơ thay đổi.", "Không rõ ai xử lý khi phát sinh vấn đề."],
    close: ["Kế hoạch tài chính minh bạch.", "Quy trình và trách nhiệm từng giai đoạn rõ.", "Bằng chứng năng lực, kinh nghiệm thực tế.", "Có hỗ trợ khi học viên sang Đức."],
    insight: "“Tôi không cần nghe mọi việc sẽ ổn; tôi cần biết nếu có vấn đề thì ai xử lý và phương án thay thế là gì.”",
  },
] as const;

export const hiddenInsights = [
  {
    title: "Insight 1: Sợ chọn sai trung tâm làm “hồ sơ lỗi” hơn là sợ thủ tục khó",
    behavior: "Liên tục hỏi về việc “tự làm hồ sơ” trên các group dù có đủ tài chính.",
    hidden: "Họ không tiếc tiền cho dịch vụ, họ sợ bị “mất quyền kiểm soát”. Vì du học Đức là một ván bài rủi ro cao, họ muốn nắm chắc mọi quy trình để không bị trung tâm “dắt mũi” vào những lộ trình bế tắc. Thế hệ học viên trẻ thừa năng lực để tự làm hồ sơ online. Họ tìm đến trung tâm không phải vì lười, mà họ đang tìm kiếm một “sự bảo hiểm tâm lý” – họ sợ một lỗi sai nhỏ trong khâu đối chiếu ngành học của nước Đức sẽ phá hủy toàn bộ lộ trình của họ.",
    punchline: "Họ cần một “tấm khiên pháp lý” bảo đảm cho visa của mình, không chỉ là một người dịch thuật hồ sơ.",
  },
  {
    title: "Insight 2: Sợ sự cô đơn và rào cản văn hóa hơn là sợ chương trình học nặng",
    behavior: "Thích xem video than vãn về khó khăn, cô đơn ở Đức hơn là các video quảng cáo hào nhoáng.",
    hidden: "Sự khó khăn mới là thứ khiến họ cảm thấy “thật”. Họ tìm kiếm sự chuẩn bị về mặt tâm lý để tự trấn an rằng “mình đã biết trước nó khó thế nào rồi” nhằm giảm bớt nỗi sợ thất bại.",
    punchline: "Họ không cần một bức tranh màu hồng, họ cần một ‘người đồng hành’ chỉ cho họ cách sinh tồn.",
  },
  {
    title: "Insight 3: Ám ảnh rủi ro tài chính từ ‘Tài khoản phong tỏa’ hơn là học phí",
    behavior: "Phụ huynh hào hứng với thông tin miễn học phí trường công tại Đức, nhưng lại khựng lại và hỏi đi hỏi lại về thủ tục mở tài khoản phong tỏa (Sperrkonto).",
    hidden: "Chữ ‘miễn học phí’ là thỏi nam châm thu hút ban đầu, nhưng ‘Tài khoản phong tỏa’ (~11.904 EUR) mới là rào cản tâm lý thực sự. Phụ huynh sợ phải đóng một số tiền lớn vào một tài khoản ở nước ngoài mà không có người bảo chứng, lo lắng về việc đọng vốn và rủi ro không rút được tiền nếu có biến cố.",
    punchline: "Đừng chỉ quảng cáo ‘miễn học phí’, hãy sản xuất chuỗi bài ‘Audit Tài chính Du học Đức’ để giải tỏa nỗi lo mất tiền của phụ huynh.",
  },
  {
    title: "Insight 4: Nỗi sợ ‘Sốc học thuật’ và rào cản thẩm định APS/TestAS",
    behavior: "Học sinh giỏi/khá liên tục tìm kiếm các đề thi thử TestAS và hỏi về kinh nghiệm phỏng vấn APS dù kết quả học tập tại VN rất tốt.",
    hidden: "Họ coi Đức là “cánh cửa thoát hiểm” cuối cùng cho sự nghiệp. Nỗi sợ GPA thấp thực chất là nỗi sợ bị từ chối bởi hy vọng cuối cùng của chính mình.",
    punchline: "Thay vì nói ‘Chúng tôi tư vấn tốt’, hãy làm chuỗi Video ‘Giải mã APS’ để chứng minh vị thế chuyên gia học thuật.",
  },
  {
    title: "Insight 5: Chọn hệ tiếng Anh để né tiếng Đức, nhưng lại sợ thất nghiệp chặng đầu ra",
    behavior: "Nhóm sinh viên có sẵn IELTS tương tác rất mạnh dưới các bài viết giới thiệu chương trình Thạc sĩ/Đại học bằng tiếng Anh tại Đức.",
    hidden: "Họ muốn hưởng lợi từ hệ thống giáo dục Đức nhưng lại muốn “đi tắt” để né tránh rào cản ngôn ngữ lớn nhất. Đây là sự mâu thuẫn giữa khát vọng đổi đời và nỗi sợ phải bắt đầu lại từ con số 0. Tuy nhiên, xung đột nội tâm của họ là nỗi sợ sang Đức không biết tiếng bản địa sẽ bị cô lập về mặt xã hội, không tìm được việc làm thêm (Minijob) và thất nghiệp sau khi tốt nghiệp.",
    punchline: "Họ cần một lộ trình đi nhanh bằng tiếng Anh chặng đầu, nhưng phải đi kèm giải pháp bổ túc tiếng Đức giao tiếp song song cho chặng đầu ra sự nghiệp.",
  },
  {
    title: "Insight 6: Sợ học vẹt lấy bằng giấy rồi sang Đức bị đuổi về nước",
    behavior: "Comment hỏi “Trung tâm có mẹo gì thi đỗ B1/B2 nhanh không?”, “Học bao lâu thì lấy được bằng?”.",
    hidden: "Họ biết thừa nếu chỉ học mẹo để lấy bằng giấy, khi lên Đại sứ quán phỏng vấn trực tiếp hoặc sang Đức thi đầu vào Dự bị Đại học (Aufnahmetest) mà không phản xạ được là bị trả về nước ngay. Họ hỏi mẹo vì tâm lý nôn nóng, nhưng cái họ thực sự thèm khát là năng lực giao tiếp thực chiến để “sống sót”.",
    punchline: "Họ cần một môi trường ép bản thân phải nghe - nói thực chiến, không cần mẹo thi để lấy bằng giả tạo.",
  },
  {
    title: "Insight 7: Đề phòng và cảnh giác trước các quảng cáo “miễn phí, tài trợ trọn gói”",
    behavior: "Để lại bình luận hỏi giá trực diện theo kiểu bài xích: “Phí dịch vụ bao nhiêu?”, “Có phát sinh gì không?”.",
    hidden: "Phụ huynh và học sinh có học thức đều biết nước Đức miễn 100% học phí trường công. Khi thấy quảng cáo giật tít “Miễn phí”, phản ứng đầu tiên của họ là đề phòng vì sợ bị “gài” các khoản phí ẩn chặng sau (phí chọn bang, phí đặt lịch hẹn, phí quản lý...).",
    punchline: "Trung tâm càng liệt kê chi tiết từng đồng chi phí phong tỏa tài chính và phí dịch vụ, phụ huynh càng nhanh xuống tiền",
  },
  {
    title: "Insight 8: Bố mẹ cấm cản vì sợ con gặp rủi ro mất kiểm soát, không phải vì tiếc tiền",
    behavior: "Học sinh lên các hội nhóm than phiền: “Bố mẹ tư duy bảo thủ, không cho em đi Đức, cứ bắt ở lại Việt Nam học Đại học”.",
    hidden: "Thực chất, phụ huynh bị ám ảnh bởi các bê bối lừa đảo, trục xuất hoặc vụ việc hơn 200 du học sinh biến mất khỏi trường học trên thị trường. Họ cấm cản vì lo sợ mất quyền kiểm soát và không bảo vệ được con ở khoảng cách nửa vòng trái đất khi con gặp sự cố học thuật hoặc ốm đau.",
    punchline: "Bố mẹ cần nhìn thấy mạng lưới hỗ trợ sinh viên tại Đức của trung tâm, không chỉ là tấm visa đưa con ra sân bay.",
  },
] as const;

export const zmot = [
  { label: "ZMOT 1", title: "Hồ sơ của tôi có những lựa chọn nào?", content: "GPA · ngành · ngôn ngữ · TestAS · APS · tài chính", action: "Content cần: Eligibility, case comparison, roadmap." },
  { label: "ZMOT 2", title: "Vì sao tôi nên tin PNE?", content: "ÖSD · case thật · 15+ năm · chuyên môn · quy trình · đối tác · lớp học · PNE Hub", action: "Content cần: PNE cần đưa ra bằng chứng tương ứng." },
  { label: "ZMOT 3", title: "Tôi có sẵn sàng đầu tư ngay?", content: "Persona A cần: Roadmap; Persona B cần: Đánh giá profile + ROI; Persona C cần: Bản đồ tài chính + kiểm soát rủi ro", action: "Content cần: Đưa khách hàng về bước tiếp theo phù hợp với mức độ sẵn sàng." },
] as const;

export const segments = [
  { name: "1. Học sinh THPT — Bứt phá lộ trình sớm", needs: "Học sinh THPT, đặc biệt từ lớp 11, hướng tới Studienkolleg hoặc Bachelor tại Đức. Nhu cầu cốt lõi là biết phải bắt đầu tiếng Đức, ÖSD, TestAS, chọn ngành–trường và chuẩn bị hồ sơ theo thứ tự nào. Rào cản lớn nhất là thời gian học tiếng Đức, B2, phỏng vấn và Aufnahmetest.", share: "30%", difficulty: "Cao", role: "Đây là pipeline dài hạn phù hợp với hệ sinh thái đào tạo tiếng Đức, ÖSD và năng lực đồng hành từ trước khi tốt nghiệp. Lead Magnet phù hợp gồm timeline chuẩn bị, học bổng, Studienkolleg và checklist theo lớp." },
  { name: "2. SV mới tốt nghiệp / Người đi làm – Nâng tầm sự nghiệp", needs: "Sinh viên năm cuối, cử nhân mới tốt nghiệp và người đi làm muốn học Master để nâng năng lực, mở rộng cơ hội nghề nghiệp hoặc tạo nền tảng cho kế hoạch dài hạn tại Đức. Họ cần được điều hướng giữa Master tiếng Anh và tiếng Đức thay vì bị bán một route cố định.", share: "35%", difficulty: "Cao", role: "Đây là nhóm có nhu cầu gần thời điểm ra quyết định. Lợi thế chốt Sale là Master Matching, audit hồ sơ, APS và tư vấn route Anh/Đức dựa trên GPA, ngành học, ngôn ngữ và mục tiêu đầu ra." },
  { name: "3. SV / Người đi làm chuyển hướng", needs: "Sinh viên muốn bỏ ngang, người có gap year, GPA thấp, hồ sơ không tuyến tính hoặc người đi làm muốn chuyển sang ngành khác nhưng vẫn tìm một lộ trình Đại học/Master có căn cứ. Đây là nhóm chuyển hướng học thuật, không mặc định là du học nghề.", share: "15%", difficulty: "Rất cao", role: "PNE có thể khác biệt bằng năng lực audit bằng cấp, tín chỉ, kinh nghiệm, giải trình APS và xây nhiều kịch bản khả thi. Cần tư vấn trung thực khi hồ sơ chưa đủ điều kiện." },
  { name: "4. Phụ huynh", needs: "Người ra quyết định cuối cùng hoặc trực tiếp chi trả. Nhu cầu cốt lõi là minh bạch tổng chi phí, tiến độ, tính chính thống, đầu mối chịu trách nhiệm, hỗ trợ tại Đức và cơ chế xử lý khi chính sách thay đổi.", share: "20%", difficulty: "Trung bình–cao", role: "Phụ huynh có thể giao thoa với ba nhóm người học nhưng phải được xem là một audience quyết định riêng vì tiêu chí tin tưởng, kênh tiếp cận và nỗi sợ khác biệt." },
] as const;

export const channels = [
  { segment: "THPT", awareness: "TikTok, Reels, Threads", consideration: "Facebook, YouTube", conversion: "Messenger / Workshop" },
  { segment: "Master", awareness: "LinkedIn, Facebook, Google", consideration: "YouTube, Webinar", conversion: "Profile Review" },
  { segment: "Hồ sơ chuyển hướng", awareness: "Search, Groups", consideration: "Case Study", conversion: "1:1 Case Review" },
  { segment: "Phụ huynh", awareness: "Facebook, Google", consideration: "Article, Workshop", conversion: "Tư vấn phụ huynh + học viên" },
] as const;

export const taglines = [
  { approach: "Brand Tagline", text: "Nơi năng lực và lộ trình du học Đức được xây dựng song hành." },
  { approach: "Communication Tagline", text: "Không chọn lộ trình trước khi hiểu hồ sơ." },
  { approach: "Emotional Tagline", text: "Du học Đức bắt đầu từ một lựa chọn có cơ sở." },
] as const;

export const usps = [
  ["Học – Thi – Tư vấn khép kín", "Kết nối hành trình"],
  ["Hội đồng thi ÖSD", "Bằng chứng học thuật"],
  ["Minh bạch tài chính", "Xây trust"],
  ["Đồng hành A–Z", "Trải nghiệm dịch vụ"],
  ["Hệ sinh thái học tiếng Đức", "Năng lực EdTech"],
  ["APS / TestAS / Matching", "Chuyên môn hồ sơ"],
  ["100+ đối tác Đức", "Network"],
  ["15+ năm kinh nghiệm", "Authority"],
  ["Chuẩn hóa đầu ra tiếng Đức", "Quality"],
] as const;

export const fanpageReview = [
  { number: "01", label: "NHẬN DIỆN", title: "Có nhận diện, cần rõ định vị", summary: "Nhận diện nhất quán; nền tảng uy tín rõ; định vị chưa nổi bật.", points: ["Nhận diện nhất quán: Logo, màu sắc và visual duy trì tương đối đồng bộ.", "Nền tảng uy tín rõ: Kinh nghiệm, ÖSD và hoạt động thực tế tạo cơ sở xây Trust.", "Định vị chưa nổi bật: First view chưa cho thấy đủ nhanh PNE khác biệt thế nào trong Du học Đức."] },
  { number: "02", label: "CONTENT", title: "Có nguồn lực, cần tăng chiều sâu", summary: "Nguồn nội dung tốt; Proof thực tế phong phú; chuyên môn chưa được khai thác đủ.", points: ["Nguồn nội dung tốt: Sở hữu chuyên môn về lộ trình, tiếng Đức, ÖSD, hồ sơ và đời sống tại Đức.", "Proof thực tế phong phú: Lớp học, kỳ thi, tiễn bay và PNE-er giúp tăng tính xác thực.", "Chuyên môn chưa được khai thác đủ: Nội dung campaign/dịch vụ còn nổi bật hơn các nội dung giải đáp Insight và chứng minh năng lực."] },
  { number: "03", label: "LEAD & CHUYỂN ĐỔI", title: "Có Lead, cần nâng chất lượng", summary: "Điểm chuyển đổi sẵn có; CTA còn thiên về chốt trực tiếp; thiếu bước nuôi dưỡng Lead.", points: ["Điểm chuyển đổi sẵn có: Messenger, website và Contact hỗ trợ tốt nhóm đã có nhu cầu.", "CTA còn thiên về chốt trực tiếp: “Inbox/Đăng ký/Tư vấn” chưa phù hợp với nhiều mức độ sẵn sàng.", "Thiếu bước nuôi dưỡng Lead: Lead Magnet và CTA theo TOFU–MOFU–BOFU chưa đủ rõ để sàng lọc nhu cầu trước tư vấn."] },
] as const;

export const improvementCards = [
  { number: "01", label: "CONTENT TỪ INSIGHT", title: "Đưa đúng vấn đề lên ngay từ Hook", summary: "Bắt đầu từ Pain Point khách hàng đang quan tâm; một bài chỉ giải quyết một vấn đề.", points: ["Hook theo Pain Point: APS, TestAS, Studienkolleg, Sperrkonto, chọn ngành/trường... xuất hiện ngay 1–3 dòng đầu khi phù hợp với chủ đề.", "Một bài – một vấn đề: Không mở rộng quá nhiều thông tin khiến thông điệp chính bị loãng.", "Tăng tính ứng dụng: Ưu tiên Checklist, Comparison, FAQ, Myth/Fact và hướng dẫn theo từng tình huống."], goal: "Chuyển từ “PNE muốn truyền thông gì?” sang “Khách hàng đang cần giải quyết điều gì?”" },
  { number: "02", label: "LEAD MAGNET & CTA", title: "Từ kêu gọi Inbox → Trao đổi giá trị", summary: "CTA có giá trị cụ thể; Lead Magnet theo nhu cầu; thêm bước Assessment trước tư vấn.", points: ["CTA có giá trị cụ thể: Nêu rõ người dùng nhận được gì thay vì chỉ “Inbox để được tư vấn”.", "Lead Magnet theo nhu cầu: Checklist hồ sơ, Timeline, Roadmap, Workshop, tài liệu APS/TestAS...", "Thêm bước Assessment: Thu thập bậc học, ngành nền, ngôn ngữ và kỳ dự kiến trước tư vấn."], goal: "Không chỉ tăng lượng Inbox, mà tăng mức độ sẵn sàng và chất lượng Lead." },
  { number: "03", label: "MOBILE-FIRST", title: "Thiết kế để hiểu nhanh trên mobile", summary: "Visual tinh gọn; Caption dễ quét; một nội dung – một mục tiêu.", points: ["Visual tinh gọn: Giảm chữ, tăng hierarchy, giữ một thông điệp chính trên mỗi creative.", "Caption dễ quét: Hook ngắn → nội dung phân lớp → CTA rõ.", "Một nội dung – một mục tiêu: Không đồng thời Educate, Branding và Sales trong cùng một bài nếu không cần thiết."], goal: "Giúp người dùng nhận thông điệp nhanh, đọc tiếp dễ và biết hành động tiếp theo." },
  { number: "04", label: "TRUST SYSTEM", title: "Biến độ tin cậy thành một hệ thống", summary: "Bio, Cover, Featured và Highlights giúp người mới nhanh chóng kiểm chứng năng lực PNE.", points: ["Bio: nói năng lực cụ thể thay vì claim chung.", "Cover: cân bằng Brand Positioning với campaign đang chạy.", "Featured: ưu tiên thông tin có tính thời điểm và chuyển đổi.", "Highlights: tổ chức thành thư viện nội dung dài hạn để người mới nhanh chóng kiểm chứng năng lực PNE."], goal: "Các điểm chạm đầu Page phải giúp người dùng nhanh chóng hiểu PNE là ai – có năng lực gì – có phù hợp với nhu cầu của mình không." },
] as const;

export const highlightsLibrary = [
  ["Lộ trình Du học", "Dự bị · Cử nhân · Thạc sĩ · Tiến sĩ · ngành/trường · timeline", "Định hướng: Tôi có thể đi theo hướng nào?"],
  ["Giải đáp Du học", "APS · TestAS · Uni-Assist · tài chính · visa · FAQ", "Chuyên môn: Những vấn đề quan trọng cần hiểu là gì?"],
  ["Học & Thi tiếng Đức", "Lộ trình tiếng · lớp học · PNE Hub · ÖSD · chuẩn đầu ra", "Năng lực: PNE chuẩn bị tiếng Đức và chứng chỉ thế nào?"],
  ["Nhật ký Tiễn bay", "Học viên · điểm đến · khoảnh khắc lên đường · chia sẻ", "Kết quả: Những hành trình nào đã thực sự đến Đức?"],
  ["PNE-er tại Đức", "Học tập · campus · cuộc sống · thích nghi · Alumni", "Trải nghiệm: Sau khi đến Đức, hành trình tiếp tục ra sao?"],
] as const;

export const pillars = [
  ["Hiểu Đúng Du học Đức", 20, "TOFU"],
  ["Hồ Sơ Chuẩn – Visa Chắc", 20, "MOFU"],
  ["Du học Đức cùng PNE", 20, "TOFU/MOFU"],
  ["Học Bổng & Tài Chính", 15, "MOFU"],
  ["PNE-er & Hành Trình Du học Đức", 10, "BOFU"],
  ["Du học Đức 360°", 15, "TOFU/Engagement"],
] as const;

export const leadMagnets = [
  ["HỌC SINH THPT", "Quiz + Roadmap", "“Sau THPT, bạn phù hợp lộ trình Du học Đức nào?”", "Roadmap Dự bị/Đại học theo kết quả"],
  ["MASTER / NGƯỜI ĐI LÀM", "Checklist", "“Hồ sơ của bạn đã sẵn sàng cho Master Đức?”", "Kiểm tra 5 nhóm điều kiện quan trọng"],
  ["CHUYỂN HƯỚNG", "Profile Assessment", "“Hồ sơ hiện tại có thể chuyển sang hướng học nào tại Đức?”", "Đánh giá sơ bộ khả năng matching"],
  ["PHỤ HUYNH", "Bảng dự toán", "“Du học Đức cần chuẩn bị tài chính thế nào?”", "Breakdown chi phí theo từng giai đoạn"],
] as const;

export const contentAngles = [
  ["Pillar 1 — Hiểu Đúng Du học Đức (20%)", "1. Lộ trình Du học Đức", "timeline từ THPT đến Đại học/Master", "Muốn học Đại học Đức cần đi qua những bước nào?"],
  ["Pillar 1 — Hiểu Đúng Du học Đức (20%)", "2. Chọn trường & chọn ngành", "comparison và tư vấn định hướng", "TU hay FH: chọn theo ranking hay cơ hội việc làm?"],
  ["Pillar 1 — Hiểu Đúng Du học Đức (20%)", "3. Hiểu đúng hệ thống giáo dục Đức", "Myth vs Fact, infographic", "Đại học Đức có thật sự miễn học phí? 4 khoản vẫn cần chuẩn bị."],
  ["Pillar 1 — Hiểu Đúng Du học Đức (20%)", "4. Cơ hội nghề nghiệp sau tốt nghiệp", "phân tích thị trường lao động", "Sau tốt nghiệp, ngành nào cần kiểm tra nhu cầu nhân lực trước khi chọn?"],
  ["Pillar 2 — Hồ Sơ Chuẩn – Visa Chắc (20%)", "5. Checklist hồ sơ", "checklist từng bước", "APS, Uni-Assist, Visa: 3 nhóm giấy tờ cần lập danh sách từ sớm."],
  ["Pillar 2 — Hồ Sơ Chuẩn – Visa Chắc (20%)", "6. Timeline Du học Đức", "timeline theo tháng", "Kỳ nhập học mùa đông: nên bắt đầu chuẩn bị từ tháng nào?"],
  ["Pillar 2 — Hồ Sơ Chuẩn – Visa Chắc (20%)", "7. Lỗi thường gặp", "case study", "03 lỗi khiến hồ sơ bị chậm dù đã chuẩn bị đủ giấy tờ."],
  ["Pillar 2 — Hồ Sơ Chuẩn – Visa Chắc (20%)", "8. Hỏi đáp hồ sơ", "FAQ/Q&A", "TestAS có bắt buộc cho mọi lộ trình không? Những điều kiện nào cần kiểm tra?"],
  ["Pillar 3 — Du học Đức cùng PNE (20%)", "9. Dịch vụ toàn diện", "quy trình đồng hành", "Từ lớp học tiếng Đức đến bước đánh giá hồ sơ: PNE đồng hành theo những mốc nào?"],
  ["Pillar 3 — Du học Đức cùng PNE (20%)", "10. Học tiếng Đức", "lộ trình người mới bắt đầu", "Bắt đầu tiếng Đức từ số 0: 4 mốc năng lực cần theo dõi."],
  ["Pillar 3 — Du học Đức cùng PNE (20%)", "11. ÖSD & chứng chỉ tiếng Đức", "education kết hợp service proof", "Thi ÖSD tại đâu và cần chuẩn bị gì trước ngày thi?"],
  ["Pillar 3 — Du học Đức cùng PNE (20%)", "12. Realtime", "workshop, lớp học, hoạt động cộng đồng", "Buổi hội thảo giải đáp lộ trình Du học Đức diễn ra như thế nào?"],
  ["Pillar 4 — Học Bổng & Tài Chính (15%)", "13. Chi phí Du học Đức", "breakdown", "Ngoài học phí, gia đình cần lập bảng dự toán những khoản nào?"],
  ["Pillar 4 — Học Bổng & Tài Chính (15%)", "14. Học bổng", "cập nhật điều kiện và cách ứng tuyển", "Đọc điều kiện học bổng: 5 dòng cần kiểm tra trước khi nộp."],
  ["Pillar 4 — Học Bổng & Tài Chính (15%)", "15. ROI Du học Đức", "phân tích đầu tư", "Đánh giá một lộ trình Du học Đức bằng chi phí, năng lực và cơ hội — không chỉ bằng học phí."],
  ["Pillar 4 — Học Bổng & Tài Chính (15%)", "16. Góc nhìn phụ huynh", "tư vấn và giải tỏa lo lắng", "5 câu hỏi phụ huynh nên đặt ra trước khi chọn lộ trình cho con."],
  ["Pillar 5 — PNE-er & Hành trình Du học Đức (10%)", "17. Nhật ký PNE-er", "storytelling có consent", "Ngày đầu tiên của một PNE-er tại Đức: 3 điều khác với tưởng tượng."],
  ["Pillar 5 — PNE-er & Hành trình Du học Đức (10%)", "18. Case Study thành công", "Before–After có dữ liệu xác minh", "Từ lúc xác định mục tiêu đến lúc nhận thư mời: hồ sơ đã đi qua những mốc nào?"],
  ["Pillar 5 — PNE-er & Hành trình Du học Đức (10%)", "19. Alumni Story", "phỏng vấn cựu học viên", "Sau 3 năm tại Đức, một cựu học viên nhìn lại lựa chọn ngành học ra sao?"],
  ["Pillar 6 — Du học Đức 360° (15%)", "20. Myth vs Fact", "đính chính hiểu lầm", "Đúng hay Sai: có chứng chỉ tiếng Đức là đủ để hoàn tất mọi điều kiện?"],
  ["Pillar 6 — Du học Đức 360° (15%)", "21. POV & tình huống", "Reel ngắn, relatable", "POV: Bạn nhận email yêu cầu bổ sung hồ sơ và cần xác định bước tiếp theo."],
  ["Pillar 6 — Du học Đức 360° (15%)", "22. Fun Fact về Đức", "edutainment", "Bạn có biết một ngày học ở Đức khác ngày học tại Việt Nam ở điểm nào?"],
  ["Pillar 6 — Du học Đức 360° (15%)", "23. Tiếng Đức ứng dụng", "sách vs đời thực, slang và phản xạ giao tiếp", "05 câu cửa miệng người Đức dùng mỗi ngày mà giáo trình thường giải thích chưa đủ."],
] as const;

export const calendar = [
  ["Thứ 2", "Authority & Education", "TOFU", "19:30–21:00", "Myth vs Fact, giải mã lộ trình, thuật ngữ"],
  ["Thứ 4", "Consideration & Trust", "MOFU", "19:30–21:00", "Checklist, case xử lý hồ sơ, chi phí"],
  ["Thứ 6", "Social Proof & Engagement", "BOFU + Engagement", "11:30–13:00 hoặc 19:30–21:00", "PNE-er, workshop, Reel tình huống"],
] as const;

export const miniStandards = [
  ["01", "HOOK TRONG 3 GIÂY", "Đưa vấn đề hoặc giá trị chính vào 1–3 dòng đầu."],
  ["02", "MỘT BÀI – MỘT TRỌNG TÂM", "Không gom quá nhiều mục tiêu trong cùng một caption."],
  ["03", "VIẾT TỪ INSIGHT", "Bắt đầu từ điều khách hàng cần hiểu, không bắt đầu từ điều PNE muốn bán."],
  ["04", "PROOF TRƯỚC CLAIM", "Ưu tiên dữ liệu, quy trình, chuyên môn và bằng chứng có thể kiểm chứng."],
  ["05", "CTA CÓ GIÁ TRỊ", "Nói rõ người đọc nhận được gì khi thực hiện hành động."],
  ["06", "ƯU TIÊN MOBILE", "Caption dễ quét, visual ít chữ, thông điệp chính nhìn thấy ngay."],
] as const;

export const captionStandards = [
  ["Hook", "Giữ sự chú ý", "1–3 dòng đầu phải xuất hiện vấn đề, câu hỏi hoặc giá trị đáng đọc"],
  ["Body", "Giải quyết vấn đề", "Đi đúng một logic; chia đoạn ngắn; bullet đồng cấu trúc"],
  ["CTA", "Tạo bước tiếp theo", "Một CTA chính; giá trị nhận được phải rõ"],
  ["Hashtag", "Phân loại nội dung", "Tối đa 3 hashtag"],
  ["Footer", "Nhận diện thương hiệu", "Bắt buộc với Branding; có thể lược ở Engagement"],
] as const;

export const hookPrinciples = [
  ["01 — CỤ THỂ", "APS, TestAS, GPA, Studienkolleg... tốt hơn “những điều cần biết”."],
  ["02 — ĐÚNG INSIGHT", "Chạm đúng câu hỏi khách hàng đang cân nhắc."],
  ["03 — VÀO THẲNG VẤN ĐỀ", "Không dành 2–3 câu để dẫn nhập."],
  ["04 — CÓ INFORMATION GAP", "Cho người đọc lý do để đọc tiếp nhưng không dùng clickbait."],
  ["05 — KHỚP NỘI DUNG", "Hook hứa điều gì, phần Body phải giải quyết đúng điều đó."],
] as const;

export const hookLibrary = [
  ["Hiểu Đúng Du học Đức", ["“Ranking cao hay cơ hội việc làm tốt? Khi chọn trường Đức, hai tiêu chí này không phải lúc nào cũng dẫn đến cùng một lựa chọn.”", "“TU hay FH? Đừng hỏi trường nào tốt hơn trước khi biết mình cần kiểu đào tạo nào.”", "“DU HỌC SINH ĐỨC LƯU Ý: 05 thay đổi từ tháng 8/2026 ảnh hưởng trực tiếp đến ví tiền, việc làm thêm và cuộc sống hằng ngày của bạn!”"]],
  ["Hồ Sơ Chuẩn – Visa Chắc", ["“Một bộ hồ sơ đầy đủ chưa chắc là một bộ hồ sơ đúng thứ tự.”", "“APS không phải bước nên bắt đầu tìm hiểu khi bạn đã chọn xong trường và chuẩn bị nộp hồ sơ.”", "“Deadline nộp trường không phải deadline đầu tiên của hồ sơ Đức.”"]],
  ["Du học Đức cùng PNE", ["“Một lộ trình khép kín giúp bạn tránh được rủi ro như thế nào?”", "“Năng lực ngôn ngữ cần được chuẩn bị và kiểm chứng trước khi trở thành một phần của hồ sơ Du học Đức.”"]],
  ["Học Bổng & Tài Chính", ["“Sperrkonto chưa phải toàn bộ ngân sách gia đình cần tính cho năm đầu Du học Đức.”", "“Miễn học phí không đồng nghĩa với không cần chuẩn bị tài chính.”", "“Trước khi hỏi “Du học Đức hết bao nhiêu?”, phụ huynh nên biết khoản nào cần chuẩn bị một lần và khoản nào sẽ tiếp tục phát sinh tại Đức”"]],
  ["PNE-er & Hành trình", ["“Ngày đầu ở Đức có thể khác với hình dung của bạn ở điểm nào?”", "“Hồ sơ này không bắt đầu từ một profile hoàn hảo.”", "“POV: Ngày đầu bước vào campus tại Đức”"]],
  ["Du học Đức 360°", ["“Bạn đã học tiếng Đức khá lâu nhưng ngày đầu đến Đức vẫn mất vài giây để hiểu một câu rất đời thường.”", "“Vì mình là du học sinh Đức mà…”", "“04 sự thật thú vị về nước Đức không phải ai cũng biết”"]],
] as const;

export const contentDoDont = [
  ["Mỗi bài giải quyết một vấn đề trung tâm", "Gom nhiều chủ đề chỉ vì đều liên quan Du học Đức"],
  ["Mỗi đoạn mang một ý chính", "Viết paragraph dài khó quét trên mobile"],
  ["Dùng heading/bullet khi có từ 3 ý trở lên", "Liệt kê một chuỗi thông tin không có hierarchy"],
  ["USP phải trả lời trực tiếp Insight vừa đặt ra", "Chèn danh sách USP chung vào mọi bài"],
  ["Các bullet phải đồng cấu trúc và tương đương độ sâu", "Bullet đầu giải thích sâu, bullet sau chỉ là keyword"],
  ["Dùng số liệu khi có nguồn và thời điểm rõ", "Dùng con số để tạo Authority nhưng không kiểm chứng"],
  ["Phân biệt rõ Fact – nhận định – khuyến nghị", "Viết nhận định như một quy định tuyệt đối"],
] as const;

export const ctaJourney = [
  ["TOFU", "“Thông tin này có ích.”", "Lưu · Theo dõi · Chia sẻ khi phù hợp", "Lưu Timeline để đối chiếu khi bắt đầu chuẩn bị hồ sơ."],
  ["MOFU", "“Tôi cần tìm hiểu kỹ hơn.”", "Lead Magnet · Workshop · Checklist", "Nhận Checklist APS & TestAS để kiểm tra các đầu việc cần chuẩn bị."],
  ["BOFU", "“Tôi cần biết trường hợp của mình.”", "Assessment · Tư vấn 1:1", "Gửi bậc học + ngành nền + kỳ dự kiến để PNE đánh giá hướng cần tìm hiểu cho hồ sơ."],
] as const;

export const ctaLibrary = [
  ["Hiểu Đúng Du học Đức", "“Nhận Roadmap xác định lộ trình”; “Lưu bài để kiểm tra từng mốc”"],
  ["Hồ Sơ Chuẩn – Visa Chắc", "“Tải Checklist APS–Visa”; “Đăng ký đánh giá hồ sơ theo lộ trình phù hợp”"],
  ["Du học Đức cùng PNE", "“Xem các bước đồng hành”; “Đăng ký buổi tư vấn 1-1”"],
  ["Học Bổng & Tài Chính", "“Nhận Budget Sheet”; “Xem điều kiện học bổng của chương trình phù hợp”"],
  ["PNE-er & Hành trình", "“Xem thêm hành trình”; “Đăng ký tham dự workshop”"],
  ["Du học Đức 360°", "“Lưu lại để dùng khi cần”; “Xem glossary và ví dụ giao tiếp”"],
] as const;

export const standardsDoDont = [
  {
    title: "A. Quy chuẩn thương hiệu",
    rows: [
      ["Cách gọi thương hiệu", "Phuong Nam Education, Trung tâm Phương Nam, team PNE hoặc PNE, dùng nhất quán", "Tự đổi thành “chúng tôi”, “chúng mình”, “Phương Nam” tùy tiện"],
      ["Xưng hô học sinh/sinh viên", "bạn, các bạn, học sinh, sinh viên theo ngữ cảnh", "“mấy bạn”, “chiến binh”, “Gen Z” trong nội dung chính thức"],
      ["Xưng hô phụ huynh", "Quý phụ huynh, Phụ huynh, Ba mẹ khi phù hợp", "Cách gọi khẩu ngữ thiếu chuyên nghiệp"],
      ["Vai trò PNE", "Đào tạo ngôn ngữ, thi chứng chỉ, tư vấn và hỗ trợ hồ sơ, xây lộ trình cá nhân hóa", "Tự định vị là đơn vị cam kết đậu, bảo đảm Visa hoặc quyết định thay khách hàng"],
      ["Tên chương trình", "Du học Đức, Du học Đức hệ Dự bị/Đại học, Du học Thạc sĩ tại Đức", "Du học nghề Đức, đi Đức, xuất ngoại nếu làm loãng định vị học thuật"],
    ],
  },
  {
    title: "B. Quy chuẩn nội dung",
    rows: [
      ["Điều kiện tham gia", "Nêu rõ học lực, ngôn ngữ, hồ sơ và điều kiện từng trường", "Làm nhẹ điều kiện để tạo cảm giác ai cũng phù hợp"],
      ["Hồ sơ & Visa", "Hướng dẫn, đánh giá, hỗ trợ xử lý hồ sơ; thông tin phải có thời điểm và phạm vi", "“Bao đậu”, “đậu 100%”, “cam kết đậu Visa”"],
      ["Ngôn ngữ", "Nhấn mạnh lộ trình bài bản, lớp học, luyện thi ÖSD, tiếng Đức thực chiến", "“Học vài tháng là đủ”, “không cần giỏi tiếng Đức”"],
      ["Chi phí", "Minh bạch học phí, kế hoạch tài chính và khoản có thể phát sinh", "“Miễn phí hoàn toàn”, “đi Đức chỉ với vài chục triệu”"],
      ["Minh bạch", "Nêu đối tượng phù hợp/chưa phù hợp, thời gian, yêu cầu và rủi ro", "Chỉ nói quyền lợi mà bỏ qua điều kiện và điểm cần cân nhắc"],
      ["Cam kết kết quả", "“Được tư vấn”, “được hỗ trợ”, “được đánh giá”, “được định hướng”", "Cam kết Visa, xuất cảnh, định cư, việc làm khi chưa có cơ sở"],
      ["Cơ hội nghề nghiệp", "Dùng báo cáo, thống kê và nguồn chính thống", "“100% có việc”, “lương cao ngay”, “định cư dễ dàng”"],
    ],
  },
  {
    title: "C. Quy chuẩn truyền thông",
    rows: [
      ["Văn phong", "Sắc bén – Thấu cảm – Minh bạch; giải thích điều kiện và rủi ro", "Thô tục, gây hoang mang, phóng đại lợi ích"],
      ["Từ ngữ nhạy cảm / Policy", "Trung lập, khách quan, có nguồn và bối cảnh", "“Nhất”, “hàng đầu”, “vượt trội”, “đảm bảo”, “không cần điều kiện” nếu không chứng minh được"],
      ["Hình ảnh", "Ảnh thật PNE, lớp học, giáo viên, đối tác và ảnh có quyền sử dụng", "Dùng AI/stock làm người, đối tác hoặc lớp học gây hiểu nhầm"],
      ["CTA / Lead Magnet", "Một CTA hoặc một Lead Magnet rõ giá trị", "“Inbox ngay”, “Đăng ký ngay”, “Chấm .” không nói rõ lợi ích"],
      ["Caption", "Education-first, một vấn đề, dễ quét trên mobile", "Đưa mọi điều kiện, học phí, quyền lợi và CTA vào một bài dài"],
    ],
  },
  {
    title: "D. Quy chuẩn triển khai",
    rows: [
      ["Visual", "Một thông điệp chính + một điểm nhấn + một CTA nhỏ; mobile-first", "Nhồi bullet, icon, thông tin khiến visual giống brochure"],
      ["Reels / Video", "30–60 giây, Hook mạnh, một Pain Point, FAQ/Myth vs Fact/Checklist", "Video dài, mở đầu chậm, nhiều chữ hoặc chỉ giới thiệu dịch vụ"],
      ["Funnel", "Gắn bài với TOFU/MOFU/BOFU và bước tiếp theo", "Đưa mọi Lead thẳng vào Inbox, thiếu nuôi dưỡng"],
      ["Kiểm duyệt", "Kiểm tra Policy, Brand Lexicon, nguồn và quyền sử dụng ảnh trước khi đăng", "Đăng khi chưa kiểm tra claim, logo, ảnh và CTA"],
    ],
  },
] as const;

export const lexicon = [
  ["Bao đỗ / Cam kết đậu", "Hỗ trợ xử lý và hoàn thiện hồ sơ Du học"],
  ["100% đậu Visa", "Chưa có trường hợp rớt Visa tính đến thời điểm hiện tại (chỉ dùng khi có phê duyệt và bối cảnh rõ)"],
  ["Cam kết có trường", "Tư vấn trường/ngành phù hợp với nhu cầu và điều kiện"],
  ["Chắc chắn đi Đức", "Đủ điều kiện để nộp hồ sơ theo lộ trình phù hợp"],
  ["0 đồng / Miễn phí hoàn toàn", "Chính sách miễn/giảm theo chương trình hoặc học bổng"],
  ["GPA thấp vẫn đi được", "GPA được đánh giá cùng nhiều tiêu chí khác"],
  ["Đi nhanh, đi dễ", "Cá nhân hóa lộ trình theo từng đối tượng"],
  ["Không cần tiếng Đức", "Chương trình tiếng Đức hoặc tiếng Anh nếu đáp ứng đủ điều kiện"],
  ["Việc nhẹ lương cao", "Cơ hội nghề nghiệp rộng mở"],
  ["Đổi đời", "Mở rộng cơ hội học tập và phát triển nghề nghiệp"],
  ["Chỉ cần Inbox", "Nhận Checklist / Roadmap / đăng ký tư vấn 1-1"],
  ["Đảm bảo định cư", "Cơ hội định cư sau 2–5 năm sống và làm việc tại Đức, khi đáp ứng điều kiện pháp lý"],
] as const;

export const checklist = [
  ["CONTENT", "Hook đã đưa vấn đề/giá trị chính vào 1–3 dòng đầu?"],
  ["CONTENT", "Bài chỉ có một trọng tâm chính?"],
  ["CONTENT", "Nội dung giải quyết đúng Insight đã đặt ra?"],
  ["CONTENT", "Các bullet/list đồng bộ về cấu trúc và độ sâu?"],
  ["ACCURACY & BRAND", "Số liệu, quy định, deadline đã được kiểm chứng?"],
  ["ACCURACY & BRAND", "Claim quan trọng có Proof hoặc cơ sở phù hợp?"],
  ["ACCURACY & BRAND", "Không sử dụng từ/cách diễn đạt thuộc Brand Lexicon hạn chế?"],
  ["CONVERSION & UX", "CTA phù hợp TOFU/MOFU/BOFU và nói rõ giá trị?"],
  ["CONVERSION & UX", "Caption và visual đọc tốt trên mobile?"],
  ["CONVERSION & UX", "Hashtag/Footer đúng quy chuẩn của loại bài?"],
] as const;

export const visualRules = [
  { title: "Nền tảng thương hiệu (Brand Foundation)", subtitle: "Triết lý Visual (Brand Principles)", do: ["Thiết kế để truyền tải sự tin cậy, không chỉ để bắt mắt.", "Ưu tiên rõ ràng và dễ tiếp nhận hơn là nhiều hiệu ứng.", "Mọi yếu tố đồ họa đều phải phục vụ thông điệp.", "Giữ cảm giác hiện đại, chuyên nghiệp, trẻ trung và tích cực.", "Tạo sự đồng nhất để người xem nhận ra thương hiệu ngay cả khi chưa nhìn thấy logo."], dont: ["Chạy theo xu hướng thiết kế nếu làm mất bản sắc thương hiệu.", "Hy sinh khả năng đọc để đổi lấy hiệu ứng thị giác.", "Sử dụng các yếu tố tạo cảm giác nặng nề, u tối hoặc giật gân.", "Biến mỗi bài đăng thành một phong cách hoàn toàn mới."] },
  { title: "Nhận diện theo quốc gia (Regional Identity)", subtitle: "", do: ["Đức → Đỏ + Trắng + Xám + Vàng."], dont: ["Phối sai màu quốc gia.", "Dùng quá nhiều quốc kỳ.", "Dùng icon văn hóa rập khuôn."] },
  { title: "Hệ thống nền tảng thiết kế (Core Design System)", subtitle: "Màu sắc (Color System)", do: ["Dùng nền trắng, xám nhạt (#F1F1F1) hoặc gradient hồng nhạt → trắng để tạo sự thoáng.", "Chỉ dùng màu nhấn (vàng) để đại diện cho nước Đức (văn hoá/ngôn ngữ...).", "Khi cần nhiều cấp độ đỏ, tạo tint từ #D12026 ở các mức 20% / 40% / 60% / 80%.", "Đảm bảo tỷ lệ khoảng 60% trắng/xám – 30% đỏ – 10% màu nhấn.", "Headline tối đa 2 dòng."], dont: ["Tự ý đổi sang đỏ cam, đỏ tươi hoặc đỏ đô quá đậm.", "Sử dụng nền đỏ full màn hình cho toàn bộ post.", "Phối trên 3 màu nhấn trong cùng một thiết kế.", "Sử dụng các tone hồng hoặc đỏ không cùng hệ màu thương hiệu.", "Để màu đỏ chiếm gần như toàn bộ layout gây cảm giác nặng và “creepy”."] },
  { title: "Typography", subtitle: "", do: ["Chỉ nhấn mạnh từ khóa quan trọng bằng Bold hoặc màu đỏ.", "Giãn dòng thoáng, dễ đọc trên mobile (line-height tối thiểu 1.2).", "Có hierarchy rõ ràng: Heading > Subheading > Body (gợi ý tỷ lệ cỡ chữ 3 : 1.5 : 1).", "Dùng font hiện đại thống nhất (tối đa 1 font family, 2 độ đậm).", "Ưu tiên background sáng, sạch, nhiều khoảng thở."], dont: ["Viết headline dài 4–5 dòng.", "Tô nhiều màu trong cùng một headline.", "Ép chữ sát nhau hoặc tracking quá chặt.", "Để mọi text cùng kích thước.", "Sử dụng trên 3 font trong một thiết kế."] },
  { title: "Background", subtitle: "", do: ["Dùng gradient nhẹ hồng → trắng (#FFD7D8 → #FFFFFF), lấy từ hệ Gradient System chung.", "Background chỉ đóng vai trò hỗ trợ nội dung.", "Dùng silhouette landmark với opacity thấp (10–15%).", "Đảm bảo độ tương phản chữ/nền tối thiểu 4.5:1 cho text quan trọng."], dont: ["Dùng background quá tối hoặc nhiều texture.", "Dùng gradient vàng làm nền chính.", "Để background nổi bật hơn headline.", "Đặt landmark quá đậm làm rối hình."] },
  { title: "Khả năng tiếp cận (Accessibility)", subtitle: "", do: ["Chừa khoảng trắng an toàn (clear space) quanh logo tối thiểu bằng 1 lần chiều cao icon cánh hoa."], dont: ["Dùng chữ trắng hoặc chữ nhạt màu trên nền vàng #FFCC00 — tương phản thấp, khó đọc.", "Dùng chữ đỏ trên nền đỏ (dù khác sắc độ) cho các dòng quan trọng."] },
  { title: "Thành phần đồ họa & Tài nguyên (Visual Assets & Elements)", subtitle: "Logo", do: ["Giữ kích thước logo tối thiểu đảm bảo rõ nét trên mobile (chiều cao ≥24px trên feed).", "Vị trí logo luôn phải đặt ở góc trên ảnh, ưu tiên đặt ở giữa ảnh.", "Dùng shape đơn giản, bo góc nhẹ."], dont: ["Đặt logo đè lên ảnh nền phức tạp hoặc sát mép khung hình.", "Thu nhỏ logo tới mức mất chi tiết cánh hoa.", "Để icon/chữ khác che khuất một phần logo."] },
  { title: "Element đồ họa (Graphic Elements)", subtitle: "", do: ["Icon đồng bộ cùng style.", "Landmark chỉ là điểm nhấn.", "Element hỗ trợ dẫn mắt về CTA/headline.", "Sử dụng ảnh thật hoặc AI có chất lượng cao."], dont: ["Dùng shape 3D nặng.", "Trộn icon line và icon 3D.", "Biến landmark thành nhân vật chính.", "Thêm element chỉ để “cho đẹp”."] },
  { title: "Nhân vật / Hình stock người (Characters / Stock Photography)", subtitle: "", do: ["Ưu tiên người châu Á gần gũi.", "Màu ảnh đồng bộ với brand, tương phản vừa phải.", "Ánh sáng tự nhiên.", "Shadow nhẹ để tạo chiều sâu (opacity ≤20%, blur nhỏ)."], dont: ["Dùng ảnh AI lỗi da hoặc méo tay.", "Dùng người mẫu mang cảm giác quá Tây nếu không cần thiết.", "Dùng ảnh quá bão hòa màu.", "Dùng filter HDR hoặc contrast quá mạnh."] },
  { title: "Hiệu ứng (Effects)", subtitle: "", do: ["Glow nhẹ quanh CTA hoặc headline.", "Chỉ dùng blur khi cần tách lớp (background và foreground).", "Mỗi layout chỉ nên có 1–2 điểm nhấn chính (số liệu, badge hoặc CTA)."], dont: ["Dùng shadow đen dày.", "Dùng lens flare hoặc light leak quá nhiều.", "Lạm dụng blur."] },
  { title: "Bố cục (Layout)", subtitle: "", do: ["Chừa khoảng trắng đủ để mắt nghỉ (tối thiểu ~10% diện tích canvas).", "Sử dụng lưới (Grid) để căn chỉnh.", "CTA luôn nằm ở vị trí dễ nhìn."], dont: ["Cố nhồi quá nhiều USP.", "Nhồi kín toàn bộ canvas.", "Đặt element lệch thiếu chủ đích."] },
  { title: "Ứng dụng thực tế (Practical Applications & Formats)", subtitle: "Thiết kế Carousel", do: ["Các slide dùng cùng hệ background.", "Màu chuyển tiếp tự nhiên.", "Typography thống nhất.", "Khoảng cách/lề giống nhau giữa các slide."], dont: ["Để CTA chìm trong background.", "Mỗi slide một phong cách khác nhau.", "Slide đầu tối, slide sau sáng.", "Font thay đổi giữa các slide."] },
  { title: "Quảng cáo (Ads)", subtitle: "", do: ["Headline tập trung một thông điệp.", "Tối đa 3 USP.", "CTA rõ ràng, 1 CTA / creative.", "Đọc hiểu trong 3 giây đầu."], dont: ["Liệt kê quá nhiều lợi ích.", "Đưa cả đoạn văn lên visual.", "Quá nhiều badge, icon hoặc sticker.", "Dùng màu đỏ quá nặng gây cảm giác cảnh báo."] },
] as const;

export const visualAssets = {
  overall: [
    ["0. Quy tắc chung", "/manus-storage/visual-00-quy-tac-chung_70f12d50.png"],
    ["01. Color Palette", "/manus-storage/visual-01-color-palette_d97819a7.png"],
    ["02. Gradient System", "/manus-storage/visual-02-gradient-system_f422a73b.png"],
    ["03. Visual Elements", "/manus-storage/visual-03-visual-elements_163cf7da.png"],
  ],
  demos: [
    "/manus-storage/post-demo-01_5462f198.png", "/manus-storage/post-demo-02_c7ceb083.png", "/manus-storage/post-demo-03_9720750a.png", "/manus-storage/post-demo-04_6f0f9c76.png", "/manus-storage/post-demo-05_e6a58fa7.png", "/manus-storage/post-demo-06_09236892.png", "/manus-storage/post-demo-07_b48a9c26.png", "/manus-storage/post-demo-08_583678fe.png", "/manus-storage/post-demo-09_892e4d59.png", "/manus-storage/post-demo-10_9ff1e823.png", "/manus-storage/post-demo-11_1afd0507.png", "/manus-storage/post-demo-12_ccc92d73.png",
  ],
} as const;
