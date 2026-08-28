/**
 * Design reminder — Biên tập chiến lược hiện đại: nền sáng, nhịp đọc theo chương,
 * Hero đỏ PNE đồng nhất; mọi khối giữ trọn đơn vị logic từ tài liệu nguồn.
 */
import { useState, type ReactNode } from "react";
import { ArrowRight, BookOpen, BriefcaseBusiness, Check, ChevronDown, Eye, FileText, Flag, GraduationCap, Headphones, Landmark, MapPin, Menu, Pencil, Plane, X } from "lucide-react";
import {
  calendar,
  captionStandards,
  channels,
  checklist,
  contentAngles,
  contentDoDont,
  ctaJourney,
  ctaLibrary,
  fanpageReview,
  hiddenInsights,
  highlightsLibrary,
  hookLibrary,
  hookPrinciples,
  improvementCards,
  leadMagnets,
  lexicon,
  marketContext,
  marketGaps,
  marketTrends,
  miniStandards,
  opponentAnalyses,
  opponentDetails,
  opponentSummaryCards,
  overviewCards,
  personas,
  pillars,
  positioningWin,
  segments,
  standardsDoDont,
  taglines,
  usps,
  visualAssets,
  visualRules,
  zmot,
} from "@/data/marketingHub";

type TabId = "overview" | "research" | "fanpage" | "standards" | "visual";

const navItems: { id: TabId; number: string; label: string }[] = [
  { id: "overview", number: "00", label: "Overview" },
  { id: "research", number: "01", label: "Nghiên cứu & Định vị" },
  { id: "fanpage", number: "02", label: "Review Fanpage & Content Plan" },
  { id: "standards", number: "03", label: "Quy chuẩn truyền thông" },
  { id: "visual", number: "04", label: "Visual Guideline" },
];

const assetUrl = (asset: string) => `${import.meta.env.BASE_URL}${asset}`;
const logoUrl = assetUrl("manus-storage/phuong-nam-education-logo-cropped_d6256f99.jpg");
const heroArtUrl = assetUrl("manus-storage/pne-abstract-hero_5e955ebd.png");

function HeroBanner() {
  return (
    <section className="hero-banner" aria-label="Kế hoạch truyền thông 2026">
      <img className="hero-art" src={heroArtUrl} alt="" aria-hidden="true" />
      <div className="hero-copy">
        <p>Marketing Hub · Phuong Nam Education</p>
        <h1 className="hero-title-nowrap">Kế hoạch truyền thông 2026</h1>
        <h2>Chương trình Du học Đức</h2>
      </div>
      <span className="hero-orbit hero-orbit-one" aria-hidden="true" />
      <span className="hero-orbit hero-orbit-two" aria-hidden="true" />
    </section>
  );
}

function PageSection({ label, title, className = "", children }: { label?: string; title: string; className?: string; children: ReactNode }) {
  return (
    <section className={`page-section ${className}`.trim()}>
      <div className="section-heading">
        {label && <span className="section-label">{label}</span>}
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <article className={`surface-card ${className}`}>{children}</article>;
}

function BasicTable({ headers, rows, className = "" }: { headers: string[]; rows: readonly (readonly string[])[]; className?: string }) {
  return (
    <div className={`table-wrap ${className}`}>
      <table>
        <thead>
          <tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={`${row[0]}-${index}`}>
              {row.map((cell, cellIndex) => <td key={`${cell}-${cellIndex}`}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TabOverview({ onOpenTab }: { onOpenTab: (tab: TabId) => void }) {
  const cardTargets: TabId[] = ["research", "fanpage", "standards", "visual"];
  return (
    <>
      <HeroBanner />
      <main className="page-shell overview-shell">
        <div className="overview-intro">
          <span className="section-label">Mục lục nội dung</span>
          <h2>Toàn bộ kế hoạch trong 4 phần</h2>
        </div>
        <div className="overview-grid">
          {overviewCards.map((card, index) => (
            <button key={card.number} className="overview-card" onClick={() => onOpenTab(cardTargets[index])}>
              <span className="number-badge">{card.number}</span>
              <span className="overview-card-body">
                <strong>{card.title}</strong>
                <span>{card.description}</span>
                <small>NỘI DUNG CHÍNH</small>
                <span className="overview-tags">{card.highlights.map((highlight) => <i key={highlight}>{highlight}</i>)}</span>
              </span>
              <ArrowRight aria-hidden="true" size={20} />
            </button>
          ))}
        </div>
      </main>
    </>
  );
}

function TabResearch() {
  return (
    <>
      <HeroBanner />
      <main className="page-shell">
        <PageSection label="01. NGHIÊN CỨU & ĐỊNH VỊ" title="PHÂN TÍCH THỊ TRƯỜNG">
          <h3 className="subsection-title">Xu hướng định hình ngành</h3>
          <div className="card-grid four-col">
            {marketTrends.map((trend, index) => (
              <Card key={trend.title} className="trend-card">
                <span className="tiny-index">0{index + 1}</span>
                <h3>{trend.title}</h3>
                <p className="field-label">Thay đổi trong hành vi khách hàng</p>
                <p>{trend.behavior}</p>
                <p className="field-label red-label">Cơ hội cho PNE</p>
                <p className="red-copy">{trend.opportunity}</p>
              </Card>
            ))}
          </div>

          <div className="market-context-grid">
            <Card>
              <h3>Cơ hội và thách thức</h3>
              <div className="two-list-grid">
                <div><p className="field-label">Cơ hội</p><ul>{marketContext.opportunities.map((item) => <li key={item}>{item}</li>)}</ul></div>
                <div><p className="field-label red-label">Thách thức</p><ul>{marketContext.challenges.map((item) => <li key={item}>{item}</li>)}</ul></div>
              </div>
            </Card>
            <Card className="highlight-card">
              <h3>Yếu tố thành công then chốt</h3>
              <ul>{marketContext.successFactors.map((item) => <li key={item}>{item}</li>)}</ul>
            </Card>
          </div>

          <h3 className="subsection-title">Cơ hội lớn cho PNE</h3>
          <div className="pne-opportunity-grid">
            {marketContext.pneOpportunities.map((item, index) => (
              <Card key={item} className="opportunity-stat">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </Card>
            ))}
          </div>
        </PageSection>

        <PageSection title="PHÂN TÍCH ĐỐI THỦ" className="competitor-section">
          <div className="competitor-summary-grid">{opponentSummaryCards.map((item) => <Card key={item.number} className="competitor-summary-card"><span className="competitor-number">{item.number}</span><h3>{item.name}</h3><p className="competitor-category">{item.category}</p><p className="competitor-summary">{item.summary}</p></Card>)}</div>

          <div className="competitor-accordion-list">{opponentDetails.slice(0, 4).map((opponent, index) => <details key={opponent.name} className="competitor-details" open={index === 0}><summary><span className="competitor-letter">{String.fromCharCode(65 + index)}</span><strong>{opponent.name}</strong><ChevronDown size={18} /></summary><div className="competitor-details-body"><div><dt>Keyword định vị</dt><dd>{opponent.keyword}</dd><dt>Định vị truyền thông</dt><dd>{opponent.positioning}</dd></div><div><dt>Kênh</dt><dd>{opponent.channel}</dd><dt>Điểm nổi bật</dt><dd>{opponent.standout}</dd></div><div><dt>Khoảng trống</dt><dd>{opponent.gap}</dd><dt>Cảnh báo</dt><dd>{opponentAnalyses[index].lines[opponentAnalyses[index].lines.length - 1].replace(/^Cảnh báo:\s*/, "")}</dd></div></div></details>)}</div>

          <h3 className="subsection-title">Khe hở & Cơ hội</h3>
          <div className="card-grid two-col">
            {marketGaps.map((item) => (
              <Card key={item.number} className="gap-card">
                <div><span className="number-badge">{item.number}</span><h3>{item.title}</h3></div>
                <p className="bridge-copy">{item.bridge}</p>
                <p className="field-label">Khoảng trống</p><p>{item.gap}</p>
                <p className="field-label">Lợi thế PNE</p><p>{item.advantage}</p>
                <p className="red-copy italic-copy">{item.message}</p>
              </Card>
            ))}
          </div>
        </PageSection>

        <PageSection title="PHÂN KHÚC KHÁCH HÀNG">
          <div id="pne-persona-section">
            <h3 className="subsection-title">Personas</h3>
            <div className="persona-grid">
              {personas.map((persona) => (
                <Card key={persona.name} className="persona-card">
                  <span className="persona-share">{persona.share}</span>
                  <div className="persona-heading"><h3>{persona.name}</h3><p className="persona-rep">{persona.representative}</p></div>
                  <div className="persona-slot persona-segment"><p className="field-label">PHÂN KHÚC ĐẠI DIỆN</p><p>{persona.segment}</p></div>
                  <div className="persona-slot persona-needs"><p className="field-label">NHU CẦU CỐT LÕI</p><p>{persona.needs}</p></div>
                  <div className="persona-info persona-goals-channels"><div><p className="field-label">MỤC TIÊU</p><ul>{persona.goal.map((x) => <li key={x}>{x}</li>)}</ul></div><div><p className="field-label">HÀNH VI &amp; KÊNH TIẾP CẬN</p><ul>{persona.lifestyle.map((x) => <li key={x}>{x}</li>)}</ul></div></div>
                  <div className="persona-info persona-fears-close"><div><p className="field-label">NỖI SỢ &amp; RÀO CẢN</p><ul>{persona.fears.map((x) => <li key={x}>{x}</li>)}</ul></div><div><p className="field-label">YẾU TỐ CHỐT SALE</p><ul>{persona.close.map((x) => <li key={x}>{x}</li>)}</ul></div></div>
                  <blockquote>{persona.insight}</blockquote>
                </Card>
              ))}
            </div>
          </div>

          <h3 className="subsection-title">Insight ẩn</h3>
          <div className="insight-list">
            {hiddenInsights.map((item) => (
              <blockquote className="insight-block" key={item.title}>
                <h3>{item.title}</h3>
                <div className="insight-divider" />
                <p className="insight-subhead">Hành vi bề nổi</p><p>{item.behavior}</p>
                <p className="insight-subhead">Insight ẩn giấu</p><p>{item.hidden}</p>
                <div className="insight-divider punchline-divider" />
                <p className="punchline">{item.punchline}</p>
              </blockquote>
            ))}
          </div>

          <h3 className="subsection-title">Zero Moment of Truth</h3>
          <div id="zmot" className="card-grid three-col zmot-grid">
            {zmot.map((item) => <Card key={item.label} className="zmot-card"><p className="zmot-kicker">{item.label}</p><h3>{item.title}</h3><p className="zmot-content">{item.content}</p><p className="zmot-action">{item.action}</p></Card>)}
          </div>

          <h3 className="subsection-title">PHÂN KHÚC KHÁCH HÀNG</h3>
          <BasicTable headers={["Tên phân khúc", "Đặc điểm & nhu cầu cốt lõi", "Quy mô (%)", "Độ khó xử lý hồ sơ", "Vai trò"]} rows={segments.map((x) => [x.name, x.needs, x.share, x.difficulty, x.role])} />

          <h3 className="subsection-title">TIẾP CẬN ĐA KÊNH</h3>
          <BasicTable headers={["Phân khúc", "Nhận biết", "Cân nhắc", "Chuyển đổi"]} rows={channels.map((x) => [x.segment, x.awareness, x.consideration, x.conversion])} />
        </PageSection>

        <PageSection title="ĐỊNH VỊ">
          <div className="positioning-banner"><span>Positioning Statement</span><p>PHUONG NAM EDUCATION — Đồng hành xuyên suốt trên hành trình Du học Đức, từ định hướng học, xây dựng năng lực tiếng Đức, thi chứng chỉ đến xử lý hồ sơ chuyên sâu, để mỗi bước đi đều rõ ràng và phù hợp với mục tiêu học tập tại Đức.</p></div>
          <div className="card-grid three-col">{taglines.map((item) => <Card key={item.approach} className="tagline-card"><p>{item.approach}</p><h3>{item.text}</h3></Card>)}</div>
          <div className="win-strip"><h3>ĐỊNH VỊ CHIẾN THẮNG</h3><strong>PHUONG NAM EDUCATION - Trung tâm All-in-one: Nơi Lộ Trình Của Bạn Được Hỗ Trợ Từ Việt Nam Sang Đức.</strong><ul>{positioningWin.map((item) => <li key={item}>{item}</li>)}</ul></div>
          <h3 className="subsection-title">Bảng USP</h3>
          <div className="usp-grid">{usps.map(([usp, role]) => <Card key={usp} className="usp-card"><h3>{usp}</h3><p>{role}</p></Card>)}</div>
        </PageSection>
      </main>
    </>
  );
}

function TabFanpage() {
  const [anglePillar, setAnglePillar] = useState("Tất cả");
  const filteredAngles = anglePillar === "Tất cả" ? contentAngles : contentAngles.filter(([pillar]) => pillar === anglePillar);
  const pillarNames = Array.from(new Set(contentAngles.map(([pillar]) => pillar)));
  return (
    <>
      <HeroBanner />
      <main className="page-shell">
        <PageSection title="Đánh giá hiện trạng Fanpage" className="fanpage-section">
          <div className="fanpage-card-grid review-summary-grid">{fanpageReview.map((item) => <Card key={item.number} className="fanpage-summary-card"><span className="fanpage-number">{item.number}</span><p className="fanpage-card-label">{item.label}</p><h3>{item.title}</h3><p className="fanpage-card-summary">{item.summary}</p><details className="fanpage-card-details"><summary>Chi tiết đánh giá <ChevronDown size={16} /></summary><ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul></details></Card>)}</div>
          <p className="full-width-note">Fanpage có nền tảng tốt, nhưng cần chuyển từ “hiện diện & cung cấp thông tin” sang “định vị rõ – xây Trust – tạo Lead chất lượng”.</p>
        </PageSection>

        <PageSection title="Đề xuất cải thiện" className="fanpage-section">
          <div className="fanpage-card-grid improvement-summary-grid">{improvementCards.map((item) => <Card key={item.number} className="fanpage-summary-card"><span className="fanpage-number">{item.number}</span><p className="fanpage-card-label">{item.label}</p><h3>{item.title}</h3><p className="fanpage-card-summary">{item.summary}</p><details className="fanpage-card-details"><summary>Chi tiết đề xuất <ChevronDown size={16} /></summary><ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul><p className="goal-copy">{item.goal}</p></details></Card>)}</div>
          <h3 className="subsection-title">TỐI ƯU CÁC ĐIỂM CHẠM CHÍNH</h3>
          <div className="card-grid three-col">
            <Card><span className="section-label">BIO — TỪ CLAIM CHUNG → NĂNG LỰC CỤ THỂ</span><h3>15+ năm đồng hành cùng lộ trình Du học Đức: Định hướng học thuật · Đào tạo tiếng Đức · Thi ÖSD · Hồ sơ chuyên sâu.</h3><p>Hiện tại: Nhấn mạnh số năm hoạt động và vị thế thương hiệu nhưng chưa nói đủ rõ năng lực khác biệt.</p><p className="red-copy">Vai trò: Người mới không chỉ biết PNE “lâu năm”, mà hiểu ngay PNE có thể hỗ trợ những gì.</p></Card>
            <Card><span className="section-label">HIGHLIGHTS — 5 THƯ VIỆN NỘI DUNG DÀI HẠN</span><div className="compact-library">{highlightsLibrary.map(([name, content, value]) => <div key={name}><strong>{name}</strong><p>{content}</p><em>{value}</em></div>)}</div></Card>
            <Card><span className="section-label">FEATURED — 3 SLOT LINH HOẠT THEO THỜI ĐIỂM</span><p>Không cố định nội dung. Featured nên đóng vai trò như 3 vị trí ưu tiên truyền thông hiện tại của Page: Tuyển sinh chương trình du học, Lịch khai giảng, Lịch thi, Sự kiện,...</p><p className="red-copy">Nguyên tắc: cập nhật Featured theo campaign calendar, deadline và nhu cầu kinh doanh thay vì giữ cố định quanh năm.</p></Card>
          </div>
        </PageSection>

        <PageSection title="3. CONTENT PLAN">
          <h3 className="subsection-title">3.1 Pillar & Tỷ trọng</h3>
          <div className="pillar-list">{pillars.map(([name, share, funnel]) => <div className="pillar-row" key={name}><div><strong>{name}</strong><span>{funnel}</span></div><div className="progress-track"><span style={{ width: `${share}%` }} /></div><b>{share}%</b></div>)}</div>

          <h3 className="subsection-title">3.2 Đề xuất Lead Magnet</h3>
          <div className="card-grid two-col">{leadMagnets.map(([audience, format, quote, details]) => <Card key={audience} className="lead-card"><span className="section-label">{audience}</span><h3>{format}</h3><blockquote>{quote}</blockquote><p>{details}</p></Card>)}</div>

          <h3 className="subsection-title">3.3 Content Angle chi tiết</h3>
          <div className="filter-row" aria-label="Lọc Content Angle theo Pillar"><button className={anglePillar === "Tất cả" ? "active" : ""} onClick={() => setAnglePillar("Tất cả")}>Tất cả</button>{pillarNames.map((pillar) => <button key={pillar} className={anglePillar === pillar ? "active" : ""} onClick={() => setAnglePillar(pillar)}>{pillar.replace(/ \([0-9]+%\)/, "")}</button>)}</div>
          <div className="angles-list">
            {filteredAngles.map(([pillar, title, approach, heading]) => (
              <details key={title} className="angle-accordion">
                <summary><span>{title}</span><ChevronDown size={19} /></summary>
                <div className="angle-content"><div><p className="field-label">Cách tiếp cận</p><p>{approach}</p></div><div><p className="field-label">Tiêu đề gợi ý</p><p>{heading}</p></div><div><p className="field-label">Điểm nhấn</p><p className="red-copy">{pillar}</p></div></div>
              </details>
            ))}
          </div>

          <h3 className="subsection-title">3.4 Content Calendar</h3>
          <BasicTable headers={["Ngày", "Vai trò", "Funnel", "Khung giờ đề xuất", "Ví dụ format"]} rows={calendar} />
          <p className="full-width-note">Tần suất chuẩn: 03 bài/tuần, khoảng 12–13 bài/tháng. Mỗi tuần nên có ít nhất một nội dung Education, một nội dung Consideration và một nội dung Trust/Engagement.</p>
        </PageSection>
      </main>
    </>
  );
}

function TabStandards() {
  const [activeHook, setActiveHook] = useState<string>(hookLibrary[0][0]);
  const [showAllHooks, setShowAllHooks] = useState(false);
  const currentHook = hookLibrary.find(([pillar]) => pillar === activeHook) ?? hookLibrary[0];
  return (
    <>
      <HeroBanner />
      <main className="page-shell">
        <section className="mini-card-grid" aria-label="Quy chuẩn nổi bật">{miniStandards.map(([number, title, text]) => <Card key={number} className="mini-standard"><span>{number}</span><h3>{title}</h3><p>{text}</p></Card>)}</section>
        <PageSection label="03. QUY CHUẨN TRUYỀN THÔNG" title="1. QUY CHUẨN CAPTION">
          <div className="caption-flow">HOOK <ArrowRight size={20} /> BODY <ArrowRight size={20} /> CTA <ArrowRight size={20} /> HASHTAG <ArrowRight size={20} /> FOOTER</div>
          <BasicTable headers={["Thành phần", "Chức năng", "Quy chuẩn"]} rows={captionStandards} />
          <h3 className="subsection-title">Hook</h3>
          <h4 className="small-heading">A. 5 nguyên tắc viết Hook</h4>
          <div className="card-grid five-col">{hookPrinciples.map(([title, text]) => <Card key={title} className="hook-card"><span>{title.split(" — ")[0]}</span><h3>{title.split(" — ")[1]}</h3><p>{text}</p></Card>)}</div>
          <h4 className="small-heading">B. Hook Library</h4>
          <div className="hook-library"><div className="hook-tabs">{hookLibrary.map(([pillar]) => <button className={activeHook === pillar ? "active" : ""} onClick={() => { setActiveHook(pillar); setShowAllHooks(false); }} key={pillar}>{pillar}</button>)}</div><Card><h3>{currentHook[0]}</h3><ul>{(showAllHooks ? currentHook[1] : currentHook[1].slice(0, 2)).map((hook) => <li key={hook}>{hook}</li>)}</ul>{currentHook[1].length > 2 && <button className="show-more" onClick={() => setShowAllHooks((value) => !value)}>{showAllHooks ? "Thu gọn" : "Xem thêm"}</button>}</Card></div>

          <h3 className="subsection-title">Nội dung</h3>
          <BasicTable className="do-dont-mini" headers={["Do", "Don’t"]} rows={contentDoDont} />
          <h3 className="subsection-title">CTA</h3>
          <h4 className="small-heading">Chọn CTA theo Customer Journey</h4>
          <BasicTable headers={["Giai đoạn", "Người dùng đang nghĩ gì?", "CTA phù hợp", "Ví dụ"]} rows={ctaJourney} />
          <Card className="cta-rule"><h3>Quy tắc CTA</h3><strong>CTA tốt = Hành động + Giá trị nhận được + Context khi cần</strong><div><p className="field-label red-label">Không nên</p><p>Inbox ngay!<br />Đăng ký ngay hôm nay!<br />Comment “Đức” ngay!</p></div><div><p className="field-label">Nên</p><p>Nhận Timeline Du học Đức 12 tháng để đối chiếu với kỳ nhập học dự kiến.</p></div></Card>
          <h4 className="small-heading">CTA Library</h4><BasicTable headers={["Pillar", "CTA nên dùng"]} rows={ctaLibrary} />
          <p className="warning-copy">CTA cần tránh: “Bao đậu”, “đậu 100%”, “chắc chắn có Visa”, “đảm bảo việc làm”, “định cư dễ dàng”, “đăng ký ngay kẻo mất cơ hội”, hoặc CTA chung chung như “Inbox ngay” khi không nói rõ người xem nhận được gì.</p>
          <div className="hashtag-footer-grid"><Card><h3>Hashtag</h3><p className="field-label">Công thức</p><p>2 Hashtag cố định + tối đa 1 Hashtag theo chủ đề</p><p className="field-label">Cố định</p><p className="tag-cloud"><i>#DuHocDuc</i><i>#PhuongNamEducation</i></p><p className="field-label">Mở rộng theo nội dung</p><p className="tag-cloud"><i>#APS</i><i>#TestAS</i><i>#MasterDuc</i><i>#HocBongDuc</i><i>#TiengDuc</i><i>#OSD</i><i>#Studienkolleg</i><i>#PNEer</i></p></Card><Card><h3>Footer</h3><p>Footer chuẩn:</p><pre>----------------------------{`\n`}Phuong Nam Education{`\n`}📍 357 Lê Hồng Phong, Phường Vườn Lài, TP. HCM{`\n`}📞 1900 7060{`\n`}📧 info@duhocduc.com{`\n`}🔗duhocduc.com</pre></Card></div>
        </PageSection>

        <PageSection title="2. BẢNG DO/DON'T TỔNG">
          <div className="standards-accordion">{standardsDoDont.map((section) => <details key={section.title} className="standard-details"><summary>{section.title}<ChevronDown size={19} /></summary><BasicTable headers={["Hạng mục", "Nên", "Không nên"]} rows={section.rows} className="centered-headers" /></details>)}</div>
        </PageSection>
        <PageSection title="3. BRAND LEXICON"><BasicTable headers={["Hạn chế sử dụng", "Ưu tiên sử dụng"]} rows={lexicon} /></PageSection>
        <PageSection title="4. PRE-PUBLISH CHECKLIST"><div className="checklist-card">{checklist.map(([group, item], index) => <label className="checklist-item" key={`${group}-${item}`}><input type="checkbox" defaultChecked={index === 0} /><span className="check-icon"><Check size={14} /></span><div className="checklist-item-content"><small>{group}</small><p><b>{String(index + 1).padStart(2, "0")}</b><span>{item}</span></p></div></label>)}</div></PageSection>
      </main>
    </>
  );
}

function TabVisual() {
  return (
    <>
      <HeroBanner />
      <main className="page-shell">
        <PageSection label="04. VISUAL GUIDELINE" title="OVERALL" className="overall-section">
          <div className="overall-rules-strip"><div className="overall-rules-title">QUY TẮC<br />CHUNG</div><div className="overall-rule"><span className="rule-dot rule-dot-light" /><p><strong>Xám & Trắng</strong><br />làm nền<br /><em>(60% diện tích)</em></p></div><div className="overall-rule"><span className="rule-dot rule-dot-red" /><p><strong>Đỏ</strong> là màu chủ đạo<br /><em>(30% diện tích)</em></p></div><div className="overall-rule"><span className="rule-dot rule-dot-yellow" /><p><strong>Vàng</strong> cho điểm nhấn<br /><em>(10% diện tích)</em></p></div><div className="overall-rule"><span className="rule-symbol">Aa</span><p><strong>Typography rõ ràng</strong><br />để đọc trên mobile</p></div><div className="overall-rule"><Eye size={19} className="rule-eye" /><p><strong>Tối đa 1–2 điểm nhấn</strong><br />trong mỗi hình</p></div></div>
          <p className="overall-note">* Lưu ý: Màu đỏ vẫn có thể được sử dụng làm nền cho một số bài đăng, nhưng chỉ nên chiếm tối đa 10% tổng số post trên fanpage.</p>

          <div className="overall-palette-panel"><h3 className="overall-panel-title"><span>01.</span> COLOR PALETTE</h3><div className="palette-swatch-grid"><div className="palette-swatch"><span style={{ background: "#D12026" }} /><strong>Đỏ – Chủ đạo</strong><b>#D12026</b></div><div className="palette-swatch"><span style={{ background: "#FFFFFF" }} /><strong>Trắng – Nền</strong><b>#FFFFFF</b></div><div className="palette-swatch"><span style={{ background: "#F1F1F1" }} /><strong>Xám – Nền</strong><b>#F1F1F1</b></div><div className="palette-swatch"><span style={{ background: "#545454" }} /><strong>Xám – Nhấn</strong><b>#545454</b></div><div className="palette-swatch"><span style={{ background: "#FFCC00" }} /><strong>Vàng – Nhấn</strong><b>#FFCC00</b></div></div></div>

          <div className="overall-lower-grid"><div className="overall-gradient-panel"><h3 className="overall-panel-title"><span>02.</span> GRADIENT SYSTEM</h3><div className="gradient-list"><div><span className="gradient-bar gradient-red" /><strong>Linear gradient 135°</strong><small>#D12026&nbsp;&nbsp; #9D0005</small></div><div><span className="gradient-bar gradient-neutral" /><strong>Linear gradient 135°</strong><small>#F1F1F1&nbsp;&nbsp; #FFFFFF</small></div><div><span className="gradient-bar gradient-rose" /><strong>Linear gradient 135°</strong><small>#FFD7D8&nbsp;&nbsp; #FFFFFF</small></div></div></div><div className="overall-elements-panel"><h3 className="overall-panel-title"><span>03.</span> VISUAL ELEMENTS</h3><div className="visual-elements-list"><div><strong>Flag</strong><span className="visual-icon-row"><i><Flag size={18} /></i></span></div><div><strong>Badge & Tag</strong><span className="visual-icon-row"><em className="element-badge red-badge">DEUTSCH</em><em className="element-badge yellow-badge">GERMANY</em><em className="element-badge outline-badge">A1</em></span></div><div><strong>Landmarks<br />(outline)</strong><span className="visual-icon-row"><i><Landmark size={18} /></i><i><FileText size={18} /></i><i><Landmark size={18} /></i></span></div><div><strong>Education icons</strong><span className="visual-icon-row"><i><BookOpen size={18} /></i><i><GraduationCap size={18} /></i><i><Pencil size={18} /></i><i><Headphones size={18} /></i></span></div><div><strong>Study abroad<br />icons</strong><span className="visual-icon-row"><i><Plane size={18} /></i><i><MapPin size={18} /></i><i><BriefcaseBusiness size={18} /></i></span></div></div></div></div>
        </PageSection>
        <PageSection title="2. POST VISUAL DEMO"><div className="post-gallery">{visualAssets.demos.map((src, index) => <figure key={src}><img src={src} alt={`Mẫu post minh họa ${index + 1}`} /><figcaption>Mẫu post minh họa ({index + 1})</figcaption></figure>)}</div></PageSection>
        <PageSection title="3. DESIGN PRINCIPLE"><div className="visual-principle-list">{visualRules.map((rule) => <section key={rule.title} className="principle-group"><div className={`principle-title ${rule.subtitle ? "has-subtitle" : ""}`}><h3>{rule.title}</h3>{rule.subtitle && <p>{rule.subtitle}</p>}</div><div className="principle-columns"><div className="do-column"><span className="principle-column-label"><Check size={13} /> DO</span><ul>{rule.do.map((item) => <li key={item}>{item}</li>)}</ul></div><div className="dont-column"><span className="principle-column-label"><X size={13} /> DON’T</span><ul>{rule.dont.map((item) => <li key={item}>{item}</li>)}</ul></div></div></section>)}</div></PageSection>
      </main>
    </>
  );
}

export default function Home() {
  const initialTab = new URLSearchParams(window.location.search).get("tab");
  const [activeTab, setActiveTab] = useState<TabId>(navItems.some((item) => item.id === initialTab) ? (initialTab as TabId) : "overview");
  const [menuOpen, setMenuOpen] = useState(false);
  const changeTab = (tab: TabId) => { setActiveTab(tab); setMenuOpen(false); window.history.replaceState(null, "", tab === "overview" ? "/" : `/?tab=${tab}`); window.scrollTo({ top: 0, behavior: "auto" }); };
  return (
    <div className="app-shell">
      <header className="site-header">
        <button className="brand-lockup" onClick={() => changeTab("overview")} aria-label="Về Overview"><span className="pne-logo-frame" style={{ width: "62px" }}><img className="pne-logo" src={logoUrl} alt="Phuong Nam Education" style={{ width: "62px" }} /></span><span className="header-brand-copy"><b>Marketing Hub · 2026</b></span></button>
        <button className="mobile-menu-button" aria-label={menuOpen ? "Đóng điều hướng" : "Mở điều hướng"} onClick={() => setMenuOpen((value) => !value)}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
        <nav className={menuOpen ? "tab-nav open" : "tab-nav"} aria-label="Điều hướng Marketing Hub">{navItems.map((item) => <button key={item.id} className={activeTab === item.id ? "active" : ""} onClick={() => changeTab(item.id)}><span>{item.number}</span><i>{item.label}</i></button>)}</nav>
      </header>
      {activeTab === "overview" && <TabOverview onOpenTab={changeTab} />}
      {activeTab === "research" && <TabResearch />}
      {activeTab === "fanpage" && <TabFanpage />}
      {activeTab === "standards" && <TabStandards />}
      {activeTab === "visual" && <TabVisual />}
      <footer>Du Học Đức · Phuong Nam Education</footer>
    </div>
  );
}
